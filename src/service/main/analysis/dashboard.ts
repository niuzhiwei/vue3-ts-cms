import hyRequest from '../../index'
import { IDataType } from './types'

enum DashboardApi {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return hyRequest.get<IDataType>({
    url: DashboardApi.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return hyRequest.get<IDataType>({
    url: DashboardApi.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return hyRequest.get<IDataType>({
    url: DashboardApi.categoryGoodsFavor
  })
}

export function getAddressGoodsSale() {
  return hyRequest.get<IDataType>({
    url: DashboardApi.addressGoodsSale
  })
}
