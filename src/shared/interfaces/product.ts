type IProductShippingLevelsOfService = {
  serviceLevelId: number
  serviceLevelName: string
  unitShippingPrice: number
}

export type IProduct = {
  genre: string | null
  image: string | null
  name: string
  onSale: boolean
  plot: string | null
  salePrice: number
  shippingLevelsOfService: IProductShippingLevelsOfService[]
  sku: number
  startDate: string
}

export type IAPIGetAllProduct = Pick<
  IProduct,
  'sku' | 'name' | 'salePrice' | 'image' | 'startDate' | 'onSale'
>
