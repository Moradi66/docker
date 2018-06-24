const express = require ('express');

const app = express ();

let data = [
  {
    id: 1,
    name: 'Muh Muh',
  },
];

app.get('/', (req, res) => {
    res.json(data);
})
app.listen (3001, () => {
  console.log ('Fuuuuuuuuuuuuck');
});
