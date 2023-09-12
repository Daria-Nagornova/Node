const axios = require('axios')
const fs = require('fs');
const path = require('path');

async function requestData() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

         fs.writeFileSync(path.resolve(__dirname, 'new_file.json'), JSON.stringify(data), 'utf-8', (err) => {
             if (err) {
                 console.log('Ошибка записи в файл');
             }
         })
 }

module.exports = {
    requestData
}