class AddDesignPatternsToProject < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :designPatterns, :text
    add_column :projects, :technicalInformation, :text
  end
end
