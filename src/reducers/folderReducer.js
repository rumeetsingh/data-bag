import { CREATE_FOLDER,CREATE_FILE } from '../actions/types';


const INITIAL_STATE = {
    "home" : {
        "name" : "Home",
        "folders" : [],
        "files" : [],
        "parentFolder" : null,
    },
}

export default (state=INITIAL_STATE,action) => {
    switch (action.type){
        case CREATE_FOLDER:
            let parentId = action.payload.parentFolder;
            return {
                ...state,
                [parentId] : {...state[parentId],"folders":[...state[parentId].folders,action.payload.folderId]},
                [action.payload.folderId] : { 
                    "name" : action.payload.name,
                    "folders" : [],
                    "files" : [],
                    "parentFolder" : action.payload.parentFolder,
                }
            };
        case CREATE_FILE:
            let parentIdForFile = action.payload.parentFolder;
            return {
                ...state,
                [parentIdForFile]: {...state[parentIdForFile],"files":[...state[parentIdForFile].files,action.payload.fileId]}
            };
        default:
            return state;
    }
}

