import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles'

export default class extends Component {
	
	render() {
//					<Image style={styles.image} source={require ("../../assets/images/splash.png")}/>
		return (
			<View style={styles.container}>
				<View style={styles.wrapper}>
					<Text style={styles.title}>Speaker detail</Text>
					<Text style={styles.text}>bla bla bla bla</Text>
				</View>
			</View>
		);
	}
}