import { CREATE_FILE } from '../actions/types';


export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_FILE:
            return {
                ...state,
                [action.payload.fileId]: {
                    "name": action.payload.name,
                    "link": action.payload.link,
                    "parentFolder": action.payload.parentFolder,
                }
            };
        default:
            return state;
    }
}