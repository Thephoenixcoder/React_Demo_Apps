export const createproject = project => {
  return (dispatch, getstate, { getFirestore, getFirebase }) => {
    //make async call database
    const firestore = getFirestore();
    const profile = getstate().firebase.profile;
    const authId = getstate().firebase.auth.uid;
    firestore
      .collection("Projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authId,
        createAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project
        });
      })
      .catch(err => {
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          err
        });
      });
  };
};
