class AddSlugToTutorial < ActiveRecord::Migration[5.0]
  def change
    add_column :tutorials, :slug, :string
  end
end
