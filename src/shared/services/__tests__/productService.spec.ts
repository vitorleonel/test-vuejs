import { describe, expect, it, vi } from 'vitest'

import HTTPService from '@/shared/services/httpService'
import ProductService from '@/shared/services/productService'

import { testProduct } from '@/shared/mocks/productMock'
import { AxiosError } from 'axios'

describe('ProductService', () => {
  describe('getAll', () => {
    const requestParams = {
      page: 150,
      pageSize: 100,
      show: 'sku,name,salePrice,image,startDate,onSale'
    }

    it('should get all products correctly', async () => {
      const spy = vi
        .spyOn(HTTPService, 'get')
        .mockImplementation(() => Promise.resolve({ data: { products: [testProduct] } }))

      const products = await ProductService.getAll(requestParams)

      expect(products).toStrictEqual([testProduct])

      expect(spy).toHaveBeenCalledWith('/products', {
        params: requestParams
      })
    })

    it('should throw an error when the API has an error', () => {
      const spy = vi
        .spyOn(HTTPService, 'get')
        .mockImplementation(() =>
          Promise.reject(new AxiosError('Request failed with status code 403'))
        )

      expect(ProductService.getAll(requestParams)).rejects.toBeTruthy()

      expect(spy).toHaveBeenCalledWith('/products', {
        params: requestParams
      })
    })
  })

  describe('getBySku', () => {
    it('should get a product by sku correctly', async () => {
      const spy = vi
        .spyOn(HTTPService, 'get')
        .mockImplementation(() => Promise.resolve({ data: testProduct }))

      const product = await ProductService.getBySku(testProduct.sku)

      expect(product).toStrictEqual(testProduct)
      expect(spy).toHaveBeenCalledWith(`/products/${testProduct.sku}.json`)
    })

    it('should throw an error when the API has an error', () => {
      const spy = vi
        .spyOn(HTTPService, 'get')
        .mockImplementation(() =>
          Promise.reject(new AxiosError('Request failed with status code 404'))
        )

      expect(ProductService.getBySku(testProduct.sku)).rejects.toBeTruthy()
      expect(spy).toHaveBeenCalledWith(`/products/${testProduct.sku}.json`)
    })
  })
})
