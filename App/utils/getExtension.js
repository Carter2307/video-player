export default (element) => {
  let ext = null
  const split = element.split(".")
  ext = split[split.length - 1]
  return ext
}
