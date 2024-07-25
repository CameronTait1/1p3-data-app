document.addEventListener('DOMContentLoaded', () => {
    // Fetch weather data from OpenWeatherMap
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=27f082a6be7d6f33fea7204ad9130389')
      .then(response => response.json())
      .then(data => {
        console.log('Weather Data:', data); // Log the entire response
  
        // Check if the data structure matches your expectations
        if (data && data.main) {
          const weatherCtx = document.getElementById('weatherChart').getContext('2d');
          new Chart(weatherCtx, {
            type: 'bar',
            data: {
              labels: ['Temperature (°C)', 'Humidity (%)', 'Pressure (hPa)'],
              datasets: [{
                label: 'Weather Data (London)',
                data: [data.main.temp, data.main.humidity, data.main.pressure],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        } else {
          console.error('Unexpected data structure:', data);
        }
      })
      .catch(error => console.error('Error fetching weather data:', error));
  
    // Fetch cryptocurrency data from CoinGecko
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
      .then(response => response.json())
      .then(data => {
        console.log('Cryptocurrency Data:', data); // Log the entire response
  
        const cryptoCtx = document.getElementById('cryptoChart').getContext('2d');
        new Chart(cryptoCtx, {
          type: 'pie',
          data: {
            labels: ['Bitcoin (USD)', 'Ethereum (USD)'],
            datasets: [{
              label: 'Cryptocurrency Prices',
              data: [data.bitcoin.usd, data.ethereum.usd],
              backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(75, 192, 192, 0.2)'
              ],
              borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Cryptocurrency Prices (USD)'
              }
            }
          }
        });
      })
      .catch(error => console.error('Error fetching cryptocurrency data:', error));
  });
  