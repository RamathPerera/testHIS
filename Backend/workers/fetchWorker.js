import fetch from 'node-fetch';

// Function to fetch data from the endpoint and log it to the console
async function fetchData() {
    try {
        const response = await fetch('https://my-json-server.typicode.com/typicode/demo/db');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        console.log('Fetched Data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call fetchData every 1 minute (60000 milliseconds)
setInterval(fetchData, 60000);
