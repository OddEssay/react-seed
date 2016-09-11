import React from 'react'
import renderer from 'react-test-renderer'
import Register from '../Register'

test('Register', () => {
  const tree = renderer.create(
    <Register store={undefined} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
