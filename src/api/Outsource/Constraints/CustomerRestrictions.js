import request from '../../../utils/request'
// 获取表格数据 分页获取
export function GetTableData(data) {
  return request({
    url: '/OutsourcingPriority/customerrestrictions/get_table_data/',
    method: 'post',
    data
  })
}
// 添加数据
export function AddData(data) {
  return request({
    url: '/OutsourcingPriority/customerrestrictions/add_data/',
    method: 'post',
    data
  })
}
// 修改数据
export function ModifyData(data) {
  return request({
    url: '/OutsourcingPriority/customerrestrictions/modify_data/',
    method: 'post',
    data
  })
}
// 删除勾选的数据
export function DeleteData(data) {
  return request({
    url: '/OutsourcingPriority/customerrestrictions/delete_data/',
    method: 'post',
    data
  })
}
// 删除一条数据
export function HandleDelete(data) {
  return request({
    url: '/OutsourcingPriority/customerrestrictions/handle_delete/',
    method: 'post',
    data
  })
}
// 确认导入数据
export function ImportData(data) {
  return request({
    url: '/OutsourcingPriority/customerrestrictions/import_data/',
    method: 'post',
    data
  })
}
// 确认导出数据
export function ExportData() {
  return request({
    url: '/OutsourcingPriority/customerrestrictions/export_data/',
    method: 'get'
  })
}
// 获取列名
export function GetBaseData() {
  return request({
    url: '/OutsourcingPriority/customerrestrictions/get_base_data/',
    method: 'get'
  })
}

