import {
    CREATE_FOLDER,
    CREATE_FILE
} from './types';
import uuid from 'uuid';


export const createFolder = (name, parentId) => {
    return {
        type: CREATE_FOLDER,
        payload: {
            "folderId": uuid.v4(),
            "name": name,
            "folders": [],
            "files": [],
            "parentFolder": parentId,
        }
    }
}

export const createFile = (name, link, parentId) => {
    return {
        type: CREATE_FILE,
        payload: {
            "fileId": uuid.v4(),
            "name": name,
            "link": link,
            "parentFolder": parentId,
        }
    }
}