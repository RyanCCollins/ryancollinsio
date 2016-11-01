InquiryType = GraphQL::ObjectType.define do
  name 'Inquiry'
  description 'A contact inquiry'
  field :name, !types.String, 'The name of the person'
  field :email, !types.String, 'The email of the person'
  field :message, !types.String, 'The message of the inquiry'
  field :category, InquiryCategoyEnum, 'The category of the inquiry'
end
