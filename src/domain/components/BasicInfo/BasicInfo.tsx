import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import type { BasicInfoProps } from './BasicInfo.types'
import { Button, Input, Select } from '../../../design-system'
import { ActionButtonsContainer, BasicItem } from '../../pages/Layout/Layout.styles'
import { useResources } from '../../contexts/ResourcesContext'

export const BasicInfo = (props: BasicInfoProps) => {
  const navigate = useNavigate()
  const { editBasicInfo, error, activeResourceId } = useResources()

  const { resourceName, owner, email, description, priority } = props

  const [ownerValue, setOwnerValue] = useState(owner)
  const [emailValue, setEmailValue] = useState(email)
  const [priorityValue, setPriorityValue] = useState(priority)
  const [descriptionValue, setDescriptionValue] = useState(description)

  const [dirty, setDirty] = useState(false)

  const priorityOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ]

  const handleSave = () => {
    editBasicInfo(activeResourceId ?? 0, {
      resourceId: activeResourceId ?? 0,
      resourceName,
      owner: ownerValue,
      email: emailValue,
      priority: priorityValue,
      description: descriptionValue,
    })

    if (!error) {
      setDirty(false)
      navigate(`/resources/${activeResourceId}/details`)
    }
  }

  return (
    <>
      <BasicItem>
        <b>Owner:</b>
        <Input
          placeholder="Enter owner"
          value={ownerValue}
          onChange={(e) => {
            setOwnerValue(e.target.value)
            setDirty(true)
          }}
          error={error?.indexOf('owner') !== -1 ? error : undefined}
        />
      </BasicItem>
      <BasicItem>
        <b>Email:</b>
        <Input
          placeholder="Enter email"
          value={emailValue}
          onChange={(e) => {
            setEmailValue(e.target.value)
            setDirty(true)
          }}
          error={error?.indexOf('email') !== -1 ? error : undefined}
        />
      </BasicItem>
      <BasicItem>
        <b>Priority:</b>
        <Select
          options={priorityOptions}
          value={
            priorityOptions.find((option) => option.value === priorityValue)?.value ??
            priorityOptions[0].value
          }
          helperText="Select priority"
          onChange={(e) => {
            setPriorityValue(e.target.value)
            setDirty(true)
          }}
          error={error?.indexOf('priority') !== -1 ? error : undefined}
        />
      </BasicItem>
      <BasicItem>
        <b>Description:</b>
        <Input
          multiline
          rows={2}
          type="textarea"
          placeholder="Enter description"
          value={descriptionValue}
          onChange={(e) => {
            setDescriptionValue(e.target.value)
            setDirty(true)
          }}
          error={error?.indexOf('description') !== -1 ? error : undefined}
        />
      </BasicItem>
      <ActionButtonsContainer>
        <Link to={`/resources/${activeResourceId}/details`}>
          <Button variant="ghost">Cancel</Button>
        </Link>
        <Button disabled={!dirty} onClick={handleSave}>
          Save
        </Button>
      </ActionButtonsContainer>
    </>
  )
}
