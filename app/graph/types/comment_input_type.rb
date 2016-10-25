CommentInputType = GraphQL::InputObjectType.define do
  name 'CommentInput'
  description 'Generic comment input type'
  input_field :body, !types.String, 'The body of the comment'
end
