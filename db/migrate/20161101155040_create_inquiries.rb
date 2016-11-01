class CreateInquiries < ActiveRecord::Migration[5.0]
  def change
    create_table :inquiries do |t|
      t.string :name
      t.string :email
      t.text :message
      t.integer :category

      t.timestamps
    end
  end
end
