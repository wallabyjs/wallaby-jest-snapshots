import * as React from 'react';

export class TestComponent extends React.Component<any, any> {
  render() {
    return (
      <div className="root">
        <div className="string">String is {this.props.a}</div>
        <div className="number">Number is {this.props.b}</div>
      </div>
    );
  }
}