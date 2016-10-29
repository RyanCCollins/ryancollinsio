QueryType = GraphQL::ObjectType.define do
  name 'Query'
  description 'The root level query type'
  field :user, UserType do
    argument :id, !types.ID
    resolve -> (obj, args, ctx) do
      User.find_by(id: args[:id])
    end
  end
  field :projects, types[ProjectType] do
    resolve -> (obj, args, ctx) do
      Project.all
    end
  end
  field :project, ProjectType do
    argument :id, types.ID
    argument :slug, types.String
    resolve -> (obj, args, ctx) do
      if args[:id]
        Project.find_by(id: args[:id])
      elsif args[:slug]
        Project.find_by(slug: args[:slug])
      else
        Project.all.first
      end
    end
  end
  field :post, PostType do
    argument :id, types.ID
    argument :slug, types.String
    resolve -> (obj, args, ctx) do
      if args[:id]
        Post.find_by(id: args[:id])
      elsif args[:slug]
        Post.find_by(slug: args[:slug])
      else
        Post.all.first
      end
    end
  end
  field :posts, types[PostType] do
    argument :tag, types.String
    resolve -> (obj, args, ctx) do
      if args[:tag]
        tag = Tag.where(title: args[:tag])
        tag.posts.all
      else
        Post.all
      end
    end
  end
  field :references, types[ReferenceType] do
    resolve -> (obj, args, ctx) do
      Reference.all
    end
  end
  field :postTags, types[TagType] do
    resolve -> (_obj, _args, _ctx) do
      Tag.joins("join post_tags on post_tags.tag_id = tags.id").uniq
    end
  end
  field :projectTags, types[TagType] do
    resolve -> (_obj, _args, _ctx) do
      Tag.joins("join project_tags on project_tags.tag_id = tags.id").uniq
    end
  end
end
