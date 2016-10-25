class Project < ApplicationRecord
  belongs_to :user
  enum category: [:frontend, :fullstack, :backend, :ios]
end
