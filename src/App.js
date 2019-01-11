import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTitlePage: false,
      title: "",
      subtitle: "",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title.value)
    this.setState({
      title: e.target.title.value,
      subtitle: e.target.subtitle.value,
      showTitlePage: true,
    })
  }

  render() {
    return (
      <div className="App">
          <span className="logo">kubucation</span>
          { this.state.showTitlePage ? (
            <TitleScreen title={this.state.title} subtitle={this.state.subtitle}/> 
          ): (
            <EnterTitleScreen handleSubmit={this.handleSubmit}/>
          )}
      </div>
    );
  }
}


export default App;

const EnterTitleScreen = ({ handleSubmit }) => (  
  <header className="title-screen">
    <form className="input-form" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Enter Title here"/>
      <input type="text" name="subtitle" placeholder="Enter Subtitle here"/>
      <input type="submit" value="show title" />
    </form>
  </header>
)

const TitleScreen = ({ title, subtitle }) => (
  <header className="title-screen">
    <h1>{ title }</h1>
    <h2>{ subtitle }</h2>
  </header>
)
