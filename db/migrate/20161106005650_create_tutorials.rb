class CreateTutorials < ActiveRecord::Migration[5.0]
  def change
    create_table :tutorials do |t|
      t.string :link
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
