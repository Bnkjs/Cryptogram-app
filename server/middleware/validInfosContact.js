module.exports = function(req, res, next) {
  
  const { email } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if (req.path === "/contact" && !req.method === "DELETE") {
    if (![email].every(Boolean)) {
      return res.status(401).json("Il manque des informations");
    } else if (!validEmail(email)) {
      return res.status(401).json("L'email n'est pas valide");
    }
  }

  next();
}