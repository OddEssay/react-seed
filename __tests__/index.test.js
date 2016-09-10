import React from 'react'
import renderer from 'react-test-renderer'
import { HelloMessage } from '../src/components/HelloMessage'
test('HelloMessage', () => {
  const tree = renderer.create(
    <HelloMessage params={ {name: 'World'} } />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
