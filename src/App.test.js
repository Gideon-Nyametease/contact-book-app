import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('Expects Add Contact Button component to be in App', () => {
  const { queryByTestId } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  const addContactButton = queryByTestId("add-contact-button");
  expect(addContactButton).toBeInTheDocument();
});

test('Expects AddModal component to be outside of App component', () => {
  const { queryByTestId } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  const addContactModal = queryByTestId("add-contact-modal");
  expect(addContactModal).not.toBeInTheDocument();
});

test('Expects AddModal component to be in App component on CLick', () => {
  const { queryByTestId } = render(<App />);
  const addContactButton = queryByTestId("add-contact-button");
 fireEvent.click(addContactButton);
 const addContactModal = queryByTestId("add-contact-modal");
 expect(addContactModal).not.toBeInTheDocument();
});
