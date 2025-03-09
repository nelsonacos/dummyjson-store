'use client';
import { useProducts } from '@/components/product';

export function ProductStock({ productId }: { productId: number }) {
  const { stockQuery } = useProducts({ id: productId, fetchStock: true });

  if (stockQuery.isLoading) return <p>Cargando stock...</p>;

  return (
    <span className={`badge ${stockQuery.data > 0 ? 'bg-success' : 'bg-danger'}`}>
      {stockQuery && stockQuery.data > 0 ? `En Stock (${stockQuery.data} disponibles)` : 'Agotado'}
    </span>
  );
}
