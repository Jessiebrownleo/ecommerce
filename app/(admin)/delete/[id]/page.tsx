
import DeleteComponentLayout from "@/components/deletes/DeleteComponentLayout";


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

const UpdatePage = async (props:PropsParams) =>{
    let data = await getData(props.params.id);
    console.log(data)
    return(
        <main>
            <DeleteComponentLayout category={data.category} price={data.price} desc={data.desc} name={data.name} quantity={data.quantity} image={data.image} id={data.id} seller={data.seller} />
        </main>
    )
}

export default UpdatePage;