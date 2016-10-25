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
    end
    Edit = GraphQL::Relay::Mutation.define do
    end
    Delete = GraphQL::Relay::Mutation.define do
    end  
  end
end