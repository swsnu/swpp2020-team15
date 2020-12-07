import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history, middlewares } from '../store/store';

const getMockAuthentication = jest.fn((initialState) => (state = initialState, action) => {
  return state;
});
const getMockStock = jest.fn((initialState) => (state = initialState, action) => {
  return state;
});
const getMockStockHistory = jest.fn((initialState) => (state = initialState, action) => {
  return state;
});
const getMockComment = jest.fn((initialState) => (state = initialState, action) => {
  return state;
});
const getMockNews = jest.fn((initialState) => (state = initialState, action) => {
  return state;
});
const getMockFS = jest.fn((initialState) => (state = initialState, action) => {
  return state;
});
const getMockGroups = jest.fn((initialState) => (state = initialState, action) => {
  return state;
});
const getMockIncrement = jest.fn((initialState) => (state = initialState, action) => {
  return state;
});

export const getMockStore = (
  initialAuthState = { loggingIn: false, user: null },
  initialStockState = { stockList: [] },
  initialStockHistoryState = { priceList: [] },
  initialCommentState = { commentList: [] },
  initialNewsState = { news: [] },
  initialFSState = { fs: [] },
  initialGroupsState = { group: [], groupList : [] },
  initialIncrementState = { increment : 0 },
) => {
  const mockAuthentication = getMockAuthentication(initialAuthState);
  const mockStock = getMockStock(initialStockState);
  const mockStockHistory = getMockStockHistory(initialStockHistoryState);
  const mockComment = getMockComment(initialCommentState);
  const mockNews = getMockNews(initialNewsState);
  const mockFS = getMockFS(initialFSState);
  const mockGroups = getMockGroups(initialGroupsState);
  const mockIncrement = getMockIncrement(initialIncrementState);
  const rootReducer = combineReducers({
    router: connectRouter(history),
    authentication: mockAuthentication,
    stock: mockStock,
    stockHistory: mockStockHistory,
    comment: mockComment,
    news: mockNews,
    fs: mockFS,
    groups : mockGroups,
    increment : mockIncrement,
  });
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const mockStore = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
  return mockStore;
};
