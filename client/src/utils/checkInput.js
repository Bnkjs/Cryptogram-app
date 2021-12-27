
export const checkContentInput = (content) => {
  if(![content].every(Boolean)){
    return undefined
  }else{
    return content
  }
}
