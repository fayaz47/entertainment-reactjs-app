import React from 'react';
import HooksForm1 from '../__mocks__/HooksForm1';
import {render, fireEvent, cleanup} from '@testing-library/react';

afterEach(cleanup)

//testing a controlled component form.
it('Inputing text updates the state', () => {
    const { getByText, getByLabelText } = render(<HooksForm1 />);

    expect(getByText(/Change/i).textContent).toBe("Change: ")

    fireEvent.change(getByLabelText("Input Text:"), {target: {value: 'Text' } } )

    expect(getByText(/Change/i).textContent).not.toBe("Change: ")
 })


 it('submiting a form works correctly', () => {
     const { getByTestId, getByText } = render(<HooksForm1 />);

     expect(getByText(/Submit Value/i).textContent).toBe("Submit Value: ")

     fireEvent.submit(getByTestId("form"), {target: {text1: {value: 'Text' } } })

     expect(getByText(/Submit Value/i).textContent).not.toBe("Submit Value: ")
  })