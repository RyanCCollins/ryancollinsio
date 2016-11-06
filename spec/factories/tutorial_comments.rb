FactoryGirl.define do
  factory :tutorial_comment do
    tutorial nil
    user nil
    body "MyText"
  end
end
