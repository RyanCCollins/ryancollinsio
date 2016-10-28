export default function serializer(fields, tags, authToken) {
  return {
    post: {
      title: fields.titleInput.value,
      body: fields.bodyInput.value,
      tags,
      feature_image: fields.featureImageInput.value,
    },
    authToken,
  };
}
