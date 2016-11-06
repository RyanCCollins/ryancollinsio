class CreateTutorialComments < ActiveRecord::Migration[5.0]
  def change
    create_table :tutorial_comments do |t|
      t.references :tutorial, foreign_key: true
      t.references :user, foreign_key: true
      t.text :body

      t.timestamps
    end
  end
end
