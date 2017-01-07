class AddSortPriorityToPost < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :sort_priority, :integer
  end
end
