PostInputType = GraphQL::InputObjectType.define do
  name 'PostInput'
  description 'The data the user enters when creating a post'
  input_field :title, !types.String, 'The title of the post'
  input_field :body, !types.String, 'The body of the post'
  input_field :status, !types.String, 'The status for the post'
  input_field :feature_image, types.String, 'The url for the feature image'
  input_field :tags, -> { types[TagInputType] }, 'Associated tags for the post'
end
