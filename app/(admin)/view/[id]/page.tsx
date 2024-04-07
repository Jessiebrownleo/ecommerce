
import Image from "next/image";
type PageProps = {
  params: {
    id: number;
  };
  searchParams: any;
};

const fetchProductData = async (productId: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${productId}/`);
  const productData = await response.json();
  console.log(productData);
  return productData;
};

const QuantitySelector = ({ quantity }: { quantity: number }) => (
  <div className="flex flex-row items-center">
    <button className="bg-gray-200 py-2 px-3 text-3xl text-violet-600 rounded-lg">-</button>
    <span className='py-4 px-6 rounded-lg'>{quantity}</span>
    <button className="bg-gray-200 py-2 px-3 text-3xl text-violet-600 rounded-lg">+</button>
  </div>
);



const ProductPage = async (props: PageProps) => {
  let productData = await fetchProductData(props.params.id);
  console.log(productData)
  return (
    <main className="container mx-5 mt-20">
      <section className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img src={productData.image} alt="" className="w-full aspect-square object-cover rounded-lg"/>
        </div>
        <div className="flex flex-col gap-6 lg:w-2/4">
          <div>
            <span className="text-violet-600 font-semibold">
              {productData.seller}
            </span>
            <h1 className="text-3xl font-bold">{productData.name}</h1>
          </div>
          <p className="text-gray-600">
            {productData.desc}
          </p>
          <h6 className="text-2xl font-semibold"> ${productData.price}</h6>
          <div className="flex flex-row items-center gap-16">

          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductPage;