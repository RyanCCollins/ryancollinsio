class AddCategoryToPost < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :category, :int
  end
end
