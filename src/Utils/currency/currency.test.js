import { convert } from "./currency";

// beforeEach(()=> {
//     fetch.resetMocks();
// })
it('conver correctly', async()=> {
    fetch.mockResponseOnce(JSON.stringify({rates: {CAD: 1.42}}))
    const rates= await convert('USD', 'CAD');
    // expect(rates).toEqual(1.42);
    expect(fetch).toHaveBeenCalledWith(
        'https://api.exchangeratesapi.io/latest?base=USD'
    );
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
        'https://api.exchangeratesapi.io/latest?base=USD'
    );
});

it('cathces error and returns null', async () => {
    fetch.mockReject(() => "API failure");
    const rates= await convert('USD', 'CAD');
    expect(rates).toEqual(null);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
        'https://api.exchangeratesapi.io/latest?base=USD'

    )
})