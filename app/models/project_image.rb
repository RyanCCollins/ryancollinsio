class ProjectImage < ApplicationRecord
  belongs_to :project, dependent: :destroy
end
