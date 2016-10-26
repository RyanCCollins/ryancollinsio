class AddSlugToPost < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :slug, :string
  end
end
