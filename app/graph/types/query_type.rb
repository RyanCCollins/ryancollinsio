QueryType = GraphQL::ObjectType.define do
  name 'Query'
  description 'The root level query type'
  field :user, UserType do
    argument :id, !types.ID
    resolve -> (obj, args, ctx) do
      User.find_by(id: args[:id])
    end
  end
end
