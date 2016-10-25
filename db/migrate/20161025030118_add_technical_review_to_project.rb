class AddTechnicalReviewToProject < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :technicalReview, :text
    add_column :projects, :reviewerName, :text
  end
end
