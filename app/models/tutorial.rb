class Tutorial < ApplicationRecord
  before_create :create_slug
  after_initialize :set_default_status
  enum status: [:draft, :published, :archived]
  belongs_to :user
  def set_default_status
    self.status ||= :draft if self.new_record?
  end
  def create_slug
    self.slug = self.title.parameterize
  end
end
