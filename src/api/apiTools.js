const API_URL = 'https://api.themoviedb.org/3'

export const getRequest = (path, params) => {
  const url = new URL(`${API_URL}${path}`)
  if (params != null) {
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  }

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
