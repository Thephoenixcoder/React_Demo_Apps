import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "../src/store/reducers/rootReducers";
import firebase from "./config/fbConfig";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// this two calling after npm i   react-redux-firebase   redux-firebase
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
// compose for used multiply store
const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, {
      //this to generate profile infor for each user
      useFirestoreForProfile: true,
      //we used this to make fire base know which collections it used
      userProfile: "users",
      ///
      attachAuthIsReady: true
    })
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});
