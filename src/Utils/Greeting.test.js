import Greeting from "./Greeting"

test('Greeting', () => {
    const greeting = new Greeting();
    const result = greeting.for('adam');
    expect(result).toEqual('Welcome Adam');
})