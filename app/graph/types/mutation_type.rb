MutationType = GraphQL::ObjectType.define do
  name 'Mutation'
  field :SignUp, field: UserMutations::SignUp.field
  field :SignIn, field: UserMutations::SignIn.field

  field :CreatePost, field: PostMutations::Create.field
  field :EditPost, field: PostMutations::Edit.field
  field :DeletePost, field: PostMutations::Delete.field

  field :CreateProject, field: ProjectMutations::Create.field
  field :EditProject, field: ProjectMutations::Edit.field
  field :DeleteProject, field: ProjectMutations::Delete.field

  field :CreatePostComment, field: PostMutations::PostComments::Create.field
  field :EditPostComment, field: PostMutations::PostComments::Edit.field
  field :DeletePostComment, field: PostMutations::PostComments::Delete.field

  field :CreateProjectComment, field: ProjectMutations::ProjectComments::Create.field
  field :EditProjectComment, field: ProjectMutations::ProjectComments::Edit.field
  field :DeleteProjectComment, field: ProjectMutations::ProjectComments::Delete.field
end
