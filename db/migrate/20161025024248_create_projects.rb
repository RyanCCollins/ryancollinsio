class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.string :repoUrl
      t.string :caption
      t.string :featureImage
      t.integer :category
      t.string :projectUrl

      t.timestamps
    end
  end
end
