import HTTPService from '@/shared/services/httpService'
import type { IProduct } from '@/shared/interfaces/product'

type IGetAllProduct = Pick<
  IProduct,
  'sku' | 'name' | 'salePrice' | 'image' | 'startDate' | 'onSale'
>

const getAll = async (params: Record<string, unknown>): Promise<IGetAllProduct[]> => {
  const {
    data: { products }
  } = await HTTPService.get<{
    products: IGetAllProduct[]
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
