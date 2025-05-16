
import Link from "next/link";

 function Products() {
  const productsList = [
    {
      id: 1,
      name: "Electrónica",
      products: [
        { id: 101, name: "Reloj", descripcion: "reloj a buen precio",image:"/images/curren4.webp", price: 1200 },
        { id: 102, name: "Teléfono", descripcion: "telefono a buen precio",image:"/images/telefono.webp", price: 300 },
        { id: 103, name: "Laptop", descripcion: "laptop a buen precio",image:"/images/laptop.webp", price: 1200 },
      ],
    },
    {
      id: 2,
      name: "Ropa",
      products: [
        { id: 201, name: "Camiseta", descripcion: "camiseta cómoda",image:"/images/camiseta.webp", price: 25 },
        { id: 202, name: "Jeans", descripcion: "jeans modernos",image:"/images/jeans.webp", price: 50 },
      ],
    },
  ];

  return (
    <div>
      <h2>Productos por categoría</h2>
      <ul >
        {productsList.map((category) => (
          <li  key={category.id}>
            <strong>{category.name}</strong>{" "}
            <Link
              href={{
                pathname: `/products/${category.id}`,
                query: {
                  name: category.name,
                  products: JSON.stringify(category.products),
                },
              }}
            >
              <button>Ver detalles</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
