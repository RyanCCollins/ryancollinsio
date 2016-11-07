class AddSortPriorityToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :sort_priority, :integer, default: 0, null: false
  end
end
