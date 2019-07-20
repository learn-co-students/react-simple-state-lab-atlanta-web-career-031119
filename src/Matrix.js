import React, { Component } from 'react';
import data             from './data.js';
import Cell                 from './Cell.js';

export default class Matrix extends Component {
  constructor () {
    super()
    this.state = {
      pattern1: [
        ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
        ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
        ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
        ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
        ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
        ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
        ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
        ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
        ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
        ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F']
      ]
    }
  }
  
  render() {
  
  const genRow = (vals) => (
    vals.map(val => <Cell color={val}/>)
  )
  
  const genMatrix = () => (
    this.state.pattern1.map(rowVals => <div className="row">{genRow(rowVals)}</div>)
  )

    return (
      <div id="matrix">
        {genMatrix()}
      </div>
    )
  }
  
}
