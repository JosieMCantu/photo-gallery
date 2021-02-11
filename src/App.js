import React from 'react';
import images from './data.js';
import './App.css';
import Header from './components/Header.js';
import ImageList from './components/ImageList.js';
import DropDown from './components/DropDown.js'


export default class App extends React.Component {
  state = {
    horns: '',
    keyword: '',
  }
  handleNumberofHorns = (e) => {
    this.setState({
      horns:
        e.target.value
    });
  }
  handleKeywords = (e) => {
    this.setState({
      keyword:
        e.target.value
    });
  }
  render() {

    const filteredImages = images.filter((image) => {
      //if no horns or keyword are selected
      if (!this.state.horns && !this.state.keyword) return true;

      //if keyword is selected but no horns
      if (!this.state.horns && this.state.keyword) {
        if (this.state.keyword === image.keyword) return true;
      };

      //if horns is selected but no keyword
      if (!this.state.keyword && this.state.horns)
        if (this.state.horns === image.horns) return true;

      //if both match
      if (image.horns === Number(this.state.horns) && image.keyword === this.state.keyword) return true;
      return false;
    });

    return (

      <div className="container">
        <div>
          <Header />
        </div>
        <div>

          Select the keyword:
          <DropDown handleChange={this.handleKeywords} currentValue={this.state.keyword}
            options={['narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'chameleon', 'dragon', 'lizard']} />
          Select number of horns:
          <DropDown handleChange={this.handleNumberofHorns} currentValue={this.state.horns} options={['1', '2', '3', '100']} />

          <ImageList images={filteredImages} />
        </div>
      </div>
    )
  }
}

