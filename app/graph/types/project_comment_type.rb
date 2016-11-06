ProjectCommentType = GraphQL::ObjectType.define do
  name 'ProjectComment'
  description 'A comment on a post'
  field :id, !types.ID, 'The ID of the comment'
  field :body, types.String, 'The body of the comment'
  field :project, ProjectType, 'The related project'
  field :user, UserType, 'The user who made the comment'
  field :created_at, types.String, 'The time the comment was created'
  field :total_votes, types.Int, 'The total number of votes'
end
