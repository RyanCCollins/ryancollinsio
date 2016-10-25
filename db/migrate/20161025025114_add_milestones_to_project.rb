class AddMilestonesToProject < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :milestones, :text
  end
end
