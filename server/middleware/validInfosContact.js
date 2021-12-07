module.exports = function(req, res, next) {
  
  const { email, firstname, lastname } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }
  function validName(userName) {
    return /^[a-z]{2,60}$/.test(userName);
  }

  if (req.path === "/") {
    if (![email, firstname, lastname].every(Boolean)) {
      return res.status(401).json("Il manque des informations");
    } else if (!validEmail(email)) {
      return res.status(401).json("L'email n'est pas valide");
    }else if (!validName(firstname)) {
      return res.status(401).json("le prénom doit contenir au moins 2 caractères");
    } else if (!validName(lastname)) {
      return res.status(401).json("le nom de famille doit contenir au moins 2 caractères");
    }
  }

  next();
}