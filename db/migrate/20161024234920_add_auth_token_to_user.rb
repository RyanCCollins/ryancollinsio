class AddAuthTokenToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :auth_token, :string, default: ''
    add_column :users, :avatar, :string
    add_column :users, :role, :integer, default: 0, null: false
    add_column :users, :bio, :text
    add_column :users, :name, :string, default: '', null: false
  end
end
