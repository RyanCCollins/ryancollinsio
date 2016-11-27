import styled from 'styled-components';
import Form from 'grommet-udacity/components/Form';
import FormField from 'grommet-udacity/components/FormField';
import Box from 'grommet-udacity/components/Box';

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  max-width: 100vw;
  box-sizing: border-box;
  min-width: 300px;
`;

export const StyledForm = styled(Form)`
  max-width: 100vw;
  padding: 10px;
`;

export const StyledFormField = styled(FormField)`
  max-width: 480px !important;
`;
