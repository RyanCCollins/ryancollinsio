namespace :graphql do
  desc "Generate the graphql ruby introspection schema.json file"
  task schema: :environment do
    query = GraphQL::Introspection::INTROSPECTION_QUERY

    File.open("./client/config/schema/schema.json", "w") do |f|
      f.write(
        JSON.pretty_generate(
          CapstoneSchema.execute(
            query
          )
        )
      )
    end
  end
end
