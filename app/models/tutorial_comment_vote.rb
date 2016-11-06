class TutorialCommentVote < ApplicationRecord
  belongs_to :user
  belongs_to :tutorial_comment
end
