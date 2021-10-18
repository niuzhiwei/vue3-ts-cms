import { useStore } from '@/store'
export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  let verifyPermission = ''

  switch (pageName) {
    case 'User':
      verifyPermission = `system:users:${handleName}`
      break
    case 'Role':
      verifyPermission = `system:role:${handleName}`
      break
    case 'Goods':
      verifyPermission = `system:goods:${handleName}`
      break
    case 'Menu':
      verifyPermission = `system:menu:${handleName}`
      break
  }
  return !!permissions.find((item) => item === verifyPermission)
}
