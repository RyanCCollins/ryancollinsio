class AddFeatureImageToPost < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :feature_image, :string
  end
end
