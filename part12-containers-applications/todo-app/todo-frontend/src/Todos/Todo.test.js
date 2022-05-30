import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from './Todo'


test('renders content', async () => {
  const todo = {
    text: 'Component testing is done with react-testing-library',
    done: false,
    id: "628e7c968c67e01ebbb99370"
  }
  
  const mockDelete = jest.fn()
  const mockComplete = jest.fn()
  const container = render(<Todo todo={todo} deleteTodo={mockDelete} completeTodo={mockComplete}/>).container
  
  const text = screen.getByText('Component testing is done with react-testing-library')
  expect(text).toBeDefined()
  
  
  const completeButton = container.querySelector('.complete-btn')
  userEvent.click(completeButton)
  expect(mockComplete).toBeCalled()

  const deleteButton = container.querySelector('.delete-btn')
  userEvent.click(deleteButton)
  expect(mockDelete).toBeCalled()
})