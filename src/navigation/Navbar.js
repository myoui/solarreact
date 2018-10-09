import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Column } from 'simple-flexbox';
import { isMobile } from 'is-mobile';

const universe = (
    <div className="subNav">
        • <Link to='/beginning'>Beginng of the universe</Link><br/>
        • <Link to='/formation1'>Formation of the Solar system and the Sun</Link><br/>
        • <Link to='/formation2'>Formation of the Earth and the Moon</Link><br/>
        • <Link to='/sun'>The Sun</Link><br/>
    </div>)

const planets = (
    <div className="subNav">
        • <Link to='/mercury'>Mercury</Link><br/>
        • <Link to='/venus'>Venus</Link><br/>
        • <Link to='/earth'>Earth</Link><br/>
        • <Link to='/mars'>Mars</Link><br/>
        • Jupiter<br/>
        • Saturn<br/>
        • Uranus<br/>
        • Neptune<br/>
    </div>)

const others = (
    <div className="subNav">
        • Asteriod Belt<br/>
    </div>
)
export class NavMain extends Component {

    render() {
        return (
            <div className='navMain'>
                <Link to="/home">Home</Link> 
                <NavSub name="The Beginning" list={universe}/>
                <NavSub name="The Planets" list={planets}/>
                <NavSub name="Other Objects" list={others}/>
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
                        <NavSub name="The Planets" list={planets}/>
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
        const list = isMobile.isMobile() ? 
            <div onClick={this.handleClick}>{this.props.list}</div> : <div>{this.props.list}</div>;

        const styles = {
            cursor: 'pointer'
        }

        if (!this.state.expand) {
            return (
                <div>
                    <div onClick={this.handleClick}><u style={styles}>{this.props.name}</u></div>
                </div>
            )
        } else {
            return (
                <div>
                    <div onClick={this.handleClick}><span style={styles}>{this.props.name}</span></div>
                    {list}
                </div>
            )
        }
    }
}

