
export const fetchData = async (url, apiKey, params) => {
  const fullUrl =`${url}?${params}${apiKey ? `&appid=${apiKey}` : ""}`
  const rawResponse = await fetch(fullUrl);
  const response = await rawResponse.json();
  if (rawResponse.status === 200) { // OK
    return response
  }

  throw response;
}