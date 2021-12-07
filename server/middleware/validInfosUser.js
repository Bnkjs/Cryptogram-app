module.exports = function(req, res, next) {
  const { email, password, firstname, lastname, amount, cryptoName  } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }
  function validPswd(userPswd) {
    return /^[a-z]{5,60}$/.test(userPswd);
  }
  function validName(userName) {
    return /^[a-z]{2,60}$/.test(userName);
  }

  function validCrypto(cryptoAmount){
    return /^[0-9]{1,15}$/.test(cryptoAmount);
  }

  if (req.path === "/") {
    if (![email, password].every(Boolean)) {
      return res.json("Il manque des informations");
    } else if (!validEmail(email)) {
      return res.status(401).json("L'email n'est pas valide");
    } else if (!validPswd(password)) {
      return res.json("Le mots de pass est trop court/long");
    }
  } if (req.path === "/login") {
      if (![email, password].every(Boolean)) {
        return res.status(401).json("Il manque des informations");
      } else if (!validEmail(email)) {
        return res.status(401).json("L'email n'est pas valide");
      } else if (!validPswd(password)) {
        return res.status(401).json("Le mots de pass est trop court/long");
      }
  } else if (req.path === "/order") {
    if (![amount, cryptoName].every(Boolean)) {
      return res.status(401).json("Il manque des informations");
    } else if (!validCrypto(amount)) {
      return res.status(401).json("Le montant est trop petit/grand");
    }
  }else if (req.path === "/transfert") {
    if (![amount, cryptoName].every(Boolean)) {
      return res.status(401).json("Il manque des informations");
    } else if (!validCrypto(amount)) {
      return res.status(401).json("Le montant est trop petit/grand");
    }
  }

  next();
};