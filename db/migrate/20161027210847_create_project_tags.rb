class CreateProjectTags < ActiveRecord::Migration[5.0]
  def change
    create_table :project_tags, id: false do |t|

      t.integer :tag_id
      t.integer :project_id
    end
  end
end
