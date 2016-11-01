class Inquiry < ApplicationRecord
  enum category: [:job, :tutorial, :suggestion, :other]
end
