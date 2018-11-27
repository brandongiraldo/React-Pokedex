import * as React from 'react';
import {create} from 'react-test-renderer';
import Routes from '../Routes';

describe('Routes Snapshot Tests', () => {
  test.skip('Render Routes', () => {
    const component = create(<Routes />);
    expect(component).toMatchSnapshot();
  });
});
