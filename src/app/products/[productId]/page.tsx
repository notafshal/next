export default function productDetails({
  params,
}: {
  params: { productId: number };
}) {
  return <>Details about product {params.productId}</>;
}
