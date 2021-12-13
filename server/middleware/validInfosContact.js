module.exports = function(req, res, next) {
  
  const { email, firstname, lastname } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }
  function validName(name) {
    return /^[a-z\-\s]{3,50}$/.test(name);
  }

  if (req.path === "/contact" && !req.method === "DELETE") {
    if (![email, firstname, lastname].every(Boolean)) {
      return res.status(401).json("Il manque des informations");
    } else if (!validEmail(email)) {
      return res.status(401).json("L'email n'est pas valide");
    }else if (!validName(firstname)) {
      return res.status(401).json("le prénom est trop court/long ou comporte un/des caractère(s) non-autorisé(s)");
    } else if (!validName(lastname)) {
      return res.status(401).json("le nom de famille est trop court/long ou comporte un caractère(s) non-autorisé(s)");
    }
  }

  next();
}