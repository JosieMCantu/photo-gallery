import React from 'react';
import images from './data.js';
import './App.css';
import Header from './components/Header.js';
import ImageList from './components/ImageList.js';



export default class App extends React.Component {
  state = {
    horns: '',
  }
  handleNumberofHorns = (e) => {
    this.setState({
      horns:
        e.target.value
    });
  }
  render() {

    const filteredImages = images.filter((image) => {
      if (!this.state.horns) return true;
      if (image.horns === Number(this.state.horns)) return true;
      return false;
    });

    return (

      <div>
        <div>
          <Header />
        </div>
        <div>
          <form>
            Select number of horns:
            <select value={this.state.horns} onChange={(e) => {
              this.setState({
                horns: e.target.value
              })
            }}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </form>
          <ImageList images={filteredImages} />
        </div>
      </div>
    )
  }
}

