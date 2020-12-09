import React from 'react';
import { render, queryAllByTestId } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import GraphComponent from './GraphComponent';


const testStockHistory = [
    { id : 1, date: '2020-12-01', endPrice : '1000'},
    { id : 2, date: '2020-12-02', endPrice : '1500'},
    { id : 3, date: '2020-12-03', endPrice : '2000'},
    { id : 4, date: '2020-12-04', endPrice : '350'},
    { id : 5, date: '2020-12-05', endPrice : '500'},
];


describe('<GraphComponent />', () => {
  let graphComponent;

  beforeEach(() => {
    graphComponent = (
        <Provider store={store}>
          <GraphComponent history={history} stockhistory={testStockHistory} />
        </Provider>
    );
    console.error = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
    console.error.mockClear();
  });

  it('should render without errors', () => {
    const { container } = render(graphComponent);
    const query = queryAllByTestId(container, 'GraphComponent');
    expect(query.length).toBe(1);
  });
});
