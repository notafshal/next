import { notFound } from "next/navigation";

export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <>
      Review {params.reviewId} for product {params.productId}
    </>
  );
}
