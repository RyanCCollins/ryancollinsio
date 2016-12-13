ReferenceType = GraphQL::ObjectType.define do
  name 'Reference'
  description 'Generic Reference type'
  field :id, !types.ID, 'The Reference ID'
  field :title, !types.String, 'The person title'
  field :name, !types.String, 'The person name'
  field :avatar, !types.String, 'The person avatar'
  field :body, !types.String, 'The Reference body'
  field :company, types.String, 'The company of the person'
  field :sort_priority, types.Int, 'The sort priority of the reference'
end
