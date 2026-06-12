import type { ResourceProps } from '../components/Resource/Resource.types'

const setSessionStorageResource = (resource: ResourceProps) => {
  sessionStorage.setItem(resource.resourceId.toString(), JSON.stringify(resource))
}

const getSessionStorageResource = (resourceId: number) => {
  const resource = sessionStorage.getItem(resourceId.toString())
  if (resource) {
    return JSON.parse(resource) as ResourceProps
  }
  return null
}

const removeSessionStorageResource = (resourceId: number) => {
  sessionStorage.removeItem(resourceId.toString())
}

const clearSessionStorage = () => {
  sessionStorage.clear()
}

export {
  setSessionStorageResource,
  getSessionStorageResource,
  removeSessionStorageResource,
  clearSessionStorage,
}
