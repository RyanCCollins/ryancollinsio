TutorialInputType = GraphQL::InputObjectType.define do
  name 'TutorialInput'
  desription 'A tutorial'
  input_field :title, !types.String, 'The title of the tutorial'
  input_field :description, types.String, 'The description of the tutorial'
  input_field :title, !types.String, 'The title of the tutorial'
  input_field :link, !types.String, 'The url of the video'
  input_field :image, types.String, 'An image for the video'
  input_field :status, types.String, 'The status of the tutorial'
  input_field :body, types.String, 'The body of the tutorial'
end
