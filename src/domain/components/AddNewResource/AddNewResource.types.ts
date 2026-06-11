export type AddNewResourceProps = {
  newResourceName: string
  setNewResourceName: (newResourceName: string) => void
  newResourceNameError: string
  handleAddResource: (newResourceName: string) => void
}
