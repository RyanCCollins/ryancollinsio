class CreateReferences < ActiveRecord::Migration[5.0]
  def change
    create_table :references do |t|
      t.string :name
      t.text :body
      t.string :avatar
      t.string :title

      t.timestamps
    end
  end
end
