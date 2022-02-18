export const map = (content) => {
  if (!content) return []
  return content.map((component) => {
    const { sys, ...rest } = component
    return {
      name: component.sys.contentType.sys.id,
      ...rest,
    }
  })
}
