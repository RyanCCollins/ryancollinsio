module UserMutations
  SignUp = GraphQL::Relay::Mutation.define do
    name 'SignUp'
    description 'Sign up a User'
    input_field :user_signup, UserSignupInputType

    return_field :user, AuthUserType
    resolve -> (_object, inputs, _ctx) do
      input_args = inputs[:user_signup]
      @user = User.create(
        name: input_args[:name],
        email: input_args[:email],
        password: input_args[:password],
        password_confirmation: input_args[:password_confirmation]
      )
      if @user.save
        {
          user: @user
        }
      end
    end
  end
  SignIn = GraphQL::Relay::Mutation.define do
    name 'SignIn'
    description 'Sign in a User'
    input_field :email, !types.String
    input_field :password, !types.String

    return_field :user, AuthUserType
    resolve -> (_object, inputs, _ctx) do
      @user = User.find_for_database_authentication(email: inputs[:email])
      if @user.valid_password?(inputs[:password])
        {
          user: @user
        }
      else
        {
          user: {}
        }
      end
    end
  end
end
