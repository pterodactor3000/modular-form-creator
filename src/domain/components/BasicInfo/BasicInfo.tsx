import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import type { BasicInfoProps } from './BasicInfo.types'
import { Button, Input, Select } from '../../../design-system'
import { ActionButtonsContainer, BasicItem } from '../../pages/Layout/Layout.styles'
import { useResources } from '../../contexts/ResourcesContext'

export const BasicInfo = (props: BasicInfoProps) => {
  const { resourceId } = useParams<{ resourceId: string }>()
  const { editBasicInfo, error } = useResources()
  const { resourceName, owner, email, description, priority } = props

  const [ownerValue, setOwnerValue] = useState(owner)
  const [emailValue, setEmailValue] = useState(email)
  const [priorityValue, setPriorityValue] = useState(priority)
  const [descriptionValue, setDescriptionValue] = useState(description)

  const [dirty, setDirty] = useState(false)

  return (
    <>
      <BasicItem>
        <b>Owner:</b>
        <Input
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
          options={[
            { value: 'low', label: 'Low' },
            { value: 'medium', label: 'Medium' },
            { value: 'high', label: 'High' },
          ]}
          value={priorityValue}
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
          value={descriptionValue}
          onChange={(e) => {
            setDescriptionValue(e.target.value)
            setDirty(true)
          }}
          error={error?.indexOf('description') !== -1 ? error : undefined}
        />
      </BasicItem>
      <ActionButtonsContainer>
        <Link to={`/resources/${resourceId}/details`}>
          <Button variant="ghost">Cancel</Button>
        </Link>
        <Button
          disabled={!dirty}
          onClick={() => {
            editBasicInfo(parseInt(resourceId ?? ''), {
              resourceId: parseInt(resourceId ?? ''),
              resourceName,
              owner: ownerValue,
              email: emailValue,
              priority: priorityValue,
              description: descriptionValue,
            })
          }}
        >
          Save
        </Button>
      </ActionButtonsContainer>
    </>
  )
}
