TagType = GraphQL::ObjectType.define do
  name 'Tag'
  description 'The tag type'
  field :title, !types.String, 'The title of the tag'
  field :category, types.String, 'The category of the tag'
end
