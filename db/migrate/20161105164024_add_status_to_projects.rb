class AddStatusToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :status, :integer, default: 0
  end
end
