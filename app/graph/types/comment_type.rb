CommentType = GraphQL::ObjectType.define do
  name 'Comment'
  description 'A generic comment type'
  field :id, !types.ID, 'The comment ID'
  field :body, !types.String, 'The comment body'
  field :user, UserType, 'The user who posted the comment'
end
