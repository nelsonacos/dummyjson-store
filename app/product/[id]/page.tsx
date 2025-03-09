import { ProductDetails } from '@/components/product';
import { fetchProductById } from '@/services';
import { Product } from '@/types';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage(props: ProductPageProps) {
  const { id } = await props.params;
  const productId = Number(id);
  const product: Product = await fetchProductById(productId);
  if (!product) return notFound();

  return <ProductDetails product={product} />;
}