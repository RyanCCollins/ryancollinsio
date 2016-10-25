MutationType = GraphQL::ObjectType.define do
  name 'Mutation'
  field :SignUp, field: UserMutations::SignUp.field
  field :SignIn, field: UserMutations::SignIn.field
end
