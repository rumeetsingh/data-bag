import {
    CREATE_FOLDER,
} from './types';
import uuid from 'uuid';


export const createFolder = (name,parentId) => {
    return {
        type : CREATE_FOLDER,
        payload : {
            "folderId" : uuid.v4(),
            "name" : name,
            "folders" : [],
            "files" : [],
            "parentFolder" : parentId,
        }
    }
}
