export type IProductShipping = {
  ground: number
  nextDay: number
  secondDay: number
  vendorDelivery: string
}

export type IProduct = {
  genre: string
  image: string | null
  name: string
  onSale: boolean
  plot: string
  salePrice: number
  shipping: IProductShipping[]
  sku: number
  startDate: string
}

export type IProductCard = Omit<IProduct, 'genre' | 'plot' | 'shipping'>
