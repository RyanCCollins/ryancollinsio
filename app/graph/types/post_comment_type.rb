PostCommentType = GraphQL::ObjectType.define do
  name 'PostComment'
  description 'A comment on a post'
  field :body, types.String, 'The body of the comment'
  field :post, PostType, 'The related post'
  field :user, UserType, 'The user who made the comment'
end
