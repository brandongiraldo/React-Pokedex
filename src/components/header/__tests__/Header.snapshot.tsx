import * as React from 'react';
import {create} from 'react-test-renderer';
import Header from '../Header';

describe('Header Snapshots', () => {
  test('Simple Header with Text', () => {
    const component = create(<Header>{'Heres a Header with some text'}</Header>);
    expect(component).toMatchSnapshot();
  });
});
