require 'twitter'
client = Twitter::Streaming::Client.new do |config|
  config.consumer_key        = ENV['CONSUMER_KEY'] || "iqF7GIpk0qt5hsHpWs4z2ijzt"
  config.consumer_secret     = ENV['CONSUMER_SECRET'] || "GU284K740qA4FDaEf7uhFufT3xyUKTU0AyLuWpQiHOSwdjjyE8"
  config.access_token        = ENV['TWITTER_ACCESS_TOKEN'] || "4909616183-EI5PPMsWco7r49Y5iqO1BYTgvBS6jaV9Qu4KQk2"
  config.access_token_secret = ENV['TWITTER_TOKEN_SECRET'] || "e8Z1bAPUGTog0NiIPVGMcgMXQiaqq4Aeoem5zSfUZIn8G"
end
