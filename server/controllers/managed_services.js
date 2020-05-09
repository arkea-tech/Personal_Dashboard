const fs = require('fs');

function jsonReader(filePath, callBack) {
    fs.readFile(filePath, (error, fileData) => {
        if (error) {
            return callBack && callBack(error);
        }
        try {
            const object = JSON.parse(fileData);
            return callBack && callBack(null, object);
        } catch(error) {
            return callBack && callBack(error);
        }
    });
}

function setUserDatas(req, services)
{
    ipClient = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ipClient.substr(0, 7) == "::ffff:") {
        ipClient = ipClient.substr(7)
    }
    services.client.host = ipClient;
    services.server.current_time = new Date().getTime();
}

module.exports = (req, res, next) => {
    let jsonString = "";

    jsonReader('./storage/about.json', (error, services) => {
        if (error) {
            res.status(400).json({
                error: error
            });
        }
        setUserDatas(req, services);
        jsonString = JSON.stringify(services, null, 4);
        fs.writeFile('./storage/about.json', jsonString, error => {
            if (error) {
                res.status(400).json({
                    error: error
                });
            }
        });
        res.status(200).json(services);
    });
}
