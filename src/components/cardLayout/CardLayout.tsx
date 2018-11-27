import * as React from 'react';
import Card, {CardProps} from '../card/Card';

export interface CardLayoutState {
  results: CardProps[];
}

export default class CardLayout extends React.Component<{}, CardLayoutState> {
  constructor(props: any) {
    super(props);
    this.state = {results: []};
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(result => result.json())
      .then(items => this.setState({results: items.results}))
      .then(() => console.log('done.'));
  }

  render(): React.ReactNode {
    return (
      <div className="card-layout container">
        <div className="row no-gutter">
          {this.state.results ? (
            this.state.results.map(item => (
              <Card
                name={item.name}
                key={item.name}
                url={item.url}
                onClick={() => console.log('made it!')}
              />
            ))
          ) : (
            <li>Loading...</li>
          )}
        </div>
      </div>
    );
  }
}
