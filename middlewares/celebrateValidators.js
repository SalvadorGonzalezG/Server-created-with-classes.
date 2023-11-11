
const { celebrate, Segments } = require("celebrate");


// para traer la info traer el schema
const { schema } = require ("../validators/userValidator")
const celebrateValidator = celebrate({
    [Segments.BODY] : schema //validar el body y vs que lo valido
})
module.exports = { celebrateValidator }