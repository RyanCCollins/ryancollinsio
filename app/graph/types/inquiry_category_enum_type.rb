InquiryCategoryEnumType = GraphQL::EnumType.define do
  name 'InquiryCategoryEnum'
  description 'The status of the event'
  value 'job'
  value 'tutorial'
  value 'suggestion'
  value 'other'
end
