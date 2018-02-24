const API_URL = 'http://localhost:3000/api/v1'
//const API_URL = 'https://climbgg-api.herokuapp.com/api/v1'

export function apiCall(method, path, options={}) {
  return fetch(`${API_URL}/${path}`, {
    method: method,
    headers: {
      Accept: 'application/json', 'Content-Type': 'application/json',
      Authorization: `Bearer ${options.token}`
    },
    body: JSON.stringify(options.data)
  })
    .then(response => {
      if (!response.ok) {
        console.log('API SERVER ERROR')
        throw Error(response.statusText)
      }

      return response
    })
    .then(response => {
      return response.json()
    })
    .catch(error => {
      console.log('API CLIENT ERROR: ', error)
      throw error
    })
}
