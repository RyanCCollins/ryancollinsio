FactoryGirl.define do
  factory :post_comment do
    post nil
    user nil
    body "MyText"
  end
end
