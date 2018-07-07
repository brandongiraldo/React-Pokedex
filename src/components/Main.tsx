import * as React from 'react';

export interface HelloProps {
  compiler?: string;
  framework?: string;
  ok?: string;
}

const ok = 'wo';
console.log(ok);

export default class Hello extends React.Component<HelloProps, {}> {
  render(): React.ReactNode {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}!
      </h1>
    );
  }
}
