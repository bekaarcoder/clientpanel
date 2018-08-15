import {createStore, combineReducers, compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVpbW9t-YiI0nwGPw2ajPK5Ul3gfafQlo",
  authDomain: "reactclientpanel-d4c01.firebaseapp.com",
  databaseURL: "https://reactclientpanel-d4c01.firebaseio.com",
  projectId: "reactclientpanel-d4c01",
  storageBucket: "reactclientpanel-d4c01.appspot.com",
  messagingSenderId: "228226322985"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // firestore for profile instead of realtime db
}

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore
const firestore = firebase.firestore();

// reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first arg
  reduxFirestore(firebase) // needed if using firestore
)(createStore);

// add firebase to reducer
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// create initial state
const initialState = {};

// create store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  composeEnhancers(
    reactReduxFirebase(firebase)
  )
);

export default store;