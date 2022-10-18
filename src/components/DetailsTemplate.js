import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from './atoms/Heading/Heading';
import Paragraph from './atoms/Paragraph/Paragraph';
import UserPageTemplate from './UserPageTemplate';
import { Link } from 'react-router-dom';
import Button from './atoms/Button/Button';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;

  @media (max-with: 1200px) {
    max-width: 80vw;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  height: 120px;
  width: 120px;
  border-radius: 50%;
`;

const DetailsTemplate = ({ pageType, title, created, content, articleUrl, twitterName }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading big as="h1">
          {title}
        </StyledHeading>
        <StyledParagraph>{created}</StyledParagraph>
      </StyledPageHeader>
      <Paragraph>{content}</Paragraph>
      {pageType === 'articles' && <StyledLink href={articleUrl}>Open article</StyledLink>}
      {pageType === 'twitters' && (
        <StyledImage halt={title} src={`https://unavatar.io/twitter/${twitterName}`} />
      )}
      <Button as={Link} to={`/${pageType}`} activecolor={pageType}>
        save / close
      </Button>
    </StyledWrapper>
  </UserPageTemplate>
);

export default DetailsTemplate;
