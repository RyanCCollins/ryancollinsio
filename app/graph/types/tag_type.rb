TagType = GraphQL::ObjectType.define do
  name 'Tag'
  description 'The tag type'
  field :id, !types.ID, 'The id of the tag'
  field :title, !types.String, 'The title of the tag'
end
