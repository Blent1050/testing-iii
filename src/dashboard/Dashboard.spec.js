import React from 'react';

//Component to test
import Dashboard from './Dashboard';

//Testing Libraries
import {render, fireEvent} from 'react-testing-library';
import renderer from 'react-test-renderer'; //Snapshot Library
//Execution Testing Libraries
import 'react-testing-library/cleanup-after-each'; //Resets the DOM after each test
import 'jest-dom/extend-expect';

describe('<Dashboard />', () => {
  //Snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
