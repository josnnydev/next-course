import Image from "next/image";

interface ProductProps {
    params: {
        id: string;
        
    }
    searchParams: {
        name?: string;
        products?: string;
    }
}

interface Product {
    id: number;
    name: string;
    descripcion: string;
    image: string;
    price: number;
}


async function Product({params,searchParams}: ProductProps) {
    const { id } = params;
    const { name,products } = searchParams;

    const parsedProducts = products ? JSON.parse(products) : [];

    return (
        <div>
        <h2>Categoría: {name} -{id} </h2>
        <ul>
          {parsedProducts.map((product:Product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> - {product.descripcion} - ${product.price}
                <Image
                    src={ product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    priority
                        />
              
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default Product