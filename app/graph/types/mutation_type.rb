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

  field :CreateTutorial, field: TutorialMutations::Create.field
  field :EditTutorial, field: TutorialMutations::Edit.field
  field :DeleteTutorial, field: TutorialMutations::Delete.field

  field :CreateTutorialComment, field: TutorialMutations::TutorialComments::Create.field
  field :EditTutorialComment, field: TutorialMutations::TutorialComments::Edit.field
  field :DeleteTutorialComment, field: TutorialMutations::TutorialComments::Delete.field

  field :VoteTutorialComment, field: TutorialMutations::TutorialComments::Vote.field

  field :CreateInquiry, field: InquiryMutations::Create.field

  field :CreatePostComment, field: PostMutations::PostComments::Create.field
  field :EditPostComment, field: PostMutations::PostComments::Edit.field
  field :DeletePostComment, field: PostMutations::PostComments::Delete.field

  field :VotePostComment, field: PostMutations::PostComments::Vote.field

  field :CreateProjectComment, field: ProjectMutations::ProjectComments::Create.field
  field :EditProjectComment, field: ProjectMutations::ProjectComments::Edit.field
  field :DeleteProjectComment, field: ProjectMutations::ProjectComments::Delete.field

  field :VoteProjectComment, field: ProjectMutations::ProjectComments::Vote.field

end
