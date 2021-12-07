module.exports = function (req,res,next) {
  const { amount, crypto_name, description} = req.body

  function validCrypto(cryptoAmount){
    return /^[0-9-.]{1,15}$/.test(cryptoAmount);
  }
  function validDescription(transfertDesc) {
    return /^\S.{5,250}$/.test(transfertDesc);
  }
   if (req.path === "/") {
    if (![amount, crypto_name, description].every(Boolean)) {
      return res.status(401).json("Il manque des informations");
    } else if (!validCrypto(amount)) {
      return res.status(401).json("Le montant est trop petit/grand");
    }else if (!validDescription(description)) {
      return res.status(401).json("La description doit contenir min 5 à 300 max caractères");
    }
  }
  next();
};