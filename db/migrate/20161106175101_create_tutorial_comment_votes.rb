class CreateTutorialCommentVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :tutorial_comment_votes do |t|
      t.references :user, foreign_key: true
      t.references :tutorial_comment, foreign_key: true

      t.timestamps
    end
  end
end
