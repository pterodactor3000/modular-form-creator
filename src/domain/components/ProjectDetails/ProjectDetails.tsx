import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { Button, CheckboxGroup, Input } from '../../../design-system'
import { ActionButtonsContainer } from '../../pages/Layout'
import { BasicItem } from '../../pages/Layout/Layout.styles'
import type { ProjectDetailsProps } from './ProjectDetails.types'
import { useResources } from '../../contexts/ResourcesContext'

export const ProjectDetails = (props: ProjectDetailsProps) => {
  const { resourceId } = useParams<{ resourceId: string }>()
  const { editProjectDetails, error } = useResources()

  const { projectName, budget, category, options } = props
  const [projectNameValue, setProjectNameValue] = useState(projectName)
  const [budgetValue, setBudgetValue] = useState(budget)
  const [categoryValue, setCategoryValue] = useState(category)
  const [optionsValue, setOptionsValue] = useState(options)

  const checkboxOptions = [
    { value: 'FE devs', label: 'FE devs' },
    { value: 'BE devs', label: 'BE devs' },
    { value: 'Designer', label: 'Designer' },
    { value: 'Data Eng', label: 'Data Eng' },
    { value: 'Product Owner', label: 'Product Owner' },
  ]

  const [dirty, setDirty] = useState(false)

  return (
    <>
      <BasicItem>
        <b>Project Name:</b>
        <Input
          value={projectName}
          onChange={(e) => {
            setProjectNameValue(e.target.value)
            setDirty(true)
          }}
          error={error?.indexOf('projectName') !== -1 ? error : undefined}
        />
      </BasicItem>
      <BasicItem>
        <b>Budget:</b>
        <Input
          value={budget}
          onChange={(e) => {
            setBudgetValue(e.target.value)
            setDirty(true)
          }}
          error={error?.indexOf('budget') !== -1 ? error : undefined}
        />
      </BasicItem>
      <BasicItem>
        <b>Category:</b>
        <Input
          value={categoryValue}
          onChange={(e) => {
            setCategoryValue(e.target.value)
            setDirty(true)
          }}
          error={error?.indexOf('category') !== -1 ? error : undefined}
        />
      </BasicItem>
      <BasicItem>
        <b>Options:</b>
        <CheckboxGroup
          label=""
          options={checkboxOptions.map((option) => option.value)}
          value={optionsValue}
          onChange={(next) => {
            setOptionsValue(next)
            setDirty(true)
          }}
          error={error?.indexOf('options') !== -1 ? error : undefined}
        />
      </BasicItem>
      <ActionButtonsContainer>
        <Link to={`/resources/${resourceId}/details`}>
          <Button variant="ghost">Cancel</Button>
        </Link>
        <Button
          disabled={!dirty}
          onClick={() =>
            editProjectDetails(parseInt(resourceId ?? ''), {
              projectName: projectNameValue,
              budget: budgetValue,
              category: categoryValue,
              options: optionsValue,
            })
          }
        >
          Save
        </Button>
      </ActionButtonsContainer>
    </>
  )
}
