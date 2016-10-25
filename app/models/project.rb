class Project < ApplicationRecord
  before_create :create_slug
  belongs_to :user
  enum category: [:frontend, :fullstack, :backend, :ios]

  def create_slug
    self.slug = self.title.parameterize
  end
end