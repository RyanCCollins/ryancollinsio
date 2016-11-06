TutorialType = GraphQL::ObjectType.define do
  name 'Tutorial'
  description 'A tutorial'
  field :title, !types.String, 'The title of the tutorial'
  field :description, types.String, 'The description of the tutorial'
  field :title, !types.String, 'The title of the tutorial'
  field :link, !types.String, 'The url of the video'
  field :image, types.String, 'An image for the video'
  field :status, types.String, 'The status of the tutorial'
  field :body, types.String, 'The body of the tutorial'
  field :user, UserType, 'The user who created the tutorial'
  field :slug, types.String, 'The slug for the tutorial'
  field :comments, types[TutorialCommentType], 'Associated comments'
end
