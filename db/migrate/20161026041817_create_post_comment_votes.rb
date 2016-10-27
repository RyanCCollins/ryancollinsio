class CreatePostCommentVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :post_comment_votes do |t|
      t.references :post_comment, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
