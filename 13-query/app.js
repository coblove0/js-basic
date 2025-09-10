const a = {
  search: 'Вася',
  take: 10
}


function objectToQuery (obj) {
  let result = [];
  for (const param of Object.keys(obj)) {
  result.push(`${param}=${obj[param]}`);
  }
  return result.join('&');
}

console.log(objectToQuery(a));