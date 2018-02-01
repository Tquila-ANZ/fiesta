import React from 'react';
import {
    Alert,
    Platform,
    StyleSheet
} from 'react-native';
import MapView from 'react-native-maps'

const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.01;

const initialRegion = {
    latitude: -37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

class TqanzMap extends React.Component {

    state = {
        region: {
            latitude: -37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        ready: true,
        filteredMarkers: []
    };

    setRegion(region, mapper) {
        if(this.state.ready) {
            if(this.props.lat !== null && this.props.long !== null){
                region.latitude = this.props.lat;
                region.longitude = this.props.long;
            }

            setTimeout(() => mapper.animateToRegion(region), 5);

        }
        this.setState({ region });
    }

    componentDidMount() {
        console.log('Component did mount');
        this.getCurrentPosition();
    }

    getCurrentPosition() {
        try {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const region = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    };
                    this.setRegion(region, this.map);
                },
                (error) => {
                    //TODO: better design
                }
            );
        } catch(e) {
            alert(e.message || "");
        }
    };

    onMapReady = (e) => {
        if(!this.state.ready) {
            this.setState({ready: true});
        }
    };

    onRegionChange = (region) => {
        console.log('onRegionChange', region);
    };

    onRegionChangeComplete = (region) => {
        console.log('onRegionChangeComplete', region);
    };

    render() {

        const { region } = this.state;
        const { children, renderMarker, markers } = this.props;

        return (
            <MapView
                showsUserLocation
                ref={ map => { this.map = map }}
                data={markers}
                initialRegion={initialRegion}
                renderMarker={renderMarker}
                onMapReady={this.onMapReady}
                showsMyLocationButton={false}
                onRegionChange={this.onRegionChange}
                onRegionChangeComplete={this.onRegionChangeComplete}
                style={styles.container}
                textStyle={{ color: '#bc8b00' }}
                containerStyle={{backgroundColor: 'white', borderColor: '#BC8B00'}}>

                <MapView.Marker coordinate={this.state.region} />

            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '120%',
        width: '100%'
    }
});

export default TqanzMap;