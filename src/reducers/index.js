import { combineReducers } from 'redux';
import folderReducer from './folderReducer';

export default combineReducers({
    folders: folderReducer,
});
