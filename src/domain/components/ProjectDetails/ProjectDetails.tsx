import type { ProjectDetailsProps } from './ProjectDetails.types'

export const ProjectDetails = (props: ProjectDetailsProps) => {
  const { projectName, budget, category, options } = props
  return (
    <div>
      <h3>{projectName}</h3>
      <p>{budget}</p>
      <p>{category}</p>
      <ul>
        {options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    </div>
  )
}