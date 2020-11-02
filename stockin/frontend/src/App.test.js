import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { render, fireEvent, queryAllByTestId } from '@testing-library/react';
import { connectRouter, ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import store from './store/store';

import App from './App';
import { history } from './store/store';

describe('App', () => {
  let app;
  //store and history needs to be mocked
  beforeEach(() => {
    app = (
      <Provider store={store}>
        <App history={history} />
      </Provider>
    );
  });

  it('should render', () => {
    const { container } = render(app);
    const query = queryAllByTestId(container, 'App');
    expect(query.length).toBe(1);
  });

  it('should be redirected to error page', () => {
    const { container } = render(app);
    history.push('/aaa');
    const query = queryAllByTestId(container, 'NotFound');
    expect(query.length).toBe(1);
  });
});
