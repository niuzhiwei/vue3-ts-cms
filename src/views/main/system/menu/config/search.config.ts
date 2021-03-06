import { IFormItem, IForm } from '@/base-ui/form'

const formItems: IFormItem[] = [
  {
    field: 'name',
    type: 'input',
    label: '角色名称',
    placeholder: '请输入角色名称'
  },
  {
    field: 'intro',
    type: 'input',
    label: '权限介绍',
    placeholder: '请输入权限介绍'
  },
  {
    field: 'createTime',
    type: 'datepicker',
    label: '创建时间',
    otherOptions: {
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'daterange'
    }
  }
]

const formConfig: IForm = {
  formItems,
  labelWidth: '120px',
  itemLayout: {
    padding: '5px 30px'
  },
  colLayout: { span: 8 }
}

export { formConfig }
