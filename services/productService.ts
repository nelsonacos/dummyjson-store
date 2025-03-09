const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchData = async (
  endpoint: string,
  queryParams?: Record<string, string | number>,
  options?: RequestInit,
) => {
  const url = new URL(endpoint, BASE_URL);

  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]: [string, string | number] ) => {
      url.searchParams.append(key, String(value));
    });
  }

  const response = await fetch(url.toString(), { ...options });

  if (!response.ok) throw new Error(`Http Error! Status: ${response.status}`);

  return response.json();
};

export const fetchProducts = async (filters?: Record<string, string | number>) => {
  return fetchData('/products', filters);
};

export const fetchProductById = async (id: number, fields?: string[]) => {
  const queryParams = fields ? { select: fields.join(',') } : undefined;
  return fetchData(`/products/${id}`, queryParams);
};

export const fetchProductReviews = async (id: number) => {
  return fetchData(`/products/${id}?select=reviews`);
};

export const fetchProductStock = async (id: number) => {
  const response = await fetchData(`/products/${id}?select=stock`);
  return response.stock;
};