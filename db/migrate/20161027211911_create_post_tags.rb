class CreatePostTags < ActiveRecord::Migration[5.0]
  def change
    create_table :post_tags, id: false do |t|
      t.references :post, foreign_key: true
      t.references :tag, foreign_key: true
    end
    add_index :post_tags, [:tag_id, :post_id], unique: true
    add_index :project_tags, [:tag_id, :project_id], unique: true
  end
end
