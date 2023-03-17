import request from '../../../utils/request'
// 获取表格数据 分页获取
export function GetTableData(data) {
  return request({
    url: '/OutsourcingPriority/oldorder/get_table_data/',
    method: 'post',
    data
  })
}
// 添加数据
export function AddData(data) {
  return request({
    url: '/OutsourcingPriority/oldorder/add_data/',
    method: 'post',
    data
  })
}
// 修改数据
export function ModifyData(data) {
  return request({
    url: '/OutsourcingPriority/oldorder/modify_data/',
    method: 'post',
    data
  })
}
// 删除勾选的数据
export function DeleteData(data) {
  return request({
    url: '/OutsourcingPriority/oldorder/delete_data/',
    method: 'post',
    data
  })
}
// 删除一条数据
export function HandleDelete(data) {
  return request({
    url: '/OutsourcingPriority/oldorder/handle_delete/',
    method: 'post',
    data
  })
}
// 确认导入数据
export function ImportData(data) {
  return request({
    url: '/OutsourcingPriority/oldorder/import_data/',
    method: 'post',
    data
  })
}
// 确认导出数据
export function ExportData() {
  return request({
    url: '/OutsourcingPriority/oldorder/export_data/',
    method: 'get'
  })
}
// 清空所有数据
export function DeleteAllData() {
  return request({
    url: '/OutsourcingPriority/oldorder/clear_all/',
    method: 'get'
  })
}
