export const signIn = credentials => {
  return (dispatch, getstate, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getstate, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      // to create new user inside firebase and new user inside fire store that is why we used 2 then
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        // doc() will be add() if we want to create new id for user but we donot need that and we want take same id from before so we use doc(resp.user.uid)
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.Fname,
            lastName: newUser.Lname,
            // initial is not value inside form but it concatenate btw first leter from firt name [0] and first letter from laset name [0]
            //Fname  it is id in form  input   Lname it is id in from input
            initials: newUser.Fname[0] + newUser.Lname[0]
          })
          .then(() => {
            console.log(newUser);
            dispatch({ type: "SIGNUP_SUCCESS" });
          })
          .catch(err => {
            dispatch({ type: "SIGNUP_FAILED", err });
          });
      });
  };
};
