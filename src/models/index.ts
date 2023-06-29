/**
 * 用于描述商品的品类
 */
export interface Category {
  id: number
  name: string
}

/**
 * 用于描述商品信息
 */
export interface Commodity {
  id: number
  name: string
  image: string
  price: number
  description: string
}
