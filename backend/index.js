const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let products = [
  {
    id: 1,
    name: "Cool T-Shirt",
    price: 19.99,
    image: "/images/tshirt.png",
    description: "A really cool t-shirt.",
  },
  // ...other products
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
