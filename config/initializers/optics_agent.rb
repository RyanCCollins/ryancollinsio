optics_agent = OpticAgent::Agent.new
optics_agent.configure do
  schema CapstoneSchema
  api_key ENV['OPTICS_API_KEY']
end
Rails.application.config.middleware.use optics_agent.rack_middleware
