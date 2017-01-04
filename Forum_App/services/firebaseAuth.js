const auth = firebase.auth();

auth.signInWithEmainAndPassword(emain, pass);

auth.createUserWithEmailAndPassword(email, pass);

auth.onAuthStateChange(firebase => {});