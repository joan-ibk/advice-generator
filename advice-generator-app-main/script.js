document.getElementById('fetch-button').addEventListener('click', fetchData);

const apiUrl = 'https://api.adviceslip.com/advice';

function fetchData() {
    console.log('Fetching data from the API...');
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched:', data);
            const headerElement = document.getElementById('api-header');
            const titleElement = document.getElementById('api-title');
            headerElement.innerHTML = `${"Advice #"}${data.slip.id}`;
            titleElement.innerHTML = `${'"'}${data.slip.advice}${'"'}`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
// Initial data fetch when the page loads
fetchData();











