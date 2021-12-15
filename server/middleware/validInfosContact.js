module.exports = function(req, res, next) {
  
  const { email, firstname, lastname } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  function validName(name) {
    return /^[a-zA-Z\-]{3,20}$/.test(name);
  }


  if (req.path === "/contact" && req.method === "POST") {
    if (![email,firstname,lastname].every(Boolean)) {
      return res.status(401).json("Il manque des informations");
    } else if (!validEmail(email)) {
      return res.status(401).json("L'email n'est pas valide");
    }else if(!validName(firstname || lastname)){
      return res.status(401).json("le prénom/nom n\'est pas valide")
    }
  }

  if (req.path === "/contact" && req.method === "DELETE") {
    if (![email].every(Boolean)) {
      return res.status(401).json("Il manque des informations");
    } else if (!validEmail(email)) {
      return res.status(401).json("L'email n'est pas valide");
    }
  }

  next();
}