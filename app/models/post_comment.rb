class PostComment < ApplicationRecord
  belongs_to :post
  belongs_to :user
  has_many :votes, class_name: "PostCommentVote"
  def total_votes
    self.votes.count
  end
end
