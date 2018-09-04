import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Card } from '../common/Card';
import { CardSection } from '../common/CardSection';
import { Button } from '../common/Button';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

const Person = (person) => {
	const { title, artist, thumbnail_image, image, url } = person;
	const { thumbnailContainerStyle, thumbnailStyle, headerStyle, headerTitleStyle, coverStyle } = styles;
	
	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image style={thumbnailStyle}
								 source={{ uri: thumbnail_image }}></Image>
				</View>
				<View style={headerStyle}>
					<Text style={headerTitleStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image style={coverStyle}
							 source={{ uri: image }}></Image>
			</CardSection>
			<CardSection>
				<Button onPress={() => Actions.pop()/*Linking.openURL(url)*/}>
					Fermer
				</Button>
			</CardSection>
		</Card>
	);
}

export default Person;