InquiryInputType = GraphQL::InputObjectType.define do
  name 'InquiryInput'
  description 'A contact inquiry'
  input_field :name, !types.String, 'The name of the person'
  input_field :email, !types.String, 'The email of the person'
  input_field :message, !types.String, 'The message of the inquiry'
  input_field :category, InquiryCategoyEnum, 'The category of the inquiry'
end
