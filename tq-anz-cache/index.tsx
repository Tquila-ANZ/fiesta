import * as React from 'react';
import {AsyncStorage, NetInfo} from 'react-native';

interface props {
    timeCached: Date
}

interface state {
}

export default class TqanzCache extends React.Component<props, state> {

    //var scoreManager = SingletonClass.getInstance();

    private static _instance: TqanzCache = new TqanzCache();
    private _isOnline: Boolean;
    private _hasCacheLayer: Boolean;

    constructor(props?) {
        super(props);

        if (TqanzCache._instance) {
            throw new Error("Error: Instantiation failed: Use TqanzCache.getInstance() instead of new.");
        }
        TqanzCache._instance = this;
    };

    public async init() {
        if(!this._isOnline && this._hasCacheLayer)
            return "cache layer";
        else if(!this._isOnline && !this._hasCacheLayer)
            return "Model Popup No Data";
        else if(this._isOnline && this._hasCacheLayer) {
            // Check date of cache
            if("i"== "i")//date < this.props.cacheTime
                return "cache layer"
            else
                return ""; // do soql,set cache date and set cache
        }
       // return "";

        return await AsyncStorage.setItem('@fiesta:date', Date.now().toString());
    }

    public static getInstance(): TqanzCache {
        return TqanzCache._instance;
    }

    public netInfo() {
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
        });

        function handleFirstConnectivityChange(connectionInfo) {
            console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
            NetInfo.removeEventListener(
                'connectionChange',
                handleFirstConnectivityChange
            );
        }

        NetInfo.addEventListener(
            'connectionChange',
            handleFirstConnectivityChange
        );
    }

    public isOnline(): Boolean {
        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                return true;
            }
            return false;
        });
        return false;
    }

    public async set(key: string, value: string, callback?) {
        try {
            await AsyncStorage.setItem(key, value, callback);
        } catch (error) {
            // Error saving data
        }
    }

    public async get(key: string, callback?): Promise<any> {
        try {
            const value = await AsyncStorage.getItem(key, callback);
            if (value !== null) {
                return value;
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    public async forceUpdate() {

    }
}