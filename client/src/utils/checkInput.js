
export const checkMesageInput = (message) => {
  if (!message.every(Boolean)){
    console.log('Error');
  } else{
    console.log('salut');
  }
}
export const checkContentInput = (content) => {
  if(![content].every(Boolean)){
    return undefined
  }else{
    return content
  }
}