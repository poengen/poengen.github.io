const myHeaders = new Headers();
myHeaders.append('Authorization', 'Bearer 01cbea5e07bf9c3c231f67ff28e04288fe1cab29');

fetch('https://www.strava.com/api/v3/athlete', {
  method: 'GET',
  headers: {
    authorization: 'Bearer 01cbea5e07bf9c3c231f67ff28e04288fe1cab29',
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
