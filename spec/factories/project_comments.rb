FactoryGirl.define do
  factory :project_comment do
    project nil
    user nil
    body "MyText"
  end
end
