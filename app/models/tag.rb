class Tag < ApplicationRecord
  has_and_belongs_to_many :projects
  has_and_belongs_to_many :posts
  validates :title, presence: true, uniqueness: { case_sensitive: false }
  enum category: [:project, :post]
end
