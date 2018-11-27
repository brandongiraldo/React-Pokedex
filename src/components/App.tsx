import * as React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import CardLayout from './cardLayout/CardLayout';

export default class App extends React.Component<{}> {
  render(): React.ReactNode {
    return (
      <>
        <Header>{'Pokedex'}</Header>
        <CardLayout />
        <Footer>{'Brandon Giraldo - 2018'}</Footer>
      </>
    );
  }
}
