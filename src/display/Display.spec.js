import React from 'react';

//Component to test
import Display from './Display';

//Testing Libraries
import {render, fireEvent} from 'react-testing-library';
import renderer from 'react-test-renderer'; //Snapshot Library
//Execution Testing Libraries
import 'react-testing-library/cleanup-after-each'; //Resets the DOM after each test
import 'jest-dom/extend-expect';

describe('<Display />', () => {
  //Snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<Display />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
