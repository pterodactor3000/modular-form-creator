import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

import { Button, CheckboxGroup, Input, Select } from '../../../design-system'
import { ActionButtonsContainer } from '../../pages/Layout'
import { BasicItem } from '../../pages/Layout/Layout.styles'
import type { ProjectDetailsProps } from './ProjectDetails.types'
import { useResources } from '../../contexts/ResourcesContext'

export const ProjectDetails = (props: ProjectDetailsProps) => {
  const navigate = useNavigate()
  const { resourceId } = useParams<{ resourceId: string }>()
  const { editProjectDetails, error } = useResources()

  const { projectName, budget, category, options } = props

  const [projectNameValue, setProjectNameValue] = useState(projectName)
  const [budgetValue, setBudgetValue] = useState(budget)
  const [categoryValue, setCategoryValue] = useState(category ? category : 'internal')
  const [optionsValue, setOptionsValue] = useState(options)

  const [dirty, setDirty] = useState(false)

  const checkboxOptions = [
    { value: 'FE devs', label: 'FE devs' },
    { value: 'BE devs', label: 'BE devs' },
    { value: 'Designer', label: 'Designer' },
    { value: 'Data Eng', label: 'Data Eng' },
    { value: 'Product Owner', label: 'Product Owner' },
  ]

  const categoryOptions = [
    { value: 'internal', label: 'Internal' },
    { value: 'external', label: 'External' },
    { value: 'vendor', label: 'Vendor' },
  ]

  const handleSave = () => {
    editProjectDetails(parseInt(resourceId ?? ''), {
      projectName: projectNameValue,
      budget: budgetValue,
      category: categoryValue,
      options: optionsValue,
    })

    if (!error) {
      setDirty(false)
      navigate(resourceId ? `/resources/${resourceId}/details` : '/resources')
    }
  }

  return (
    <>
      <BasicItem>
        <b>Project Name:</b>
        <Input
          placeholder="Enter project name"
          value={projectNameValue}
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
          placeholder="Enter budget"
          value={budgetValue}
          onChange={(e) => {
            setBudgetValue(e.target.value)
            setDirty(true)
          }}
          error={error?.indexOf('budget') !== -1 ? error : undefined}
        />
      </BasicItem>
      <BasicItem>
        <b>Category:</b>
        <Select
          options={categoryOptions}
          value={
            categoryOptions.find((option) => option.value === categoryValue)?.value ??
            categoryOptions[0].value
          }
          helperText="Select category"
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
          options={checkboxOptions.map((option) => option.label)}
          value={checkboxOptions
            .filter((option) => optionsValue.includes(option.value))
            .map((option) => option.value)}
          onChange={(next) => {
            setOptionsValue(next)
            setDirty(true)
          }}
          error={error?.indexOf('options') !== -1 ? error : undefined}
        />
      </BasicItem>
      <ActionButtonsContainer>
        <Link to={resourceId ? `/resources/${resourceId}/details` : '/resources'}>
          <Button variant="ghost">Cancel</Button>
        </Link>
        <Button disabled={!dirty} onClick={handleSave}>
          Save
        </Button>
      </ActionButtonsContainer>
    </>
  )
}
