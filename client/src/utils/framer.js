const animationFm = (opacity, y, x) => {
  const initial = {
    visible: { opacity: opacity, y:y, x:x},
    hidden: { opacity: opacity, y:y, x:x},
  }
  return initial
}
export default animationFm