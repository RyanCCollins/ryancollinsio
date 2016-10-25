module ProjectMutations
  Create = GraphQL::Relay::Mutation.define do
    name 'CreateProject'
    description 'Create a project'
    input_field :auth_token, !types.String
    input_field :project, ProjectInputType

    return_field :project, ProjectType
    resolve -> (inputs, ctx) do
      user = User.find_by(auth_token: inputs[:auth_token])
      project = user.projects.create(inputs[:project])
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
      project = user.projects.update(inputs[:project])
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
      input_field :comment, ProjectCommentInputType, 'The project comment'
      input_field :project_id, !types.ID, 'The project id'
      return_field :comment, ProjectCommentType, 'The comment that was created'
      resolve -> (inputs, ctx) do
        user = User.find_by(auth_token: inputs[:auth_token])
        comment = user.project_comments.build(inputs[:comment])
        comment.project = Project.find_by(id: inputs[:project_id])
        if comment.save!
          {
            comment: comment
          }
        end
      end
    end
    Edit = GraphQL::Relay::Mutation.define do
      name 'EditProjectComment'
      description 'Edit a Project comment'
      input_field :auth_token, !types.String, 'The user auth token'
      input_field :comment, ProjectCommentInputType, 'The project comment'
      input_field :comment_id, !types.ID, 'The comment id'

      return_field :comment, ProjectCommentType, 'The comment that was created'
      resolve -> (inputs, ctx) do
        user = User.find_by(auth_token: inputs[:auth_token])
        comment = user.project_comments.find_by(id: inputs[:comment_id])
        if comment.update(inputs[:comment])
          {
            comment: comment
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
  end
end
