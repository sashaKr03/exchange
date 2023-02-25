
interface intrequestOptions{
    method: string | undefined,
    redirect: RequestRedirect | undefined,
  }

const requestOptions:intrequestOptions = {
  method: 'GET',
  redirect: 'follow',
};

export async function fetchExchangeRates(exchange1:string, exchange2:string, amount:string) {
    return fetch
    (`https://api.exchangerate.host/convert?to=${exchange2}&from=${exchange1}&amount=${amount}`
    ,requestOptions)
      .then(response => response.json())
      .then(response => response.result)
  }

  

  