module PostMutations
  Create = GraphQL::Relay::Mutation.define do
    name 'CreatePost'
    description 'Create a post'
    input_field :auth_token, !types.String
    input_field :post, PostInputType
    return_field :post, PostType
    resolve -> (inputs, ctx) do
      user = User.find_by(auth_token: inputs[:auth_token])
      post = user.posts.create(inputs[:post])
      if post.save!
        {
          post: post
        }
      end
    end
  end
  Edit = GraphQL::Relay::Mutation.define do
    name 'EditPost'
    description 'Edit a post'
    input_field :auth_token, !types.String
    input_field :id, !types.ID
    input_field :post, PostInputType
    return_field :post, PostType
    resolve -> (inputs, ctx) do
      user = User.find_by(auth_token: inputs[:auth_token])
      post = user.posts.find_by(id: inputs[:id])
      if post.update(inputs[:post])
        {
          post: post
        }
      end
    end
  end
  Delete = GraphQL::Relay::Mutation.define do
    name 'DeletePost'
    description 'Edit a post'
    input_field :auth_token, !types.String
    input_field :id, !types.ID
    
    return_field :deleted_id, types.ID
    resolve -> (inputs, ctx) do
      user = User.find_by(auth_token: inputs[:auth_token])
      post = user.posts.find_by(id: inputs[:id])
      if post.destroy
        {
          deleted_id: post.id
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