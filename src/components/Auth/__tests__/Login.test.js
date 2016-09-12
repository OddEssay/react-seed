import React from 'react'
import renderer from 'react-test-renderer'
import { Login } from '../Login'
import * as authActions from '../../../actions/auth'

test('Login Component without errors', () => {
  const tree = renderer.create(
    <Login authActions={ authActions }  auth={ {} }/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Login Component with errors', () => {
  const mockErrors = [ 'The email address is already in use by another account.' ]
  const tree = renderer.create(
    <Login authActions={ authActions } auth={ { loginErrorMessages: mockErrors } }/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
