'use client';
import Image from 'next/image'
import { ProductStock, ProductReviews } from '@/components/product';
import { Product } from '@/types';

export function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Image width={450} height={450} src={product.thumbnail} alt={product.title} className="img-fluid rounded shadow" priority />
          <div className="d-flex gap-2 mt-3 overflow-auto">
            {product.images.map((image: string, index: number) => (
              <Image
                key={index}
                src={image}
                alt={`${product.title} - ${index}`}
                className="img-thumbnail"
                width={80}
                height={80}
                style={{ objectFit: 'cover' }}
                priority
              />
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="fw-bold">{product.title}</h1>
          <p className="text-muted">{product.category}</p>
          <p>{product.description}</p>
          <div className="d-flex align-items-center gap-2">
            <span className="fs-3 fw-bold text-success">${product.price.toFixed(2)}</span>
            {product.discountPercentage > 0 && (
              <span className="badge bg-danger">-{product.discountPercentage.toFixed(1)}% OFF</span>
            )}
          </div>
          <div className="mt-2">
            <span className="text-warning fs-5">⭐ {product.rating}</span>
            {product.brand && (
              <p className="text-muted mt-1">
                Marca: <strong>{product.brand}</strong>
              </p>
            )}
          </div>
          <ProductStock productId={product.id} />
          <button className="btn btn-primary btn-lg mt-3">Agregar al Carrito 🛒</button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <h2 className="fw-semibold">Detalles del Producto</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>SKU:</strong> {product.sku}
            </li>
            <li className="list-group-item">
              <strong>Peso:</strong> {product.weight} kg
            </li>
            <li className="list-group-item">
              <strong>Dimensiones:</strong> {product.dimensions.width} x {product.dimensions.height}{' '}
              x {product.dimensions.depth} cm
            </li>
            <li className="list-group-item">
              <strong>Disponibilidad:</strong> {product.availabilityStatus}
            </li>
            <li className="list-group-item">
              <strong>Garantía:</strong> {product.warrantyInformation}
            </li>
            <li className="list-group-item">
              <strong>Política de devoluciones:</strong> {product.returnPolicy}
            </li>
            <li className="list-group-item">
              <strong>Información de envío:</strong> {product.shippingInformation}
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <ProductReviews productId={product.id} />
        </div>
      </div>
    </div>
  );
}