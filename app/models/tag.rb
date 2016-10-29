class Tag < ApplicationRecord
  has_and_belongs_to_many :projects, join_table: :project_tags
  has_and_belongs_to_many :posts, join_table: :post_tags
  validates :title, presence: true, uniqueness: { case_sensitive: false }
end
