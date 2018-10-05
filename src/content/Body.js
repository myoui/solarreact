import React, { Component } from 'react';
import { textContent } from './text.js'



export class PageContent extends Component {

    componentDidUpdate(){
        window.scrollTo({top:0, behavior: "smooth"})
    }
    render() {
        return (
            <div className='content'>
                <div>Content of '{this.props.match.params.articleName}'</div>
                {textContent[`${this.props.match.params.articleName}`]}
            </div>
        )
    }
}