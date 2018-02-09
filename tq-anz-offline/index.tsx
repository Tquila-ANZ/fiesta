import {smartsync} from 'react-native-force';

export default class TqanzOffline {
    constructor() {
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