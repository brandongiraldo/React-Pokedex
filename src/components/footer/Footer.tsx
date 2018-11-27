import * as React from 'react';
import './Footer.css';

const Footer = (props: any) => {
  return (
    <div className={'container-fluid'}>
      <div className={'row'}>
        <div className={'footer col-xs-12 col-sm-12 col-md-12 col-lg-12'}>{props.children}</div>
      </div>
    </div>
  );
};

export default Footer;
