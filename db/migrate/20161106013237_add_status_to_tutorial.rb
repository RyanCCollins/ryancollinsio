class AddStatusToTutorial < ActiveRecord::Migration[5.0]
  def change
    add_column :tutorials, :status, :integer
    add_reference :tutorials, :user, foreign_key: true
  end
end
