import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ContactActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import { WithLoading, Divider, ContactForm } from 'components';
import { reduxForm } from 'redux-form';

export const formFields = [
  'nameInput',
  'emailInput',
  'categoryInput',
  'messageInput',
];

class ContactContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    
  }
  render() {
    const {
      isLoading,
      fields,
      invalid,
    } = this.props;
    return (
      <Box
        className={styles.contact}
        colorIndex="light-2"
        align="center"
        justify="center"
      >
        <WithLoading isLoading={isLoading}>
          <Section pad="large" align="center" justify="center">
            <Headline align="center">
              Contact Me
            </Headline>
            <Divider />
          </Section>
          <Section pad="large" align="center" justify="center">
            <ContactForm
              {...fields}
              invalid={invalid}
              onSubmit={this.handleSubmit}
            />
          </Section>
        </WithLoading>
      </Box>
    );
  }
}

ContactContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fields: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    ContactActionCreators,
    dispatch
  ),
});

const Container = cssModules(ContactContainer, styles);

const FormContainer = reduxForm({
  form: 'Contact',
  fields: formFields,
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
