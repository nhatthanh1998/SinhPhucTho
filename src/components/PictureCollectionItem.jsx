import React, {Component} from 'react'
import styled from 'styled-components'

export default class extends Component {
  render() {
    return (
      <Picture className={this.props.className}>
        <img
          className="img"
          src={this.props.imgURL}
          alt={this.props.title}
          title={this.props.title}/>
      </Picture>
    )
  }
}

const Picture = styled.div `
  padding-bottom: 1rem;
  padding-left: .5rem;
  padding-right:.5rem;
    .img{
        cursor: pointer;
        width: 100%;
        height: auto;
    }
`