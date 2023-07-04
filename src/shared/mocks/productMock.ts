import type { IProduct } from '@/shared/interfaces/product'

export const testProduct: IProduct = {
  sku: 2737435,
  name: 'Metra - Turbokits Aftermarket Radio Wire Harness Adapter for Select Honda/Isuzu Vehicles - White',
  salePrice: 16.99,
  image:
    'https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/2737/2737435_ra.jpg',
  startDate: '2007-07-23',
  onSale: false,
  genre: 'Comedy',
  plot: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  shippingLevelsOfService: [
    {
      serviceLevelId: 5,
      serviceLevelName: 'One Day',
      unitShippingPrice: 21.99
    },
    {
      serviceLevelId: 3,
      serviceLevelName: 'Two Day',
      unitShippingPrice: 12.99
    },
    {
      serviceLevelId: 15,
      serviceLevelName: 'Standard',
      unitShippingPrice: 4.99
    }
  ]
}
