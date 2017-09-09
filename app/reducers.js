import { combineReducers } from 'redux';
import home from './components/home/reducer';

const appReducer = combineReducers({
  home,
});

export default appReducer;