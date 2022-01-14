// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const AllProducts = [
  {
    id: 1,
    name: "Caramel Chocolate",
    priceInCents: 250,
    imageUrl: "https://m.media-amazon.com/images/I/81KasNPiI-L.jpg",
  },
  {
    id: 2,
    name: "Hazelnut Chocolate",
    priceInCents: 310,
    imageUrl: "https://www.trolley.co.uk/img/product/IZV777",
  },
  {
    id: 3,
    name: "Organic Raw Chocolate",
    priceInCents: 200,
    imageUrl:
      "https://i.pinimg.com/736x/70/9a/c0/709ac054650c5e78a9877f0b77a7e66e.jpg",
  },
];

export default function handler(req, res) {
  res.status(200).json(AllProducts);
}
