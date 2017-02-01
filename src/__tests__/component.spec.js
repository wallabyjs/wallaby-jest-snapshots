import {TestComponent} from '../component';
import * as React from 'react';
import {create} from 'react-test-renderer';

describe('component', () => {
  it('should be rendered correctly', () => {
    const tree = create(<TestComponent a="one string" b={1}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be rendered correctly with different props', () => {
    const tree = create(<TestComponent a="another string" b={2}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});