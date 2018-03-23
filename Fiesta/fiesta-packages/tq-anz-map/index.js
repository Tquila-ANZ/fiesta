import React from "react";
import { Alert, Platform } from "react-native";
import MapView from "react-native-maps";

const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.01;

const initialRegion = {
  latitude: -37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

class TqanzMap extends React.Component {
  constructor(props) {
    super(props);
    this.styles = {
      ...defaultStyles,
      ...props.styles
    };
  }

  state = {
    region: {
      latitude: -37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    ready: true,
    filteredMarkers: []
  };

  setRegion(region, mapper) {
    if (this.state.ready) {
      if (this.props.lat !== null && this.props.long !== null) {
        region.latitude = this.props.lat;
        region.longitude = this.props.long;
      }

      setTimeout(() => mapper.animateToRegion(region), 5);
    }
    this.setState({ region });
  }

  componentDidMount() {
    this.getCurrentPosition();
  }

  getCurrentPosition() {
    try {
      navigator.geolocation.getCurrentPosition(
        position => {
          const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          };
          this.setRegion(region, this.map);
        },
        error => {
          //TODO: better design
        }
      );
    } catch (e) {
      alert(e.message || "");
    }
  }

  onMapReady = e => {
    if (!this.state.ready) {
      this.setState({ ready: true });
    }
  };

  onRegionChange = region => {};

  onRegionChangeComplete = region => {};

  render() {
    const { region } = this.state;
    const { children, renderMarker, markers } = this.props;
    const styles = this.styles;

    return (
      <MapView
        showsUserLocation
        ref={map => {
          this.map = map;
        }}
        data={markers}
        initialRegion={initialRegion}
        renderMarker={renderMarker}
        onMapReady={this.onMapReady}
        showsMyLocationButton={false}
        onRegionChange={this.onRegionChange}
        onRegionChangeComplete={this.onRegionChangeComplete}
        style={styles.map_container}
        textStyle={styles.map_text}
        containerStyle={styles.map_inner_container}
      >
        <MapView.Marker coordinate={this.state.region} />
      </MapView>
    );
  }
}

const defaultStyles = {
  map_container: {
    height: "120%",
    width: "100%"
  },
  map_text: {
    color: "#bc8b00"
  },
  map_inner_container: { backgroundColor: "white", borderColor: "#BC8B00" }
};

export default TqanzMap;
