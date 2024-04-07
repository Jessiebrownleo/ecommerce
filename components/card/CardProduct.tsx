import Image from "next/image";
type CardProductProps = {
  image: string;
  name: string;
  price: number;
  onClick?: () => void;
  seller: string;
};
const CardProduct = ({
  image,
  name,
  seller,
  price,
  onClick,
}: CardProductProps) => {
  return (
    <section className="card bg-white dark:bg-gray-800 transform transition duration-500 ease-in-out hover:scale-105" onClick={onClick}>
      <div className="image-container">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div className="flex flex-col gap-3 p-5">
        {/*badge*/}
        <div className="flex items-center gap-2">
          <p className="badge text-black dark:text-blue-700">Stock Ready</p>
          <span className="badge text-black dark:text-blue-700">{seller}</span>
        </div>
        <h2 className="product-title text-black dark:text-white" title="Best Product Ever">
          {name}
        </h2>
        <div>
          <span className="text-xl font-bold text-black dark:text-white">${price}</span>
        </div>
        <div className="mt-5 flex gap-2">
          <button className="button-style bg-blue-500 text-white transition-colors duration-300 ease-in-out hover:bg-blue-600">Add to Cart</button>
        </div>
      </div>
    </section>
  );
};
export default CardProduct;
