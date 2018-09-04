import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
// import { connect } from 'react-redux';

import styles from "./styles"

import { theme } from "../../index"

// const { signOut } = auth;

const { color } = theme;

class Page extends Component {
	constructor() {
		super();
		this.state = {}
		// this.onSignOut = this.onSignOut.bind (this);
	}
	
	/*
	onSignOut() {
		this.props.signOut (this.onSuccess.bind (this), this.onError.bind (this))
	}
	*/
	
	onSuccess() {
		Actions.reset("Auth")
	}
	
	onError(error) {
		Alert.alert('Oops!', error.message);
	}
	
	render() {
		console.log(this.props);
		return (
			<View style={styles.container}>
				
				<Button raised
								title="Item #1"
								onPress={Actions.Item1}
								style={styles.button}
								containerViewStyle={styles.button}
								textStyle={styles.buttonText}
				/>
				<Button raised
								title="Item #2"
								onPress={Actions.Item2}
								style={styles.button}
								containerViewStyle={styles.button}
								textStyle={styles.buttonText}
				/>
				<Button raised
								title="Item #3"
								onPress={Actions.Item3}
								style={styles.button}
								containerViewStyle={styles.button}
								textStyle={styles.buttonText}
				/>
				
				<Button raised
								title="Speaker detail"
								onPress={() => Actions.Speaker({ title: 'hello' })}
								style={styles.button}
								containerViewStyle={styles.button}
								textStyle={styles.buttonText}
				/>
			</View>
		);
	}
}


// export default connect (null, {  }) (Page);
export default Page;