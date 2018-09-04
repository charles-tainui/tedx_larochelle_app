import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	state = { albums: [] };

	componentWillMount() {
		// console.log ('componentWillMount');
		axios.get ('https://rallycoding.herokuapp.com/api/music_albums')
		.then (response => this.setState ({ albums: response.data }));
	}

	renderAlbums() {
		return this.state.albums.map ((album, i) =>
			<AlbumDetail album={album} key={album.title}/>
		);
	}

	render() {
		console.log (this.state);

		return (
			<ScrollView>
				{this.renderAlbums ()}
			</ScrollView>
		);
	}
}

export default AlbumList;
