module InquiryMutations
  Create = GraphQL::Relay::Mutation.define do
    name 'CreateInquiry'
    description 'Create an inquiry'
    input_field :inquiry, InquiryInputType
    return_field :id, types.ID

    resolve -> (inputs, ctx) do
      parsed_inputs = inputs[:inquiry]
      inquiry = Inquiry.create(
        name: parsed_inputs[:name],
        email: parsed_inputs[:email],
        message: parsed_inputs[:message],
        category: parsed_inputs[:category]
      )
      if inquiry.save!
        {
          id: inquiry.id
        }
      end
    end
  end
end
