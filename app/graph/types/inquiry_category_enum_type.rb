InquiryCategoyEnumType = GraphQL::EnumType.define do
  name 'InquiryCategoyEnum'
  description 'The status of the event'
  value 'job'
  value 'tutorial'
  value 'suggestion'
  value 'other'
end
