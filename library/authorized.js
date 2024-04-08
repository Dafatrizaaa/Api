module.exports = {
	isAuthenticated: function (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		}
		req.flash("error_msg", "Please login to continue");
		res.status(200).redirect("/users/login");
	},
	notAuthenticated: function (req, res, next) {
		if (!req.isAuthenticated()) {
			return next();
		}
		res.status(200).redirect("/docs");
	}
};