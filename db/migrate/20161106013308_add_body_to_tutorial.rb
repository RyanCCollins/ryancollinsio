class AddBodyToTutorial < ActiveRecord::Migration[5.0]
  def change
    add_column :tutorials, :body, :text
  end
end
