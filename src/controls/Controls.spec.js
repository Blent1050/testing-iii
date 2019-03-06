import React from 'react';

//Component Import
import Controls from './Controls';

//Testing imports
import renderer from 'react-test-renderer';
import {render, fireEvent} from 'react-testing-library';

//Testing Execution Imports
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

describe('<Controls />', () => {
  //Run tests on the toggleLocked() function
  describe('toggleClosed()', () => {
    it('should call the toggleLocked function', () => {
      const toggleClosed = jest.fn();
      const {getByText} = render(<Controls toggleClosed={toggleClosed} />);

      fireEvent.click(getByText(/close gate/i));
      expect(toggleClosed).toHaveBeenCalled();
    });
    // it('should toggle the text of the button from closed gate to open gate', () => {
    //   const locked = false;
    //   const toggleClosed = jest.fn(locked => {
    //     if (locked) {
    //       locked = false;
    //     } else {
    //       locked = true;
    //     }
    //   });
    //   const actual = toggleClosed(locked);
    //   const {getByText, queryByText} = render(
    //     <Controls toggleClosed={toggleClosed} />
    //   );
    //   expect(queryByText(/close gate/i).textContent).toBe('Close Gate');
    //   fireEvent.click(getByText(/close gate/i));
    //   expect(queryByText(/open gate/i).textContent).toBe('Open Gate');
    // });
  });

  //Snapshots
  it('Matches Snapshot', () => {
    const tree = renderer.create(<Controls />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
