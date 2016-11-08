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
    argument :status, types.String
    resolve -> (obj, args, ctx) do
      if args[:status]
        Project.where(status: args[:status]).all.sort_by{ |i| i.updated_at }.reverse.sort_by{ |i| -i.sort_priority }
      else
        Project.all.sort_by{ |i| i.updated_at }.reverse.sort_by{ |i| -i.sort_priority }
      end
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
    argument :status, types.String
    resolve -> (obj, args, ctx) do
      if args[:tag]
        tag = Tag.where(title: args[:tag]).first
        tag.posts.all.sort_by{ |i| i.updated_at }.reverse
      elsif args[:status]
        Post.where(status: args[:status]).all.sort_by{ |i| i.updated_at }.reverse
      else
        Post.all.sort_by{ |i| i.updated_at }.reverse
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
  field :inquiryCategories, types[types.String] do
    resolve -> (_obj, args, _ctx) do
      Inquiry.categories.map{ |a| a[0] }
    end
  end
  field :inquiries, types[InquiryType] do
    argument :auth_token, !types.String
    resolve -> (_obj, args, _ctx) do
      user = User.find_by(auth_token: args[:auth_token])
      if user.role == 'admin'
        Inquiry.all
      end
    end
  end
  field :users, types[AuthUserType] do
    argument :auth_token, !types.String
    resolve -> (_obj, args, _ctx) do
      user = User.find_by(auth_token: args[:auth_token])
      if user.role == 'admin'
        User.all
      end
    end
  end
  field :tutorials, types[TutorialType] do
    argument :status, types.String
    resolve -> (_oby, args, _ctx) do
      if args[:status]
        Tutorial.where(status: args[:status]).all.sort_by{ |i| i.updated_at }.reverse
      else
        Tutorial.all.sort_by{ |i| i.updated_at }.reverse
      end
    end
  end
  field :tutorial, TutorialType do
    argument :id, types.ID
    argument :slug, types.String
    resolve -> (_obj, args, _ctx) do
      if args[:slug]
        Tutorial.find_by(slug: args[:slug])
      else
        Tutorial.find_by(id: args[:id])
      end
    end
  end
end
