import React from 'react'
import renderer from 'react-test-renderer'
import { Register } from '../Register'
import * as authActions from '../../../actions/auth'

test('Register', () => {
  const tree = renderer.create(
    <Register authActions={ authActions } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
