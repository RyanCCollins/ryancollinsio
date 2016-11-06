module ProjectMutations
  Create = GraphQL::Relay::Mutation.define do
    name 'CreateProject'
    description 'Create a project'
    input_field :auth_token, !types.String
    input_field :project, ProjectInputType

    return_field :project, ProjectType
    resolve -> (inputs, ctx) do
      user = User.find_by(auth_token: inputs[:auth_token])
      project = user.projects.create(inputs[:project].to_h)
      if project.save!
        {
          project: project
        }
      end
    end
  end
  Edit = GraphQL::Relay::Mutation.define do
    name 'EditProject'
    description 'Edit a project'
    input_field :auth_token, !types.String
    input_field :id, !types.ID
    input_field :project, ProjectInputType

    return_field :project, ProjectType
    resolve -> (inputs, ctx) do
      user = User.find_by(auth_token: inputs[:auth_token])
      project = user.projects.update(inputs[:project].to_h)
      if project.save!
        {
          project: project
        }
      end
    end
  end
  Delete = GraphQL::Relay::Mutation.define do
    name 'DeleteProject'
    description 'Delete a project'
    input_field :auth_token, !types.String
    input_field :id, !types.ID

    return_field :deleted_id, !types.ID
    resolve -> (inputs, ctx) do
      user = User.find_by(auth_token: inputs[:auth_token])
      project = user.projects.find_by(id: inputs[:id])
      if project.destroy!
        {
          deleted_id: project.id
        }
      end
    end
  end

  module ProjectComments
    Create = GraphQL::Relay::Mutation.define do
      name 'CreateProjectComment'
      description 'Create a Project comment'
      input_field :auth_token, !types.String, 'The user auth token'
      input_field :comment, CommentInputType, 'The project comment'
      input_field :project_id, !types.ID, 'The project id'
      return_field :project_comment, ProjectCommentType, 'The comment that was created'
      resolve -> (inputs, ctx) do
        user = User.find_by(auth_token: inputs[:auth_token])
        project = Project.find_by(id: inputs[:project_id])
        comment = ProjectComment.new(
          body: inputs[:comment][:body],
          user: user,
          project: project
        )
        if comment.save!
          {
            project_comment: comment
          }
        end
      end
    end
    Edit = GraphQL::Relay::Mutation.define do
      name 'EditProjectComment'
      description 'Edit a Project comment'
      input_field :auth_token, !types.String, 'The user auth token'
      input_field :comment, CommentInputType, 'The project comment'
      input_field :comment_id, !types.ID, 'The comment id'

      return_field :project_comment, ProjectCommentType, 'The comment that was created'
      resolve -> (inputs, ctx) do
        user = User.find_by(auth_token: inputs[:auth_token])
        comment = user.project_comments.find_by(id: inputs[:comment_id])
        if comment.update(inputs[:comment].to_h)
          {
            project_comment: comment
          }
        end
      end
    end
    Delete = GraphQL::Relay::Mutation.define do
      name 'DeleteProjectComment'
      description 'Delete a Project comment'
      input_field :auth_token, !types.String, 'The user auth token'
      input_field :comment_id, !types.ID, 'The comment id'

      return_field :deleted_id, types.ID, 'The id of the comment that was deleted'
      resolve -> (inputs, ctx) do
        user = User.find_by(auth_token: inputs[:auth_token])
        comment = user.project_comments.find_by(id: inputs[:comment_id])
        if comment.destroy
          {
            deleted_id: comment.id
          }
        end
      end
    end

    module ProjectCommentVotes
      Vote = GraphQL::Relay::Mutation.define do
        name 'VoteProjectComment'
        description 'Run this when a user upvotes a comment'
        input_field :auth_token, !types.String, 'The user auth token'
        input_field :project_comment_id, !types.ID, 'The ID of the project comment'
        return_field :total_votes, !types.Int, 'The new total number of votes'
        resolve -> (inputs, ctx) do
          comment = ProjectComment.find_by(id: inputs[:project_comment_id])
          vote = ProjectCommentVote.new(
            user: User.find_by(auth_token: inputs[:auth_token]),
            project_comment: comment
          )
          if vote.save!
            {
              total_votes: comment.total_votes
            }
          end
        end
      end
    end
  end
end
