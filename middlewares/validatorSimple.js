
function validatePost (Schema) {
    return (req, res, next) => {
        const { error } = Schema.validate(req.body)
        if (error) {
            return res.status(403).json({
                msg: error.details[0].message
            })
        }
        next()
    }
}

module.exports = { validatePost }