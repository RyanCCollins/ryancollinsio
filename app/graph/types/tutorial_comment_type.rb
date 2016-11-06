 TutorialCommentType = GraphQL::ObjectType.define do
  name 'TutorialComment'
  description 'A comment on a post'
  field :id, !types.ID, 'The ID of the comment'
  field :body, types.String, 'The body of the comment'
  field :tutorial, TutorialType, 'The related tutorial'
  field :user, UserType, 'The user who made the comment'
  field :created_at, types.String, 'The time the comment was created'
end
