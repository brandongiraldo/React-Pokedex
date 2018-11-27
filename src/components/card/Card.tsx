import * as React from 'react';
import './Card.css';

export interface CardProps {
  name: string;
  url?: string;
  onClick?: () => void;
}

export interface PokemonDataState {
  data: any;
}

export default class Card extends React.Component<CardProps, PokemonDataState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {data: {}};
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(result => result.json())
      .then(items => this.setState({data: items}))
      .then(items => console.log(this.state.data));
  }

  handleClick = (e: Event) => {
    e.preventDefault();
    console.log('clicked!', e.target);
    console.log('clicked!', this.props.name);
  };

  render() {
    console.log('render!', this.state.data);
    return (
      <div
        className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col"
        onClick={this.props.onClick ? this.props.onClick.bind(this) : this.handleClick.bind(this)}
      >
        <div className="card">
          {this.state.data.name ? (
            <>
              <img src={this.state.data.sprites.front_shiny} />
              <div>{this.state.data.name}</div>
              <div>{this.state.data.height}</div>
            </>
          ) : (
            <>
              <div>Loading...</div>
              <h1>{this.props.url}</h1>
              <h2>{this.props.name}</h2>
            </>
          )}
        </div>
      </div>
    );
  }
}
