import React, {Component} from 'react'

export default class extends Component {
  render() {
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title={this.props.title}
          className="embed-responsive-item"
          src={this.props.src}></iframe>
      </div>
    )

  }
}