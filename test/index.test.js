
import { expect } from '@thebearingedge/test-utils'
import foo from '../src'

it('is good to go', async () => {

  expect(foo).to.be.a('function')

  const greeting = await foo()

  expect(greeting).to.equal('hello from foo')
})
