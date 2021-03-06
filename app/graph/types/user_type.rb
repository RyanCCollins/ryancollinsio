UserType = GraphQL::ObjectType.define do
  name 'User'
  description 'The application, non auth user type'
  field :id, !types.ID, 'The id of the user'
  field :name, !types.String, 'The name of the user'
  field :bio, types.String, 'The bio of the user'
  field :avatar, types.String, 'The avatar url of the user'
end
