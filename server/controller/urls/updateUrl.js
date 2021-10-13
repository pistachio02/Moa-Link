const { Url } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = (req, res) => {

    const accessTokenData = isAuthorized(req);
    const { id, url, title, description, category } = req.body;

    let categoryId = 0;

    if(category === "Games") {
        categoryId = 1;
    } else if(category === "Shopping") {
        categoryId = 2;
    } else if(category === "Works") {
        categoryId = 3;
    } else if(category === "Music") {
        categoryId = 4;
    } else if(category === "Etc") {
        categoryId = 5;
    } else if(category === "Private") {
        categoryId = 6;
    }

    if(!id || !url || !title || !description || !categoryId) {
        res.status(422).json({ message: "insufficient parameters supplied!" });
    };

    if(!accessTokenData) {
        res.status(401).send({ data: null, message: 'not authorized' });
    } else {
        Url
            .update({ 
                url: url, title: title, description: description, categoryId: categoryId 
            }, { where: { id } })
            .then(async () => {
                const newUrl = await Url.findAll({ where: { id } })
                return res.json({ data: newUrl, message: "Successfully Updated!" })
            })
            .catch((err) => {
                console.log(err);
            });
    }
};
