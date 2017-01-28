class GraphqlController < ApplicationController

  def new
  end

  def create
    query_string = params[:query]
    query_variables = ensure_hash(params[:variables])
    document = get_document(query_string)

    result = CapstoneSchema.execute(
      document: document,
      variables: query_variables
    )
    render json: result
  end

  private

    def ensure_hash(query_variables)
      if query_variables.blank?
        {}
      elsif query_variables.is_a?(String)
        JSON.parse(query_variables)
      else
        query_variables
      end
    end

    def get_document(query_string)
      cache_key = Base64.encode64(query_string)
      document = Rails.cache.fetch(cache_key)

      if document
        logger.info "###############################"
        logger.info "Got cached document #{document}"
        logger.info "###############################"
      else
        logger.info "####################################"
        logger.info "Parsing query string #{query_string}"
        logger.info "Cached at key #{cache_key}"
        logger.info "####################################"

        document = GraphQL.parse(query_string)
        Rails.cache.write(cache_key, document)
      end

      document
    end
end
