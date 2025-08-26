import Link from "next/link";

function Products() {
  const products = [
    {
      id: "1",
      name: "Mobile",
      price: 500,
    },
    {
      id: "2",
      name: "Laptop",
      price: 1500,
    },
    {
      id: "3",
      name: "Tablet",
      price: 1000,
    },
    {
      id: "4",
      name: "Smart Watch",
      price: 200,
    },
    {
      id: "5",
      name: "Smart TV",
      price: 1000,
    },
    {
      id: "6",
      name: "Smart Home",
      price: 1000,
    },
    {
      id: "7",
      name: "Smart Phone",
      price: 1000,
    },
    {
      id: "8",
      name: "Smart Watch",
      price: 200,
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products page</h1>
      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <Link href={`/products/${product.id}`} className="text-green-500">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
