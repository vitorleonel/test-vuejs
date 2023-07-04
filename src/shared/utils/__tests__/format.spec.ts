import { describe, expect, it } from 'vitest'

import { formatPrice } from '../format'

describe('format', () => {
  describe('formatPrice', () => {
    it('should format the price correctly', () => {
      expect(formatPrice(10)).toBe('$10.00')
    })
  })
})
