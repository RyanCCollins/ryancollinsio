module TutorialMutations
  Create = GraphQL::Relay::Mutation.define do
    name 'CreateTutorial'
    description 'Create a project'
    input_field :auth_token, !types.String
    input_field :tutorial, TutorialInputType

    return_field :tutorial, TutorialType
    resolve -> (inputs, ctx) do
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
    resolve -> (inputs, ctx) do
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
    resolve -> (inputs, ctx) do
      user = User.find_by(auth_token: inputs[:auth_token])
      tutorial = user.tutorials.find_by(id: inputs[:id])
      if tutorial.destroy!
        {
          deleted_id: tutorial.id
        }
      end
    end
  end
end
