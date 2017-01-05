forumApp.controller('loginController', function($scope) {

const newUsername = document.getElementById('emailIn');
const newPassword = document.getElementById('passwordIn');

const userUsername = document.getElementById('authEmail');
const userPassword = document.getElementById('authPassword');

const loginUser = document.getElementById('authenticateUser');
const createUser = document.getElementById('createUser');

//log in existing user

loginUser.addEventListener('click', e => {
	const email = authEmail.value;
	const pass = authPassword.value;
	const auth = firebase.auth();

	const promise = auth.signInWithEmailAndPassword(email, pass);
	promise.catch(e => console.log(e.message));

});

//create new user

createUser.addEventListener('click', e => {
	const email = userUsername.value;
	const pass = userPassword.value;
	const auth = firebase.auth();

	const promise = auth.createUserWithEmailAndPassword(email, pass);
	promise
	.catch(e => console.log(e.message));
});

firebase.auth().onAuthStateChanged(firebaseUser => {
	if (firebaseUser) {
		console.log(firebaseUser);
	} else {
		console.log('Not logged in.');
	}
});

});