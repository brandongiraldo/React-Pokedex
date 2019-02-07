import * as React from 'react';
import './Card.css';
import { Redirect } from 'react-router';

export interface CardProps {
  name: string;
  url?: string;
  onClick?: () => void;
}

export interface PokemonDataState {
  data: any;
  selected: boolean;
}

export default class Card extends React.Component<CardProps, PokemonDataState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {data: {}, selected: false};
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(result => result.json())
      .then(items => this.setState({data: items}))
  }

  handleClick = (e: Event) => {
    e.preventDefault();
    console.log('clicked!', this.state.data.id);
    this.setState({selected: true});
  };

  render() {
    const {name, height, sprites} = this.state.data;
    if (this.state.selected) {
      return <Redirect to={{ pathname: `/pokemon/${this.state.data.id}`}}/>
    }
    return (
      <div
        className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col"
        onClick={this.props.onClick ? this.props.onClick.bind(this) : this.handleClick.bind(this)}
      >
        <div className="card">
          {name ? (
            <>
              <img src={sprites.front_default} />
              <h1>{name}</h1>
              <p>{height}</p>
            </>
          ) : (
              <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
}
