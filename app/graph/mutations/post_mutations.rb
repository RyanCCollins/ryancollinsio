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

  module PostComments
    Create = GraphQL::Relay::Mutation.define do
      name 'CreatePostComment'
      description 'Create a Post comment'
      input_field :auth_token, !types.String, 'The user auth token'
      input_field :comment, PostCommentInputType, 'The post comment'
      input_field :post_id, !types.ID, 'The post id'
      return_field :comment, PostCommentType, 'The comment that was created'
      resolve -> (inputs, ctx) do
        user = User.find_by(auth_token: inputs[:auth_token])
        comment = user.post_comments.build(inputs[:comment])
        comment.post = Post.find_by(id: inputs[:post_id])
        if comment.save!
          {
            comment: comment
          }
        end
      end
    end
    Edit = GraphQL::Relay::Mutation.define do
      name 'EditPostComment'
      description 'Edit a Post comment'
      input_field :auth_token, !types.String, 'The user auth token'
      input_field :comment, PostCommentInputType, 'The post comment'
      input_field :comment_id, !types.ID, 'The comment id'

      return_field :comment, PostCommentType, 'The comment that was created'
      resolve -> (inputs, ctx) do
        user = User.find_by(auth_token: inputs[:auth_token])
        comment = user.post_comments.find_by(id: inputs[:comment_id])
        if comment.update(inputs[:comment])
          {
            comment: comment
          }
        end
      end
    end
    Delete = GraphQL::Relay::Mutation.define do
      name 'DeletePostComment'
      description 'Delete a Post comment'
      input_field :auth_token, !types.String, 'The user auth token'
      input_field :comment_id, !types.ID, 'The comment id'

      return_field :deleted_id, types.ID, 'The id of the comment that was deleted'
      resolve -> (inputs, ctx) do
        user = User.find_by(auth_token: inputs[:auth_token])
        comment = user.post_comments.find_by(id: inputs[:comment_id])
        if comment.destroy
          {
            deleted_id: comment.id
          }
        end
      end
    end
  end
end
