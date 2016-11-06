class ProjectComment < ApplicationRecord
  belongs_to :project
  belongs_to :user
  has_many :votes, class_name: "ProjectCommentVote"
  def total_votes
    self.votes.count
  end
end
