import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from '../components/GridTemplate';
import Card from '../components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map((item) => (
      <Card
        id={item.id}
        cardType="twitters"
        title={item.title}
        content={item.content}
        twitterName={item.twitterName}
        created={item.created}
        key={item.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);
