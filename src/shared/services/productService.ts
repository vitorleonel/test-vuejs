import HTTPService from '@/shared/services/httpService'
import type { IProduct, IAPIGetAllProduct } from '@/shared/interfaces/product'

const getAll = async (params: Record<string, unknown>): Promise<IAPIGetAllProduct[]> => {
  const {
    data: { products }
  } = await HTTPService.get<{
    products: IAPIGetAllProduct[]
  }>('/products', {
    params
  })

  return products
}

const getBySku = async (sku: number): Promise<IProduct> => {
  const { data: product } = await HTTPService.get<IProduct>(`/products/${sku}.json`)

  return product
}

export default {
  getAll,
  getBySku
}
