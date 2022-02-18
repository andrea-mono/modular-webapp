import React from 'react'
import Card from './Card/Card'
import Section from './Section/Section'

const components = {
  section: Section,
  card: Card,
}

const Renderer = (JSONSchema) => {
  const { name: componentName, ...props } = JSONSchema
  if (typeof components[componentName] === 'undefined') return null

  return React.createElement(components[componentName], props, null)
}

export default Renderer
