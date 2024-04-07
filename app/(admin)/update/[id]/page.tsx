'use client';
import UpdatePageLayout from "@/components/updates/UpdatePageLayout";

type ProductParams= {
    params: {
        id: number;
    };
    searchParams: any;
};

const fetchProductData = async (productId: number) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${productId}/`);
    const productData = await response.json();
    return productData;
};

const ProductUpdatePage = async (props:ProductParams) =>{
    let productDetails = await fetchProductData(props.params.id);
    return(
        <main>
            <UpdatePageLayout fileProduct={null} category={productDetails.category} price={productDetails.price} desc={productDetails.desc} name={productDetails.name} quantity={productDetails.quantity} image={productDetails.image} id={productDetails.id} seller={productDetails.seller} />
        </main>
    )
}

export default ProductUpdatePage;