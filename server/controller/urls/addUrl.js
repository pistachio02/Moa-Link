const { Url } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {

    const accessTokenData = isAuthorized(req);
    const { url, title, description, category } = req.body;

    // console.log({ url, title, description, category })

    let categoryId = 0;

    if(category === "games") {
        categoryId = 1;
    } else if(category === "shopping") {
        categoryId = 2;
    } else if(category === "works") {
        categoryId = 3;
    } else if(category === "music") {
        categoryId = 4;
    } else if(category === "etc") {
        categoryId = 5;
    } else if(category === "private") {
        categoryId = 6;
    }
    
    const userId = accessTokenData.id;
    

    if(!url || !title || !description || !category) {
        res.status(422).json({ message: "insufficient parameters supplied!" });
        return;
    };

    if(!accessTokenData) {
        res.status(401).send({ data: null, message: 'not authorized' });
        return;
    } else if(categoryId === 6) {
        const newUrl = await Url.create({ 
            url: url,
            title: title,
            description: description,
            categoryId: categoryId,
            allUrlId: 2,
            userId: userId
        })
        res.status(201).json({ data: newUrl, message: "Successfully Added!" })
        return;
    }
    else {
        const newUrl = await Url.create({ 
            url: url,
            title: title,
            description: description,
            categoryId: categoryId,
            allUrlId: 1,
            userId: userId
        })
        res.status(201).json({ data: newUrl, message: "Successfully Added!" })
        return;
    }
};
