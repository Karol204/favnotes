import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);
UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};
export default UserPageTemplate;
