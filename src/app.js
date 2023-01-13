
API_KEY = 'ENTER-YOUR-OWN-APIKEY'


fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dallas,Texas&APPID=${API_KEY}&units=imperial`)
    .then((res) => {
      console.log(res);
      return res.json();
    }).then((data) => {
      console.log(data.main.temp)
      //document.write(`It is currently ${data.main.temp}&#176; in ${data.name}`);
      let weatherNow = document.querySelector('#weatherNow');
      weatherNow.innerHTML = `It is currently ${data.main.temp}&#176; in ${data.name}`;
    })
    .catch((err) => {
      console.error(err);
    });

