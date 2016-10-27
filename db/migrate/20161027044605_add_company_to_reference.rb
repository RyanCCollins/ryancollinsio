class AddCompanyToReference < ActiveRecord::Migration[5.0]
  def change
    add_column :references, :company, :string
  end
end
