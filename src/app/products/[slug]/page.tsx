async function ProductDetails({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const { slug } = await params;
    console.log(slug);
    return (
      <h2 className="text-2xl text-center text-red-500">
        Product Details Page - {slug}
      </h2>
    );
  }
  
export default ProductDetails;
