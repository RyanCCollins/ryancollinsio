import styled from 'styled-components';

const Logo = styled.div`
  height: 40px;
  width: 77px !important;
  animation: fadeInFromRight 2s linear;
  background-image:url('${props => props.url}');
  background-repeat:no-repeat;
  background-size:contain;
  background-position:center;
`;

export default Logo;
