
import { expect } from 'chai'
import foo from '../src/foo'

it('is good to go', async () => {
  expect(foo).to.be.a('function')
  const greeting = await foo()
  expect(greeting).to.equal('hello from foo')
})
