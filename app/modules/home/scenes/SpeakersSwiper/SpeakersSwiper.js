import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, FlatList, Image } from 'react-native';
import { Avatar, Button, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Swiper from 'react-native-swiper';
// import { connect } from 'react-redux';
import styles from "./styles"
import { theme } from "../../index"

import externalData from '../../../../assets/data/SpeakersList.json';

const { color } = theme;

class SpeakersSwiper extends Component {
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
	
	componentWillMount() {
		this.loadData();
	}
	
	loadData = () => {
		console.log('loading data… (fake)');
		this.setState({ data: externalData })
	}
	
	renderItems() {
		console.log('SpeakerSwiper renderItems');
		const {
			wrapperStyle,
			itemContainerStyle,
			avatarContainerStyle,
			titleSubtitleContainer,
			titleStyle,
			labelStyle,
			subtitleStyle,
			actionButtonStyle,
			actionButtonTextStyle
		} = styles;
		
		return externalData.map((item, i) => {
			return (
				<View key={item.id}>
					<ListItem title={item.title}
										titleStyle={titleStyle}
						/*
						rightTitle={item.title}
						rightTitleStyle={titleStyle}
						*/
						
										subtitle={item.description}
										subtitleStyle={subtitleStyle}
										subtitleNumberOfLines={10}
										hideChevron={true}
										label={
											<Text style={labelStyle}>PIF</Text>
										}
										avatar={<Avatar
											rounded
											xlarge
											source={{ uri: item.image }}
											style={avatarContainerStyle}
										/>}
										containerStyle={itemContainerStyle}
										wrapperStyle={wrapperStyle}
										avatarStyle={avatarContainerStyle}
										titleSubtitleContainer={titleSubtitleContainer}
					/>
					
					<Button
						medium
						rightIcon={{ name: 'code' }}
						title='Posez-moi une question'
						buttonStyle={actionButtonStyle}
						textStyle={actionButtonTextStyle}
					/>
				</View>
			);
		});
	};
	
	/*
	renderItem = ({ item }) => {
		const { titleStyle, subtitleStyle, avatarStyle, itemContainerStyle, contentContainerStyle } = styles;
		
		return (
			<ListItem
				title={item.title}
				titleStyle={titleStyle} subtitle={item.description}
				subtitleNumberOfLines={2}
				subtitleStyle={subtitleStyle}
				avatar={{ uri: item.image }}
				chevronColor="red"
				avatarStyle={avatarStyle}
				containerStyle={itemContainerStyle}
				// contentContainerStyle={contentContainerStyle}
				topDivider={true}
				bottomDivider={true}
			/>
		);
	}
	*/
	
	onError(error) {
		// Alert.alert ('Oops!', error.message);
	}
	
	render() {
		const { swiperStyle, arrowButtonStyle } = styles;
		
		return (
			<Swiper style={swiperStyle}
							showsButtons={true}
							dotColor={color.light_grey}
							activeDotColor={color.red}
							prevButton={<Text style={arrowButtonStyle}>‹</Text>}
							nextButton={<Text style={arrowButtonStyle}>›</Text>}
			>
				{this.renderItems()}
			</Swiper>
		);
	}
}


// export default connect (null, {  }) (Page);
export default SpeakersSwiper;