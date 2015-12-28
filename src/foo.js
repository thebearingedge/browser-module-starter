
export default async function foo() {
  const greeting = await Promise.resolve('hello from foo')
  return greeting
}
