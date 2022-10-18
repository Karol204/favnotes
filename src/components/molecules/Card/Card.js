import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import LinkIcon from '../../../assets/link.svg';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from '../../../actions/index';

// const CARD_TYPE = {
//   note: 'NOTE',
//   twitter: 'TWITTER',
//   article: 'ARTICLE',
// };

const StyledWrapper = styled.div`
  min-height: 380px;
  border-radius: 10px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0.1);
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 5555;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-size: 13px;
  font-weight: 600;
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  position: absolute;
  right: 20px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  position: absolute;
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon});
  background-size: 60%;
  background-position: 50%;
  background-repeat: no-repeat;
  right: 20px;
  top: 25px;
`;

// id, cardType, title, created, twitterName, articleUrl, content;

class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, cardType, title, created, twitterName, articleUrl, content, removeItem } =
      this.props;

    if (this.state.redirect) {
      return <Navigate to={`/${cardType}/${id}`} replace={true} />;
    }

    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <InnerWrapper activeColor={cardType}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {cardType === 'twitters' && (
            <StyledAvatar src={`https://unavatar.io/twitter/${twitterName}`} />
          )}
          {cardType === 'articles' && <StyledLinkButton href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
        </InnerWrapper>

        <Button onClick={() => removeItem(cardType, id)}>REMOVE</Button>
      </StyledWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(Card);

Card.propTypes = {
  cardTypes: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  cardType: 'notes',
  twitterName: null,
  articleUrl: null,
};
