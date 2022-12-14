import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from '../components/GridTemplate';
import Card from '../components/molecules/Card/Card';

const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map((item) => (
      <Card
        id={item.id}
        cardType="articles"
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        created={item.created}
        key={item.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ articles }) => ({ articles });
export default connect(mapStateToProps)(Articles);
