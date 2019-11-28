import { combineReducers } from 'redux';
import folderReducer from './folderReducer';
import fileReducer from './fileReducer';

export default combineReducers({
    folders: folderReducer,
    files : fileReducer,
});
