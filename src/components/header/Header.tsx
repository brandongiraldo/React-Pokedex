import * as React from 'react';
import './Header.css';

interface HeaderProps {
  // no-op
}

const Header: React.SFC<HeaderProps> = props => {
  return (
    <div className={'container-fluid'}>
      <div className={'row'}>
        <div className={'header col-xs-12 col-sm-12 col-md-12 col-lg-12'}>{props.children}</div>
      </div>
    </div>
  );
};

export default Header;
