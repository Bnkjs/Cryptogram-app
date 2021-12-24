
export const checkInputEmail = (email) => {
  if(![email].every(Boolean)){
    return undefined
  }else{
    return email
  }
}
export const checkInputFirstName = (firstname) => {
  if(![firstname].every(Boolean)){
    return undefined
  }else{
    return firstname
  }
}
export const checkInputLastName = (lastname) => {
  if(![lastname].every(Boolean)){
    return undefined
  }else{
    return lastname
  }
}