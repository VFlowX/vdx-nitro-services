export default defineEventHandler(async (event) => {
  const dirTree = await getDirTree()
  return dirTree
})
