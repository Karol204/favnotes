import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 50%;
  border: none;
  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
