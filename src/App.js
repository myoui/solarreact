import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Row, Column } from 'simple-flexbox';
import { isMobile } from 'is-mobile';

import { NavMain, NavMob } from './navigation/Navbar';
import { PageContent } from './content/Body';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 1001,
    }
  }
  
  getWidth = () => {
    this.setState({width: window.innerWidth})
  }
  scrollToTop = () => {
    window.scrollTo({top:0, behavior: "smooth"})
  }
  componentDidMount() {
    this.getWidth();
    window.addEventListener('resize', this.getWidth.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.getWidth.bind(this))
  }
  
  render() {

    const footer = (
      <div className="footer">
        <span onClick={this.scrollToTop}
              style={{width:"80px", textAlign:"center"}}>↑ Back to Top</span>
      </div>
    )
    const content = (
      <div>
        <Route exact path='/' render={() => <Redirect to="/home"/>}/>
        <Route path="/solarreact" render={() => <Redirect to="/home"/>}/>
        <Route path="/:articleName" component={PageContent}/>
      </div>
    )

    if (this.state.width < 1000 || isMobile.isMobile()) {
      return (
        <div className="App">
          <div style={{textAlign:"center"}}><b>The Solar System {isMobile.isMobile() ? "on Mobile" : "on Desktop"}</b></div>
          <NavMob/>
          <Switch>
            {content}
          </Switch>
          {footer}
        </div>
      )
    } else {
      return (
        <div className="App">
          <div style={{margin: "10px"}}><h4>The Solar System {isMobile.isMobile() ? "on Mobile" : "on Desktop"}</h4></div>
          <Row>
            <Column>
              <NavMain/>
            </Column>
            <Column>
              <Switch>
                {content}
              </Switch>
            </Column>
          </Row>
          {footer}
        </div>
        );}
                }
}

export default App;