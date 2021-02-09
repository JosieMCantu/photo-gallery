import React from 'react';
import images from './data.js';
import './App.css';
import Header from './components/Header.js';
import ImageList from './components/ImageList.js';



export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ImageList images={images} />
      </div>
    )
  }
}

