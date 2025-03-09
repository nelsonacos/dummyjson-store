'use client';
import { useProducts } from '@/components/product';
import { Review } from '@/types';

export function ProductReviews({ productId }: { productId: number }) {
  const { reviewsQuery } = useProducts({ id: productId, fetchReviews: true });
  const { isLoading, isError, data: reviews } = reviewsQuery;

  if (isLoading) return <p>Cargando reseñas...</p>;
  if (isError) return <p>Error al cargar reseñas.</p>;

  return (
    <div className="mt-5">
      <h3>Reseñas</h3>
      {reviews && reviews.length === 0 ? (
        <p className="text-muted">No hay reseñas aún.</p>
      ) : (
        reviews &&
        reviews.map((review: Review, index: number) => (
          <div key={index} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{review.reviewerName}</h5>
              <p className="card-text">{review.comment}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
