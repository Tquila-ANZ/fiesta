import {smartstore, smartsync} from 'react-native-force';

export default class TqanzOffline {
    constructor() {
    }

    public async init(soupName, indexSpecs, successCallback, errorCallback) {
        return smartstore.registerSoup(soupName, indexSpecs, successCallback, errorCallback);
    }

    public async soupExists(soupName, successCallback, errorCallback) {
        smartstore.soupExists(soupName, successCallback, errorCallback);
    }

    public async syncDown(callback): Promise<Object> {
        smartsync.syncDown(callback);
        return [];
    }

    public async reSync(callback): Promise<Object> {
        smartsync.reSync(callback);
        return [];
    }

    public async syncUp(callback): Promise<Object> {
        smartsync.syncUp(callback);
        return [];
    }

    public async syncData(callback): Promise<Object> {
        smartsync.syncData(callback);
        return [];
    }

}