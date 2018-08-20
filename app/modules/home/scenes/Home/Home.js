import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import styles from "./styles"

import { actions as auth, theme } from "../../../auth/index"

const { signOut } = auth;

const { color } = theme;

class Home extends Component {
	constructor() {
		super ();
		this.state = {}

		this.onSignOut = this.onSignOut.bind (this);
	}

	onSignOut() {
		this.props.signOut (this.onSuccess.bind (this), this.onError.bind (this))
	}

	onSuccess() {
		// Actions.reset ("Auth")
		Actions.Auth();
	}

	onError(error) {
		Alert.alert ('Oops!', error.message);
	}

	render() {
		return (
			<View style={styles.container}>
				<Button
					raised
					borderRadius={4}
					title={'Speakers'}
					containerViewStyle={[styles.containerView]}
					buttonStyle={[styles.button]}
					textStyle={styles.buttonText}
					style={[styles.button]}
					onPress={Actions.Speakers}
				/>
				<Button
					raised
					borderRadius={4}
					title={'Equipe'}
					containerViewStyle={[styles.containerView]}
					buttonStyle={[styles.button]}
					textStyle={styles.buttonText}
					style={[styles.button]}
					onPress={Actions.Team}
				/>
				<Button
					raised
					borderRadius={4}
					title={'Item #1'}
					containerViewStyle={[styles.containerView]}
					buttonStyle={[styles.button]}
					textStyle={styles.buttonText}
					style={[styles.button]}
					onPress={Actions.Item2}
				/>
				
				<Button
					raised
					borderRadius={4}
					title={'LOG OUT'}
					containerViewStyle={[styles.containerView]}
					buttonStyle={[styles.button]}
					textStyle={styles.buttonText}
					onPress={this.onSignOut}
					style={[styles.button]}
				/>
			</View>
		);
	}
}

export default connect (null, { signOut }) (Home);