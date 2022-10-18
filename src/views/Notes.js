import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../components/GridTemplate';

const Notes = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map((item) => (
      <Card
        id={item.id}
        cardType="notes"
        title={item.title}
        content={item.content}
        created={item.created}
        key={item.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
