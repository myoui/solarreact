import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Column } from 'simple-flexbox';

const universe = (
    <div className="subNav">
        • <Link to='/beginning'>Beginng of the universe</Link><br/>
        • <Link to='/formation1'>Formation of the Solar system and the Sun</Link><br/>
        • <Link to='/formation2'>Formation of the Earth and the Moon</Link><br/>
        • <Link to='/sun'>The Sun</Link><br/>
    </div>)


export class NavMain extends Component {

    render() {
        return (
            <div className='navMain'>
                <Link to="/home">Home</Link> 
                <NavSub name="The Beginning" list={universe}/>
                <div>The Planets</div>
                <div>Other Objects</div>
            </div>
        )
    }
}

export class NavMob extends Component {

    render() {
        return (
            <div className='navMob'>
                <Row horizontal="space-around">
                    <Column width="25%">
                        <Link to="/home">Home</Link> 
                    </Column>
                    <Column width="25%">
                        <NavSub name="The Beginning" list={universe}/>
                    </Column>
                    <Column width="25%">
                        <div>The Planets</div>
                    </Column>
                    <Column width="25%">
                        <div>Other Objects</div>
                    </Column>
                </Row>
            </div>
        )
    }
}


class NavSub extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expand: false,
        }
    }
    handleClick = () => {
        this.setState({expand: !this.state.expand})
    }
    render() {
        if (!this.state.expand) {
            return (
                <div>
                    <div onClick={this.handleClick}><u>{this.props.name}</u></div>
                    <div  className="subNav"></div>
                </div>
            )
        } else {
            return (
                <div>
                    <div onClick={this.handleClick}>{this.props.name}</div>
                    {this.props.list}
                </div>
            )
        }
    }
}

