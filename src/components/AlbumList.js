import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component{
  state={albums:[]};
  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response=>  this.setState({albums:response.data}))
      .catch(error=>console.log);
  }
  renderAlbums(){
    return (this.state.albums.map(album=>
      <AlbumDetails key={album.title} album={album} />
    ));
  }
  render(){

    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
export default AlbumList