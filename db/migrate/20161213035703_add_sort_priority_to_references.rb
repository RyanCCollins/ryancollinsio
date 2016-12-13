class AddSortPriorityToReferences < ActiveRecord::Migration[5.0]
  def change
    add_column :references, :sort_priority, :integer
  end
end
