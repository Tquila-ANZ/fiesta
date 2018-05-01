import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Permissions from "react-native-permissions";

import FiestaButton from "../tq-anz-button";

class TqanzPermissions extends React.Component {
  state = {
    checkingPermissions: true,
    permissionGranted: true,
    permissionsNotGranted: []
  };

  componentDidMount = async () => {
    const { onPermissionGranted } = this.props;
    const {
      permissionGranted,
      permissionsNotGranted
    } = await this._checkPermissions();

    await this.setState({
      checkingPermissions: false,
      permissionGranted,
      permissionsNotGranted
    });

    if (permissionGranted && onPermissionGranted) {
      await onPermissionGranted;
    }
  };

  _checkPermissions = async () => {
    const { permissions } = this.props;

    if (permissions.length === 0) {
      return {
        permissionGranted: true,
        permissionsNotGranted: []
      };
    }

    const responseType = {
      DENIED: "denied",
      AUTHORISED: "authorized",
      UNDETERMINED: "undetermined"
    };

    const response = await Permissions.checkMultiple(permissions);
    let permissionsNotGranted = [];

    for (let key of Object.keys(response)) {
      if (response[key] === responseType.UNDETERMINED) {
        response[key] = await this._requestAccess(key);
      }
      if (response[key] === responseType.DENIED) {
        permissionsNotGranted.push(key);
      }
    }

    const permissionGranted = Object.keys(response).every(
      key => response[key] === responseType.AUTHORISED
    );
    return { permissionGranted, permissionsNotGranted };
  };

  _requestAccess = permission => Permissions.request(permission);

  _generatePermissionsErrorMessage = permissions => {
    const permissionType = {
      location: "Location",
      camera: "Camera",
      microphone: "Microphone",
      photo: "Photos",
      contacts: "Contacts",
      event: "Events",
      bluetooth: "Bluetooth",
      reminder: "Reminders",
      notification: "Push Notifications",
      backgroundRefresh: "Background Refresh",
      speechRecognition: "Speech Recognition",
      mediaLibrary: "Media Library",
      motion: "Motion Activity",
      storage: "Storage",
      callPhone: "Phone Call",
      readSms: "Read SMS",
      receiveSms: "Receive SMS"
    };

    let message = "Please grant access to ";
    permissions.forEach((permission, index) => {
      message = message + permissionType[permission] || permission;
      if (index === permissions.length - 1) {
        message = message + " to continue.";
      } else {
        message = message + ", ";
      }
    });
    return message;
  };

  _openSettings = () => {
    Permissions.openSettings();
  };

  render() {
    const { children } = this.props;
    const {
      checkingPermissions,
      permissionGranted,
      permissionsNotGranted
    } = this.state;

    return (
      <View style={styles.container}>
        {checkingPermissions ? null : permissionGranted ? (
          children
        ) : (
          <View style={styles.footerContainer}>
            <Text style={styles.warningText}>
              {this._generatePermissionsErrorMessage(permissionsNotGranted)}
            </Text>
            <FiestaButton
              title="Open Settings"
              icon=""
              onPress={this._openSettings}
              styles={styles.settingsButton}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#fff"
  },
  imageContainer: {
    flex: 5,
    paddingTop: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  footerContainer: {
    flex: 1,
    maxHeight: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  settingsButton: {
    container: {
      justifyContent: "center",
      alignItems: "flex-end",
      margin: 10,
      marginRight: 0
    },
    button: {
      borderRadius: 4,
      padding: 1,
      backgroundColor: "#009FDF",
      minWidth: 100,
      flexDirection: "row",
      alignItems: "center"
    },
    text: {
      fontSize: 14,
      color: "#FFF",
      fontSize: 14,
      padding: 5
    },
    icon: {
      fontSize: 18,
      color: "#FFF",
      padding: 5
    },
    padding: 10
  },
  warningText: {
    fontSize: 14,
    color: "#F00"
  }
};

TqanzPermissions.defaultProps = {
  permissions: []
};

export default TqanzPermissions;
