class Post < ApplicationRecord
  before_create :create_slug
  belongs_to :user
  has_many :post_comments, class_name: 'PostComment'
  alias_attribute :comments, :post_comments
  def create_slug
    self.slug = self.title.parameterize
  end
end
