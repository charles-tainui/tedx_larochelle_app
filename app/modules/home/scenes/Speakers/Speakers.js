import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import { Button, ListItem, Avatar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

// import { connect } from 'react-redux';
import { styles, stylesHorizontal } from "./styles"
import { theme } from "../../index"

import externalData from '../../../../assets/data/SpeakersList.json';

const { color } = theme;

class Speakers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			data: [],
			page: 1,
			seed: 1,
			error: null,
			refreshing: false,
		}
	}
	
	componentDidMount() {
		this.loadData();
	}
	
	loadData = () => {
		console.log('loading data… (fake)');
		console.log(externalData);
		
		this.setState({ data: externalData })
	}
	
	_openSpeaker = (speakerId) => {
		// Alert('openSpeaker '+speakerId);
		// console.log('loading data… (fake)');
		// console.log(speakerId);
		Actions.SpeakerSwiper({ title: 'Speaker' });
		// this.setState({ data: externalData })
	}
	
	renderItem = ({ item }) => {
		const { titleStyle, subtitleStyle, avatarContainerStyle, itemContainerStyle, contentContainerStyle } = styles;
		
		return (
			<ListItem
				title={item.title}
				subtitle={item.description}
				titleStyle={titleStyle}
				subtitleNumberOfLines={2}
				subtitleStyle={subtitleStyle}
				avatar={<Avatar
					rounded
					medium
					source={{ uri: item.image }}
				/>}
				chevronColor="red"
				topDivider={true}
				bottomDivider={true}
				onPress={() => this._openSpeaker(item.id)}
			/>
		);
	}
	
	onError(error) {
	}
	
	render() {
		const { listStyle } = styles;
		
		return (
			<View>
				<FlatList
					data={this.state.data}
					renderItem={this.renderItem}
					keyExtractor={item => item.id.toString()}
					style={listStyle}
				/>
			</View>
		);
	}
}

// export default connect (null, {  }) (Page);
export default Speakers;