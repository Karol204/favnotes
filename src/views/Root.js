import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import MainTemplate from '../components/MainTemplate';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';
import DetailsPage from './DetailsPage';
import { routes } from '../Routes/index';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route exact path={routes.home} element={<Navigate to="/notes" replace={true} />} />
          <Route exact path={routes.notes} element={<Notes />} />
          <Route path={routes.note} element={<DetailsPage />} />
          <Route exact path={routes.twitters} element={<Twitters />} />
          <Route path={routes.twitter} element={<DetailsPage />} />
          <Route exact path={routes.articles} element={<Articles />} />
          <Route path={routes.article} element={<DetailsPage />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);
export default Root;
