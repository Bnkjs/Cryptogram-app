module.exports = function (req,res,next) {
  const { amount, crypto_name, crypto_id_name, description} = req.body

  function validCrypto(cryptoAmount){
    return /^[0-9-.\S]{1,50}$/.test(cryptoAmount);
  }
  function validDescription(transfertDesc) {
    return /^[a-zA-Z0-9\-\s\!\?\.\,\()]{5,250}$/.test(transfertDesc);
  }
  function validCryptoName (crypto_name){
    return /^[a-zA-Z\S\-]{3,50}$/.test(crypto_name)
  }
  function validCryptoIDName (crypto_id_name){
    return /^[A-Z\S]{3,30}$/.test(crypto_id_name)
  }

   if (req.path === "/buy_crypto") {
    if (![amount, crypto_name].every(Boolean)) {
      return res.status(401).json("Il manque des informations");
    } else if (!validCrypto(amount)) {
      return res.status(401).json("Le montant est trop petit/grand");
    }else if (!validCryptoName(crypto_name)) {
      return res.status(401).json("les informations sont érronées (caractères interdits / nom trop court/long");
    }
    
  }
  
  if (req.path === "/transfert_crypto") {
    if (![amount, crypto_name, description].every(Boolean)) {
      return res.status(401).json("Il manque des informations");
    } else if (!validCrypto(amount)) {
      return res.status(401).json("Le montant est trop petit/grand");
    }else if (!validDescription(description)) {
      return res.status(401).json("La description est trop court/long ou comporte un/des caractère(s) non-autorisé(s)");
    }else if (!validCryptoName(crypto_name)) {
      return res.status(401).json("les informations sont érronées (caractères interdits / nom trop court/long");
    }
  }
  next();
};