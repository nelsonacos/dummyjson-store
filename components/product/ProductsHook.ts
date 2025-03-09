import { useQuery } from '@tanstack/react-query';
import {
  fetchProducts,
  fetchProductById,
  fetchProductReviews,
  fetchProductStock,
} from '@/services';
import { Product, Review } from '@/types';

interface UseProductsOptions {
  filters?: Record<string, string>;
  id?: number | null;
  fetchReviews?: boolean;
  fetchStock?: boolean;
}

export const useProducts = ({
  filters = {},
  id = null,
  fetchReviews = false,
  fetchStock = false,
}: UseProductsOptions) => {
  const productsQuery = useQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
    staleTime: 1000 * 60 * 5,
  });

  const productQuery = useQuery<Product | null>({
    queryKey: ['product', id],
    queryFn: () => (id ? fetchProductById(id) : Promise.resolve(null)),
    enabled: !!id,
  });

  const reviewsQuery = useQuery<Review[]>({
    queryKey: ['reviews', id],
    queryFn: async () => {
      if (!id || !fetchReviews) return [];
      const data = await fetchProductReviews(id);
      return data.reviews;
    },
    enabled: !!id && fetchReviews,
  });

  const stockQuery = useQuery({
    queryKey: ['stock', id],
    queryFn: () => (id && fetchStock ? fetchProductStock(id) : Promise.resolve(null)),
    enabled: !!id && fetchStock,
  });

  return { productsQuery, productQuery, reviewsQuery, stockQuery };
};