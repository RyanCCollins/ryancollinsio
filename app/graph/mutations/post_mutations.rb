module PostMutations
  Create = GraphQL::Relay::Mutation.define do
    name 'CreatePost'
    description 'Create a post'
    input_field :auth_token, !types.String
    input_field :post, PostInputType
    return_field :post, PostType
    resolve -> (inputs, ctx) do
      user = User.find_by(auth_token: inputs[:auth_token])
      post_inputs = inputs[:post]
      if inputs[:post][:tags]
        tags = inputs[:post][:tags].to_a.uniq
      end
      post = user.posts.create(
        title: post_inputs[:title],
        body: post_inputs[:body],
        feature_image: post_inputs[:feature_image]
      )
      if tags
        tags.each do |tag|
          post.tags << Tag.find_or_create_by(title: tag.to_h["title"])
        end
      end
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
      if post.update(inputs[:post].to_h)
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
    # mutation createPostComment($auth_token: String!, $comment: CommentInput, $id: ID!) {
    #   CreatePostComment(input: {auth_token: $auth_token, comment: $comment, post_id: $id }) {
    #     post_comment {
    #       body
    #     }
    #   }
    # }
    Create = GraphQL::Relay::Mutation.define do
      name 'CreatePostComment'
      description 'Create a Post comment'
      input_field :auth_token, !types.String, 'The user auth token'
      input_field :comment, CommentInputType, 'The post comment'
      input_field :post_id, !types.ID, 'The post id'
      return_field :post_comment, PostCommentType, 'The comment that was created'
      resolve -> (inputs, ctx) do
        user = User.find_by(auth_token: inputs[:auth_token])
        post = Post.find_by(id: inputs[:post_id])
        comment = PostComment.new(
          body: inputs[:comment][:body],
          user: user,
          post: post
        )
        if comment.save!
          {
            post_comment: comment
          }
        end
      end
    end
    Edit = GraphQL::Relay::Mutation.define do
      name 'EditPostComment'
      description 'Edit a Post comment'
      input_field :auth_token, !types.String, 'The user auth token'
      input_field :comment, CommentInputType, 'The post comment'
      input_field :comment_id, !types.ID, 'The comment id'

      return_field :post_comment, PostCommentType, 'The comment that was created'
      resolve -> (inputs, ctx) do
        user = User.find_by(auth_token: inputs[:auth_token])
        comment = user.post_comments.find_by(id: inputs[:comment_id])
        if comment.update(inputs[:comment].to_h)
          {
            post_comment: comment
          }
        end
      end
    end
    # mutation deletePostComment($auth_token: String!, $id: ID!) {
    #   DeletePostComment(input : {auth_token: $auth_token, comment_id: $id }) {
    #     deleted_id
    #   }
    # }
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

    module PostCommentVotes
      Vote = GraphQL::Relay::Mutation.define do
        name 'VotePostComment'
        description 'Run this when a user upvotes a comment'
        input_field :auth_token, !types.String, 'The user auth token'
        input_field :post_comment_id, !types.ID, 'The ID of the post comment'
        return_field :total_votes, !types.Int, 'The new total number of votes'
        resolve -> (inputs, ctx) do
          comment = PostComment.find_by(id: inputs[:post_comment_id])
          vote = PostCommentVote.new(
            user: User.find_by(auth_token: inputs[:auth_token]),
            post_comment: comment
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
