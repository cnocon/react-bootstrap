import React from 'react';

export default class Container extends React.Component {
  render() {
    const cls = `container${this.props.fluid ? '-fluid' : ''} ${this.props.className || ''}`;
    return (
      <div className={cls}>{this.props.children}</div>
    )
  }
}
