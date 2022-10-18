import React, { Component } from 'react';
import DetailsTemplate from '../components/DetailsTemplate';

class DetailsPage extends Component {
  state = {
    pageTypes: 'notes',
  };
  render() {
    const SomeArticle = {
      id: 1,
      title: 'Wake me up when',
      content: 'Lorem ipsum dolor sit amet',
      twitterName: 'hello_roman',
      articleUrl: 'https://youtube.com/helloroman',
      created: '1 day',
    };
    const path = window.location.pathname.split('/');
    const pageType = path[1];
    return (
      <DetailsTemplate
        pageType={pageType}
        title={SomeArticle.title}
        created={SomeArticle.created}
        content={SomeArticle.content}
        articleUrl={SomeArticle.articleUrl}
        twitterName={SomeArticle.twitterName}
      />
    );
  }
}

export default DetailsPage;
