FeedbackType = GraphQL::ObjectType.define do
  name 'Feedback'
  description 'Feedback submitted by a user'
  field :id, !types.ID, 'The feedback id'
  field :description, !types.String, 'Description of the feedback'
  field :url, types.String, 'The url where the feedback came from'
  field :user, UserType, 'The user that submitted the feedback'
end
