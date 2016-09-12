import React from 'react'
import renderer from 'react-test-renderer'
import { Register } from '../Register'
import * as authActions from '../../../actions/auth'

test('Register Component without errors', () => {
  const tree = renderer.create(
    <Register authActions={ authActions }  auth={ {} }/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Register Component with errors', () => {
  const mockErrors = [ 'The email address is already in use by another account.' ]
  const tree = renderer.create(
    <Register authActions={ authActions } auth={ { registrationErrorMessages: mockErrors } }/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
