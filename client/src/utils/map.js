export const getMappedContact = (arrContact) => {
  const arrToMap = arrContact? arrContact.map( el => {
    const options = {
      value: el.contact_id, 
      label: el.first_name + ' ' + el.last_name }
    return options
  }) : null
  return arrToMap
}

export const getMappedCrypto = (arrCrypto) => {
  const arrToMap = arrCrypto? arrCrypto.map( el => {
    return {
      value: el.crypto_name,
      label: el.crypto_name + ' ' + el.crypto_id_name
    }
  }) : null
  return arrToMap
}