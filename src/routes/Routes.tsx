import * as React from 'react';
import {Route, Link} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import App from '../components/App';

export interface TestComponentProps extends RouteComponentProps<any> {
  name: string;
}

const TestComponent = ({match}: TestComponentProps) => {
  return (
    <>
      <h1>{`${match.params.id} pokemon`}</h1>
      <Link to="/">{'Home'}</Link>
    </>
  );
};

export default class Routes extends React.Component {
  render() {
    return (
      <>
        <Route exact strict path={'/'} component={App} />
        <Route path={'/pokemon/:id'} exact strict component={TestComponent} />
      </>
    );
  }
}
