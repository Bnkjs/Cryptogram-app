module.exports = function(req, res, next) {
  const { email, password,username } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }
  function validPswd(userPswd) {
    return /^[a-z]{5,60}$/.test(userPswd);
  }

  function validUserName(userName) {
    return /^[0-9a-z-A-Z\_]{3,20}$/.test(userName);
  }

  if (req.path === "/signup") {
    if (![email, password, username].every(Boolean)) {
      return res.json("Il manque des informations");
    } else if (!validEmail(email)) {
      return res.status(401).json("L'email n'est pas valide");
    } else if (!validPswd(password)) {
      return res.json("Le mots de pass est trop court/long");
    }else if (!validUserName(username)) {
      return res.json("Le nom d'utilsateur est trop court/long");
    }
  } if (req.path === "/login") {
      if (![email, password].every(Boolean)) {
        return res.status(401).json("Il manque des informations");
      } else if (!validEmail(email)) {
        return res.status(401).json("L'email n'est pas valide");
      } else if (!validPswd(password)) {
        return res.status(401).json("Le mots de pass est trop court/long");
      }
  }

  next();
};