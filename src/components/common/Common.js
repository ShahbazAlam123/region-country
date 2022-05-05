import React, { Component } from 'react'

export default class Common extends Component {
  render() {
    return (
        <select onChange={this.props.onChange}>
        {this.props.value.map((item,index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
         
      </select>
    )
  }
}
