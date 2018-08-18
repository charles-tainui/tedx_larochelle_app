import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Button, SocialIcon, Divider } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin';
import { actions as auth, constants as c } from "../../index"
import {
	auth as firebaseAuth,
	providerFacebook
} from '../../../../config/firebase';

const { signInWithFacebook, signInWithGoogle } = auth;



import styles from "./styles"

class Welcome extends Component {
	constructor() {
		super();
		this.state = {
			// loading: true
		}
		
		this.onSigninSuccess = this.onSigninSuccess.bind(this);
		this.onSigninFail = this.onSigninFail.bind(this);
		this.onSignInWithFacebook = this.onSignInWithFacebook.bind(this);
		this.onSignInWithGoogle = this.onSignInWithGoogle.bind(this);
	}
	
	componentWillMount() {
		/*
		const config = {
			apiKey: 'AIzaSyA0K8pYoI51U0NPbEO9iL8ei6Rk2D2occM',
			authDomain: 'rn-manager-731bd.firebaseapp.com',
			databaseURL: 'https://rn-manager-731bd.firebaseio.com',
			projectId: 'rn-manager-731bd',
			storageBucket: '',
			messagingSenderId: '546237651452'
		};

		firebase.initializeApp (config);
		*/
		console.log('Welcome componentWillMount');
	}
	
	async onSignInWithFacebook() {
		console.log('onSignInWithFacebook')
		this.props.signInWithFacebook(null, this.onSigninSuccess, this.onSigninFail)
		/*
		LoginManager.logInWithReadPermissions(['public_profile', 'email'])
		.then((result) => {
			if(result.isCancelled) {
			} else {
				console.log('Login success with permissions: ' + result.grantedPermissions.toString());
				// get the access token
				AccessToken.getCurrentAccessToken()
				.then((data) => {
					this.props.signInWithFacebook(data.accessToken, this.onSigninSuccess, this.onSigninFail)
				})
				.catch((tokenError) => {
					alert('Some error occurred' + tokenError);
				});
			}
		})
		.catch((error) => {
			console.log('Login fail with error: ' + error);
		});
		*/
	};
	
	onSigninSuccess({ exists, user }) {
		console.log('Welcome.js : onSigninSuccess');
		// console.log(user.);
		console.log(user);
	}
	
	onSigninFail(error) {
		console.log('Welcome.js : onSigninFail');
		alert(error)
	}
	
	
	async onSignInWithGoogle() {
		console.log('onSignInWithGoogle')
		this.props.signInWithGoogle(null, this.onSigninSuccess, this.onSigninFail)
		/*
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
		*/
	};
	
	
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.wrapper}>
					<Image style={styles.image} source={require("../../../../assets/images/welcome.jpg")}/>
					<Text style={styles.title}>Quotes</Text>
				</View>
				
				<View style={styles.bottomContainer}>
					<View style={[styles.buttonContainer]}>
						<SocialIcon
							raised
							button
							type='facebook'
							title='Connexion avec Facebook'
							iconSize={19}
							style={[styles.containerView, styles.socialButton]}
							fontStyle={styles.buttonText}
							onPress={this.onSignInWithFacebook}
						/>
						<SocialIcon
							raised
							button
							type='google-plus-official'
							title='Connexion avec Google'
							iconSize={19}
							style={[styles.containerView, styles.socialButton]}
							fontStyle={styles.buttonText}
							onPress={this.onSignInWithGoogle}
						/>
						
						<View style={styles.orContainer}>
							<Divider style={styles.divider}/>
							<Text style={styles.orText}>
								Or
							</Text>
						</View>
						
						<Button
							raised
							borderRadius={4}
							title={'SIGN UP WITH E-MAIL'}
							containerViewStyle={styles.button}
							// icon={{size:12}}
							textStyle={styles.buttonText}
							onPress={Actions.Register}/>
					</View>
					<View style={styles.bottom}>
						<Text style={styles.bottomText}>
							Already have an account?
						</Text>
						
						<TouchableOpacity onPress={Actions.Login}>
							<Text style={styles.signInText}>
								Sign in
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			
			</View>
		);
	}
}


export default connect(null, {
	signInWithFacebook, signInWithGoogle
})(Welcome);