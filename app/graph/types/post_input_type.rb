PostInputType = GraphQL::InputObjectType.define do
  name 'PostInput'
  description 'The data the user enters when creating a post'
  input_field :title, !types.String, 'The title of the post'
  input_field :body, !types.String, 'The body of the post'
end
