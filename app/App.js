import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import firebase from 'react-native-firebase';

import Router from './config/routes'
import store from './redux/store';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			isReady: false,
		}
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
		console.log('App componentWillMount');
		console.log(firebase.auth().user);
		*/
	}

	/*
	componentWillMount = () => {
		console.log('componentWillMount');
	}
	async _loadAssetsAsync() {
		const fontAssets = cacheFonts([
			{RobotoExtraBold: require('./app/assets/fonts/Roboto-Black.ttf')},
			{RobotoBold: require('./app/assets/fonts/Roboto-Bold.ttf')},
			{RobotoMedium: require('./app/assets/fonts/Roboto-Medium.ttf')},
			{RobotoRegular: require('./app/assets/fonts/Roboto-Regular.ttf')},
			{RobotoLight: require('./app/assets/fonts/Roboto-Light.ttf')}
		]);

		await Promise.all([...fontAssets]);
	}
	*/

	render() {
		/*
		if (!this.state.isReady) {
			return (
				<AppLoading
					startAsync={this._loadAssetsAsync}
					onFinish={() => this.setState({isReady: true})}
					onError={console.warn}
				/>
			);
		}
		*/
		return (
			<Provider store={store}>
				<Router/>
			</Provider>
		);
	}
}