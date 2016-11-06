import React, { PropTypes } from 'react';
import Form from 'grommet-udacity/components/Form';
import FormField from 'grommet-udacity/components/FormField';
import FormFields from 'grommet-udacity/components/FormFields';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import { MarkdownInput } from 'components';
import { Select } from 'antd';
const Option = Select.Option;

const CreatePostForm = ({
  fields,
  pastTags,
  onChangeTags,
  invalid,
  onSubmit,
  selectedTags,
}) => (
  <Form>
    <FormFields>
      <fieldset>
        <legend>
          Post
        </legend>
        <FormField
          label="Title"
          htmlFor="title-input"
        >
          <input
            {...fields.titleInput}
            required
            autoFocus
            type="text"
            id="title-input"
            placeholder="Amazing Project"
            name="name"
            autoComplete="off"
            aria-invalid={fields.titleInput.error}
            aria-required
          />
        </FormField>
        <FormField
          label="Body"
          help="The post body"
          htmlFor="post-body-input"
        >
          <MarkdownInput
            required
            field={fields.bodyInput}
            id="post-body-input"
            aria-invalid={fields.bodyInput.error}
            aria-required
          />
        </FormField>
      </fieldset>
      <fieldset>
        <legend>
          Images
        </legend>
        <FormField
          label="Feature Image Url"
          htmlFor="feature-image-input"
        >
          <input
            {...fields.featureImageInput}
            type="text"
            id="feature-image-input"
            placeholder="http://cdn.com/image.png"
            aria-invalid={fields.featureImageInput.error}
          />
        </FormField>
      </fieldset>
      <fieldset>
        <legend>
          Tags
        </legend>
        <FormField
          label="Tags"
          help="Start Typing to Add Tags for the post"
          htmlFor="tag-input"
        >
          <Select
            tags
            style={{ width: '100%' }}
            id="tag-input"
            defaultValue={selectedTags}
            searchPlaceholder="Start Typing to add a tag."
            onChange={onChangeTags}
          >
            {pastTags.map((tag, i) =>
              <Option
                key={i}
                label={tag.title}
              >
                {tag.title}
              </Option>
            )}
          </Select>
        </FormField>
      </fieldset>
    </FormFields>
    <Footer justify="center" pad={{ vertical: 'small' }}>
      <Button label="Submit" onClick={invalid ? null : onSubmit} />
    </Footer>
  </Form>
);

CreatePostForm.propTypes = {
  fields: PropTypes.object.isRequired,
  pastTags: PropTypes.array.isRequired,
  onChangeTags: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  selectedTags: PropTypes.array,
};

export default CreatePostForm;
