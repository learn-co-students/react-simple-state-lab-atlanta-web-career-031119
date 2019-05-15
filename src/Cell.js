import React, { Component } from 'react';
import Matrix from './Matrix.js';

export default class Cell extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            color: props.color
        }
    }
    
    render () {
        
        const changeColor = () => (
            this.state.color === '#00F' ? this.setState({color: '#F00'}) : this.setState({color: '#00F'})
        )

        return(
            <div className='cell' style={{backgroundColor: this.state.color}} onClick={changeColor}/>
        )
    }
}