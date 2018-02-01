const firebase = require('firebase')
// import { API_KEY } from 'react-native-dotenv'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCl0UpB287QZlpr4kN1mMdY2Nbf5lhq5Jc",
  authDomain: "yooralla-200ad.firebaseapp.com",
  databaseURL: "https://yooralla-200ad.firebaseio.com/",
  storageBucket: "yooralla-200ad.appspot.com"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp
