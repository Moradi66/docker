const express = require ('express');

const app = express ();

let data = [
  {
    id: 1,
    name: "it's me . reale me",
  },
];

app.get('/', (req, res) => {
    res.json(data);
})
app.listen (4000, () => {
  console.log ('docker');
});
