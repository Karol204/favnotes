import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import bulbIcon from '../../../assets/bulb.svg';
import pencilIcon from '../../../assets/pencil.svg';
import logoutIcon from '../../../assets/logout.svg';
import twitterIcon from '../../../assets/twitter.svg';

const StyledDiv = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 153px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
  padding: 10px 0 25px;
`;

const Sidebar = ({ pageType }) => (
  <StyledDiv activeColor={pageType}>
    <p>logo</p>
    <div>
      <ButtonIcon as={NavLink} activeclass="active" to="/notes" icon={pencilIcon} />
      <ButtonIcon as={NavLink} activeclass="active" to="/twitters" icon={twitterIcon} />
      <ButtonIcon as={NavLink} activeclass="active" to="/articles" icon={bulbIcon} />
    </div>
    <ButtonIcon as={NavLink} to="/login" icon={logoutIcon} />
  </StyledDiv>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

export default Sidebar;
