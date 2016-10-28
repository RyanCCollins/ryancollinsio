PostType = GraphQL::ObjectType.define do
  name 'Post'
  description 'blog post type'
  field :id, !types.ID, 'The id of the post'
  field :title, !types.String, 'The title of the post'
  field :slug, !types.String, 'The slug for the post'
  field :body, types.String, 'The body of the post'
  field :comments, types[PostCommentType], 'Associated comments'
  field :user, UserType, 'The user who made the post'
  field :feature_image, types.String, 'The url to the featured image'
  field :created_at, types.String, 'The datetime it was created'
  field :tags, types[TagType], 'Associated tags for a post'
end
