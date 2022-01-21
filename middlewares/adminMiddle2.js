function adminMiddle2 (req, res, next){

    if (req.session.userLogged && req.session.userLogged.is_admin === false) {
        return res.redirect('/products');
    }
    next();
}

module.exports = adminMiddle2;