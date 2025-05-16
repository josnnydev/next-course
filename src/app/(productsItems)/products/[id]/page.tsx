import Image from "next/image";
 

interface Product {
    id: number;
    name: string;
    descripcion: string;
    image: string;
    price: number;
}


async function Product({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const { id } = params;
  const name = typeof searchParams.name === "string" ? searchParams.name : "";
  const productsParams = typeof searchParams.products === "string" ? searchParams.products : "[]";


   const parsedProducts = typeof productsParams === "string" ? JSON.parse(productsParams) : [];


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