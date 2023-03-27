const axios = require('axios');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const baseURL = 'http://localhost:5500';

readline.question('Choose an option: 1) Get random artist 2) Get random artwork\n', option => {
  switch (option) {
    case '1':
      readline.question('Enter artist index (0-4): ', index => {
        axios.get(`${baseURL}/artist/${index}`)
          .then(response => {
            const { name, description } = response.data;
            console.log(`Artist Name: ${name}`);
            console.log(`Artist Description: ${description}`);
          })
          .catch(error => {
            console.log(error.message);
          })
          .finally(() => {
            readline.close();
          });
      });
      break;
    case '2':
      readline.question('Enter artwork index (0-4): ', index => {
        axios.get(`${baseURL}/artwork/${index}`)
          .then(response => {
            const { title, description } = response.data;
            console.log(`Artwork Title: ${title}`);
            console.log(`Artwork Description: ${description}`);
          })
          .catch(error => {
            console.log(error.message);
          })
          .finally(() => {
            readline.close();
          });
      });
      break;
    default:
      console.log('Invalid option');
      readline.close();
      break;
  }
});
