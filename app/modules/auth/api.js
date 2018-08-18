import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin';
import {
	rnfirebase as firebase,
	auth,
	database,
	providerFacebook,
	providerGoogle
} from "../../config/firebase";

//Register the user using email and password
export function register(data, callback) {
	const { email, password, username } = data;
	auth.createUserWithEmailAndPassword(email, password)
	.then((resp) => createUser({ username, uid: resp.user.uid }, callback))
	.catch((error) => callback(false, null, error));
}

//Create the user object in realtime database
export function createUser(user, callback) {
	const userRef = database.ref().child('users');
	console.log('api createUser');
	userRef.child(user.uid).update({ ...user })
	.then(() => callback(true, user, null))
	.catch((error) => callback(false, null, { message: error }));
}

//Sign the user in with their email and password
export function login(data, callback) {
	const { email, password } = data;
	auth.signInWithEmailAndPassword(email, password)
	.then((resp) => getUser(resp.user, callback))
	.catch((error) => callback(false, null, error));
}

//Get the user object from the realtime database
export function getUser(user, callback) {
	
	console.log('getUser: ')
	console.log(user.uid)
	
	database.ref('users').child(user.uid).once('value')
	.then(function (snapshot) {
		const exists = (snapshot.val() !== null);
		//if the user exist in the DB, replace the user variable with the returned snapshot
		if(exists) user = snapshot.val();
		
		const data = { exists, user }
		callback(true, data, null);
	})
	.catch(error => callback(false, null, error));
}

//Send Password Reset Email
export function resetPassword(data, callback) {
	const { email } = data;
	auth.sendPasswordResetEmail(email)
	.then((user) => callback(true, null, null))
	.catch((error) => callback(false, null, error));
}

export function signOut(callback) {
	auth.signOut()
	.then(() => {
		if(callback) callback(true, null, null)
	})
	.catch((error) => {
		if(callback) callback(false, null, error)
	});
}

//Sign user in using Facebook
export function signInWithFacebook(token, callback) {
	LoginManager.logInWithReadPermissions(['public_profile', 'email'])
	.then((result) => {
		if(result.isCancelled) {
			// User has cancelled login
		} else {
			// get the access token
			AccessToken.getCurrentAccessToken()
			.then((data) => {
				const credential = providerFacebook.credential(data.accessToken);
				
				auth.signInAndRetrieveDataWithCredential(credential)
				.then((data) => {
					callback(true, data.user, false)
					// createUser(data.user, callback);
				})
				.catch((error) => {
					alert(error)
					callback(false, null, error)
				});
				// this.props.signInWithFacebook(data.accessToken, this.onSigninSuccess, this.onSigninFail)
			})
			.catch((tokenError) => {
				alert('Some error occurred' + tokenError);
			});
		}
	})
	.catch((error) => {
		alert(error)
		console.log('Login fail with error: ' + error);
	});
	/*
	auth.signInAndRetrieveDataWithCredential(credential)
		.then((user) =>	createUser(user, callback))
		.catch((error) => callback(false, null, error));
	*/
}

//Sign user in using Google
export async function signInWithGoogle(token, callback) {
	// const credential = providerGoogle.credential(token);
	// console.log('api.js signInWithGoogle() token :'+token)
	// console.log(credential);
	
	try{
		await GoogleSignin.configure({
			iosClientId: '141809337181-lrp7g97rmhtr31m04h9ujb1t1hf5737o.apps.googleusercontent.com',
			scopes: ['openid', 'email', 'profile'],
			shouldFetchBasicProfile: true
		});
		
		const data = await GoogleSignin.signIn();
		// create a new firebase credential with the token
		const credential = providerGoogle.credential(data.idToken, data.accessToken)
		// login with credential
		const currentUser = await auth.signInAndRetrieveDataWithCredential(credential);
		console.log('GoogleSignin then:')
		console.log(currentUser.user);
		// console.info(JSON.stringify(currentUser.user.toJSON()));
	} catch(e){
		console.log('GoogleSignin catch:')
		alert(e)
	}
	/*
	GoogleSignin.configure({
		iosClientId: '141809337181-lrp7g97rmhtr31m04h9ujb1t1hf5737o.apps.googleusercontent.com',
		scopes: ['openid', 'email', 'profile'],
		shouldFetchBasicProfile: true
	})
	.then((data) => {
		console.log('GoogleSignin then:')
		console.log(data)
	})
	.catch((error) => {
		console.log('GoogleSignin then:')
		console.log(error)
	});
	
	try {
		await GoogleSignin.configure({
			iosClientId: '141809337181-lrp7g97rmhtr31m04h9ujb1t1hf5737o.apps.googleusercontent.com',
			scopes: ['openid', 'email', 'profile'],
			shouldFetchBasicProfile: true
		})
		
		// this.props.signInWithGoogle(data.accessToken, this.onSigninSuccess, this.onSigninFail)
		
		const data = await GoogleSignin.signIn();
		
		// create a new firebase credential with the token
		const credential = providerGoogle.credential(data.idToken, data.accessToken)
		// login with credential
		const currentUser = await auth.signInAndRetrieveDataWithCredential(credential);
		
		console.info(JSON.stringify(currentUser.user.toJSON()));
	} catch ( e ) {
		console.error(e);
	}
	
	auth.signInWithCredential(credential)
		.then((user) => getUser(user, callback))
		.catch((error) => callback(false, null, error));
	*/
}
