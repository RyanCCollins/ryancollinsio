class Project < ApplicationRecord
  before_create :create_slug
  belongs_to :user
  enum category: [:frontend, :fullstack, :backend, :ios]
  has_many :images, class_name: 'ProjectImage'
  has_many :project_comments
  alias_attribute :comments, :project_comments
  has_and_belongs_to_many :tags, join_table: :project_tags

  def create_slug
    self.slug = self.title.parameterize
  end
end
