
import {Metadata, ResolvingMetadata} from "next";
import Image from 'next/image';
export type PropsParams = {
    params: {
        id: number;
    };
    searchParams: any;
};

const getData = async (id: number) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}/`);
    const data = await res.json();
    console.log(data);
    return data;
};
const QuantityControl = ({ quantity }: { quantity: number }) => (
        <div className="flex flex-row items-center">
            <button className="bg-gray-200 py-2 px-3 text-3xl text-violet-600 rounded-lg">-</button>
            <span className='py-4 px-6 rounded-lg'>{quantity}</span>
            <button className="bg-gray-200 py-2 px-3 text-3xl text-violet-600 rounded-lg">+</button>
        </div>
    );
    const AddToCartButton = () => (
        <button className="bg-violet-400 text-white font-semibold py-3 px-6 h-full rounded-lg md:px-16 md:py-3">Add to Cart</button>
    );
export async function generateMetadata(
    { params, searchParams }: PropsParams,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id;

    // fetch data
    const product = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`).then((res) => res.json());

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || [];

    return {
        title: product.title,
        description: product.description,
        openGraph: {
            images: product.image,
        },
    };
}

const PageDetail = async (props:PropsParams) => {
    const data = await getData(props.params.id);

  return (
      <main className="container mx-5 mt-20">
          <section className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
            <div className="flex flex-col gap-6 lg:w-2/4">
                <img src={data.image} alt="" className="w-full aspect-square object-cover rounded-lg"/>
            </div>
              <div className="flex flex-col gap-6 lg:w-2/4">
                <div>
                    <span className="text-violet-600 font-semibold">
                        {data.seller}
                    </span>
                    <h1 className="text-3xl font-bold">{data.name}</h1>
                </div>
                  <p className="text-gray-600">
                      {data.desc}
                  </p>
                  <h6 className="text-2xl font-semibold"> ${data.price}</h6>
                  <div className="flex flex-row items-center gap-16">
                    <QuantityControl quantity={1} />
                    <AddToCartButton />
                  </div>
              </div>
          </section>
      </main>
  );
}
export default PageDetail;