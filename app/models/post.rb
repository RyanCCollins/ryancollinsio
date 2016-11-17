class Post < ApplicationRecord
  before_create :create_slug
  belongs_to :user
  has_many :post_comments, class_name: 'PostComment'
  alias_attribute :comments, :post_comments
  has_and_belongs_to_many :tags, join_table: :post_tags
  enum status: [:draft, :published, :archived]

  def create_slug
    self.slug = self.title.parameterize
  end

  def self.search(term)
    key = "%#{term}%"
    Post.where('title LIKE :search OR body LIKE :search', search: key)
  end
end
