ProjectCommentType = GraphQL::ObjectType.define do
  name 'ProjectComment'
  description 'A comment on a post'
  field :comment, CommentType, 'The actual comment'
  field :project, ProjectType, 'The related project'
end
