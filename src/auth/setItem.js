const setItem = (headers, name) => {
  window.localStorage.setItem('access-token', headers['access-token'])
  window.localStorage.setItem('client', headers.client)
  window.localStorage.setItem('uid', headers.uid)
  window.localStorage.setItem('name', name)
}

// setItemを他のファイルで使用できるようにする
export default setItem
