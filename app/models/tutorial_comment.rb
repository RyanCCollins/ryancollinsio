class TutorialComment < ApplicationRecord
  belongs_to :tutorial
  belongs_to :user
  has_many :votes, class_name: "TutorialCommentVote"
  def total_votes
    self.votes.count
  end
end
