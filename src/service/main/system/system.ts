import hyRequest from '../../index'
import { IDataType } from './types'

export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({
    url
  })
}
export function createPageData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
export function editPageData(url: string, queryInfo: any) {
  return hyRequest.patch<IDataType>({
    url,
    data: queryInfo
  })
}
