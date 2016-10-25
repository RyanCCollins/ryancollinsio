PostCommentType = GraphQL::ObjectType.define do
  name 'PostComment'
  description 'A comment on a post'
  field :comment, CommentType, 'The actual comment'
  field :post, PostType, 'The related post'
end