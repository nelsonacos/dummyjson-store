import { Product } from '@/types';
import Image from 'next/image';

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <Image
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
          width={250}
          height={250}
          objectFit="cover"
          priority
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary">Ver más</button>
        </div>
      </div>
    </div>
  );
};