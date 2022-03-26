import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
// import rootReducer from './reducers';
import rootReducer from './reducers';
import rootSaga from '../store/sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware=[thunk];
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware,...middleware)));
sagaMiddleware.run(rootSaga);

export default store; 