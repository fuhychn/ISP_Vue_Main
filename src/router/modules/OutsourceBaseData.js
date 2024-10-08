// 外包相关
import Layout from '@/layout'
// 外包基本数据
const OutsourceBaseDataRouter = {
  path: '/outsourcebasedata',
  component: Layout,
  redirect: '/outsourcebasedata/customer',
  alwaysShow: true,
  name: 'OutsourceBaseData',
  meta: {
    title: '外包基本数据',
    icon: 'el-icon-s-data',
    roles: ['Customer', 'FactoryType', 'ProcedureData']
  },
  children: [
    {
      path: 'customer',
      component: () => import('@/views/Outsource/BaseData/Customer'),
      name: 'Customer',
      meta: {
        title: '客户表',
        roles: ['Customer']
      }
    },
    {
      path: 'factorytype',
      component: () => import('@/views/Outsource/BaseData/FactoryType'),
      name: 'FactoryType',
      meta: {
        title: '厂别表',
        roles: ['FactoryType']
      }
    },
    {
      path: 'proceduredata',
      component: () => import('@/views/Outsource/BaseData/ProcedureData'),
      name: 'ProcedureData',
      meta: {
        title: '工序表',
        roles: ['ProcedureData']
      }
    }
  ]
}

export default OutsourceBaseDataRouter
