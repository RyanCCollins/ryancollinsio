source 'https://rubygems.org'
ruby '2.3.1'

gem 'rails', '~> 5.0.0'
gem 'pg'
gem 'puma', '~> 3.0'
gem 'rack-cors'
gem 'ffaker'
gem 'graphql'
gem 'graphiql-rails'
gem 'twitter'

group :test do
  gem 'database_cleaner', '~> 1.5.3'
end

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'shoulda-matchers', '~> 3.1'
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Authentication and authorization
gem 'devise'
gem 'dotenv-rails', :groups => [:development, :test]
gem 'optics-agent'
gem 'dalli'