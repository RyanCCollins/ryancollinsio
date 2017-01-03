import styled from 'styled-components';

const Logo = styled.div`
  height: 40px;
  left: -77px;
  width: 77px !important;
  animation: ${props => props.animation};
  background-image:url('${props => props.url}');
  background-repeat:no-repeat;
  background-size:contain;
  background-position:center;
`;

export default Logo;
