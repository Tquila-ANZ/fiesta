import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ListView,
  AsyncStorage,
  ActivityIndicator,
  Image,
  Platform,
  TouchableHighlight,
  Button,
  Dimensions,
  View,
  TextInput
} from "react-native";
import ImagePicker from "react-native-image-picker";
import RNFetchBlob from "react-native-fetch-blob";
import FirebaseClient from "./FirebaseClient";
import Item from "./Item";
import FiestaButton from "../tq-anz-button";

const list = ["Loading..."];

var width = Dimensions.get("window").width;

// More info on all the options is below in the README...just some common use cases shown here
var options = {
  title: "Select Image",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

class TqanzChat extends Component {
  static navigationOptions = {
    title: "Firebase Chat",
    header: ({ state, setParams, navigate }) => ({
      right: <Button title="Profile" onPress={() => navigate("Profile")} />
    })
  };

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: this.ds.cloneWithRows(list),
      message: "",
      loading: true,
      uid: ""
    };

    this.itemsRef = this.getRef().child("chat");
    this.renderItem = this.renderItem.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.getProfileName = this.getProfileName.bind(this);
    this.getImage = this.getImage.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  getRef() {
    return FirebaseClient.database().ref();
  }

  uploadImage(uri, mime = "application/octet-stream") {
    return new Promise((resolve, reject) => {
      const uploadUri =
        Platform.OS === "ios" ? uri.replace("file://", "") : uri;
      let uploadBlob = null;
      let imageName = new Date().getTime().toString();
      this.setState({ loading: true });

      const imageRef = FirebaseClient.storage()
        .ref("images")
        .child(imageName);

      fs
        .readFile(uploadUri, "base64")
        .then(data => {
          return Blob.build(data, { type: `${mime};BASE64` });
        })
        .then(blob => {
          uploadBlob = blob;
          return imageRef.put(blob, { contentType: mime });
        })
        .then(() => {
          uploadBlob.close();
          return imageRef.getDownloadURL();
        })
        .then(url => {
          resolve(url);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getImage() {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        this.uploadImage(response.uri)
          .then(url => {
            this.sendPicture(url);
          })
          .catch(error => console.log(error));
      }
    });
  }

  setItemsFromFirebase(itemsRef) {
    itemsRef.on("value", snap => {
      // get children as an array
      var items = [];
      snap.forEach(child => {
        items.push({
          name: child.val().name,
          message: child.val().message,
          type: child.val().type,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.ds.cloneWithRows(items),
        loading: false
      });
    });
  }

  componentDidMount() {
    this.getProfileName();
    this.setItemsFromFirebase(this.itemsRef);
  }

  renderItem(item) {
    return <Item item={item} />;
  }

  updateProfileName(profile_name) {
    this.setState({ profile_name });
  }

  sendMessage() {
    if (this.state.message != "") {
      window.m = this.state.message;
      FirebaseClient.auth()
        .signInAnonymously()
        .then(function(firebaseUser) {
          const replaceAll = (s = "", f = "", r = "") =>
            s.replace(
              new RegExp(f.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"),
              r
            );
          let mm = replaceAll(window.m, "undefined", "null");

          FirebaseClient.database()
            .ref("chat")
            .push({
              name: "",
              message: mm
            });
        })
        .catch(function(error) {
          // Error Handling
          console.log("error");
        });

      this.setState({ message: "" });
    }
  }

  sendPicture(uri) {
    FirebaseClient.database()
      .ref("/chat/" + FirebaseClient.getClientUid())
      .push({
        name: this.state.profile_name,
        type: "image",
        message: uri
      });
  }

  getProfileName() {
    AsyncStorage.getItem("profile_name", (err, result) => {
      this.setState({ profile_name: result });
    });
  }

  updateMessage(message) {
    this.setState({ message });
  }

  componentDidUpdate() {
    if (
      "listHeight" in this.state &&
      "footerY" in this.state &&
      this.state.footerY > this.state.listHeight
    ) {
      var scrollDistance = this.state.listHeight - this.state.footerY;
      this.refs.list
        .getScrollResponder()
        .scrollTo({ x: 0, y: -scrollDistance });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          ref="list"
          onLayout={event => {
            var layout = event.nativeEvent.layout;

            this.setState({
              listHeight: layout.height
            });
          }}
          renderFooter={() => {
            return (
              <View
                onLayout={event => {
                  var layout = event.nativeEvent.layout;
                  this.setState({
                    footerY: layout.y
                  });
                }}
              />
            );
          }}
          dataSource={this.state.dataSource}
          renderRow={this.renderItem}
        />

        <ActivityIndicator animating={this.state.loading} size="large" />

        <View style={styles.sendMessageArea}>
          <View style={styles.inputMessageArea}>
            <View style={styles.formInputArea}>
              <TextInput
                onChangeText={this.updateMessage}
                value={this.state.message}
                inputStyle={styles.inputMessage}
              />
            </View>

            <View style={styles.buttonArea}>
              {/*<TouchableHighlight*/}
              {/*underlayColor='#E9E9EF'*/}
              {/*onPress={this.getImage}>*/}
              {/*<Image source={require('./images/camera.png')} style={{width: 16, height: 16}} />*/}
              {/*</TouchableHighlight>*/}
              <FiestaButton onPress={this.sendMessage} name=">" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width
  },
  inputMessage: {
    color: "gray"
  },
  inputMessageArea: {
    flexDirection: "row"
  },
  formInputArea: {
    width: width * 0.8
  },
  buttonArea: {
    flexDirection: "row",
    flex: 1
  },
  sendMessageArea: {
    marginBottom: 10
  }
});

export default TqanzChat;
