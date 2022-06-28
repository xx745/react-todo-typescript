import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import ToDoNewItem from '../src/components/ToDoNewItem';

test('Renders add todo button', () => {
  render(<App />);

  const linkElement = screen.getByText(/Add ToDo/i);

  expect(linkElement).toBeInTheDocument();
});

test('Renders initial todos', () => {
  render(<App />);

  const item1 = screen.getByText(/Item 1/i);
  const item2 = screen.getByText(/Item 1/i);

  expect(item1).toBeInTheDocument();
  expect(item2).toBeInTheDocument();
});

test('Adding new todo works', () => {
  render(<App />);
  const addNewToDoButton = screen.getByTestId('ToDoNewItemBtn-test');
  const addNewToDoInput = screen.getByTestId('ToDoNewItemInput-test');

  userEvent.type(addNewToDoInput, 'Test entry');
  userEvent.click(addNewToDoButton);

  expect(screen.getByText(/Test entry/i)).toBeInTheDocument();
});