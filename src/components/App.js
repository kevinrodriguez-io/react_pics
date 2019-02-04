import SearchBar from './SearchBar';
import ImageList from './ImageList';
import React, { Component } from 'react'
import unsplash from '../api/unsplash';

export default class App extends Component {

  state = { 
    isSearching: false,
    images: [] 
  };

  onSearchSubmit = async (term) => {
    this.setState({ isSearching: true });
    try {
      const response = await unsplash.get(`/search/photos`, {
        params: { query: term },
      });
      this.setState({ images: response.data.results })
    } catch (searchPhotosError) {
      console.error({ searchPhotosError })
    } finally {
      this.setState({ isSearching: false });
    }
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} isSearching={this.state.isSearching} />
        <ImageList images={this.state.images} isSearching={this.state.isSearching} />
      </div>
    );
  }
  
}
