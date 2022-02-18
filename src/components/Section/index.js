import React from 'react'
import Renderer from '../Renderer'
import { map } from '../../utils/components'

const Section = ({ backgroundColor, content = [] }) => {
  const components = map(content)
  return (
    <section style={{ backgroundColor }} className="section py-12">
      <div className="container mx-auto">
        {components.map((component) => (
          <Renderer key={component.id} {...component} />
        ))}
      </div>
    </section>
  )
}

export default Section
