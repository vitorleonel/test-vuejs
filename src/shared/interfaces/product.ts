type IProductShippingLevelsOfService = {
  serviceLevelId: number
  serviceLevelName: string
  unitShippingPrice: number
}

export type IProduct = {
  genre: string
  image: string | null
  name: string
  onSale: boolean
  plot: string
  salePrice: number
  shippingLevelsOfService: IProductShippingLevelsOfService[]
  sku: number
  startDate: string
}
