import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.note};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.twitter};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
