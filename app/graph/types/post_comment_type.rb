PostCommentType = GraphQL::ObjectType.define do
  name 'PostComment'
  description 'A comment on a post'
  field :id, !types.ID, 'The ID of the comment'
  field :body, types.String, 'The body of the comment'
  field :post, PostType, 'The related post'
  field :user, UserType, 'The user who made the comment'
  field :created_at, types.String, 'The time the comment was created'
  field :total_votes, types.Int, 'The total number of votes'
end
