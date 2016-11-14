module TutorialMutations
  Create = GraphQL::Relay::Mutation.define do
    name 'CreateTutorial'
    description 'Create a tutorial'
    input_field :auth_token, !types.String
    input_field :tutorial, TutorialInputType

    return_field :tutorial, TutorialType
    resolve -> (_object, inputs, _ctx) do
      user = User.find_by(auth_token: inputs[:auth_token])
      tutorial = user.tutorials.create(
        inputs[:tutorial].to_h
      )
      if tutorial.save!
        {
          tutorial: tutorial
        }
      end
    end
  end
  Edit = GraphQL::Relay::Mutation.define do
    name 'EditTutorial'
    description 'Edit a tutorial'
    input_field :auth_token, !types.String
    input_field :id, !types.ID
    input_field :tutorial, TutorialInputType

    return_field :tutorial, TutorialType
    resolve -> (_object, inputs, _ctx) do
      user = User.find_by(auth_token: inputs[:auth_token])
      tutorial = user.tutorials.update(inputs[:tutorial].to_h)
      if tutorial.save!
        {
          tutorial: tutorial
        }
      end
    end
  end
  Delete = GraphQL::Relay::Mutation.define do
    name 'DeleteTutorial'
    description 'Delete a tutorial'
    input_field :auth_token, !types.String
    input_field :id, !types.ID

    return_field :deleted_id, !types.ID
    resolve -> (_object, inputs, _ctx) do
      user = User.find_by(auth_token: inputs[:auth_token])
      tutorial = user.tutorials.find_by(id: inputs[:id])
      if tutorial.destroy!
        {
          deleted_id: tutorial.id
        }
      end
    end
  end

  module TutorialComments
    Vote = GraphQL::Relay::Mutation.define do
      name 'VoteTutorialComment'
      description 'Run this when a user upvotes a comment'
      input_field :auth_token, !types.String, 'The user auth token'
      input_field :tutorial_comment_id, !types.ID, 'The ID of the tutorial comment'
      return_field :total_votes, !types.Int, 'The new total number of votes'
      resolve -> (_object, inputs, _ctx) do
        user = User.find_by(auth_token: inputs[:auth_token])
        comment = TutorialComment.find_by(id: inputs[:tutorial_comment_id])
        vote = TutorialCommentVote.new(
          user: user,
          tutorial_comment: comment
        )
        if vote.save!
          {
            total_votes: comment.total_votes
          }
        end
      end
    end

    Create = GraphQL::Relay::Mutation.define do
      name 'CreateTutorialComment'
      description 'Create a Tutorial comment'
      input_field :auth_token, !types.String, 'The user auth token'
      input_field :comment, CommentInputType, 'The comment'
      input_field :tutorial_id, !types.ID, 'The tutorial id'

      return_field :tutorial_comment, TutorialCommentType, 'The comment that was created'
      resolve -> (_object, inputs, _ctx) do
        user = User.find_by(auth_token: inputs[:auth_token])
        tutorial = Tutorial.find_by(id: inputs[:tutorial_id])
        comment = TutorialComment.new(
          body: inputs[:comment][:body],
          user: user,
          tutorial: tutorial
        )
        if comment.save!
          {
            tutorial_comment: comment
          }
        end
      end
    end
    Edit = GraphQL::Relay::Mutation.define do
      name 'EditTutorialComment'
      description 'Edit a Tutorial comment'
      input_field :auth_token, !types.String, 'The user auth token'
      input_field :comment, CommentInputType, 'The comment'
      input_field :comment_id, !types.ID, 'The comment id'

      return_field :tutorial_comment, TutorialCommentType, 'The comment that was created'
      resolve -> (_object, inputs, _ctx) do
        user = User.find_by(auth_token: inputs[:auth_token])
        comment = user.tutorial_comments.find_by(id: inputs[:comment_id])
        if comment.update(inputs[:comment].to_h)
          {
            tutorial_comment: comment
          }
        end
      end
    end
    Delete = GraphQL::Relay::Mutation.define do
      name 'DeleteTutorialComment'
      description 'Delete a tutorial comment'
      input_field :auth_token, !types.String, 'The user auth token'
      input_field :comment_id, !types.ID, 'The comment id'

      return_field :deleted_id, types.ID, 'The id of the comment that was deleted'
      resolve -> (_object, inputs, _ctx) do
        user = User.find_by(auth_token: inputs[:auth_token])
        comment = user.tutorial_comments.find_by(id: inputs[:comment_id])
        if comment.destroy
          {
            deleted_id: comment.id
          }
        end
      end
    end
  end
end
