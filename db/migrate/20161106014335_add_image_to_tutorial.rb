class AddImageToTutorial < ActiveRecord::Migration[5.0]
  def change
    add_column :tutorials, :image, :string
  end
end
