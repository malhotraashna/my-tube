import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import youtube, { baseParams } from '../apis/youtube';

class App extends React.Component {
  onSearchTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: term,
      },
    });
    console.log(response);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
      </div>
    );
  }
}

export default App;
