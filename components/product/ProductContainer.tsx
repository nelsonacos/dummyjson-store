import { ProductCard } from '@/components/product';
import { fetchProducts } from '@/services';
import { ApiResutls, Product } from '@/types';

export async function ProductContainer() {
  const data: ApiResutls = await fetchProducts();

  return (
    <>
      {data &&
        data.products.map((product: Product) => <ProductCard key={product.id} product={product} />)}
    </>
  );
}