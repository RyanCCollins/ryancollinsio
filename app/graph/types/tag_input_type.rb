TagInputType = GraphQL::InputObjectType.define do
  name 'TagInput'
  description 'The tag input type'
  input_field :title, !types.String, 'The title of the tag'
end
