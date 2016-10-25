class Post < ApplicationRecord
  belongs_to :user
  has_many :post_comments, class_name: 'PostComment'
  alias_attribute :comments, :post_comments
end
