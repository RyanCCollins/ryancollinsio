ProjectImageType = GraphQL::ObjectType.define do
  name 'ProjectImage'
  description 'Image for a project'
  field :id, !types.ID, 'The id of this image'
  field :project, !ProjectType, 'The associated project'
  field :src, !types.String, 'The source / url of the image'
end
