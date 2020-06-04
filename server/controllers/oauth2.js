const google = require('googleapis').google;
const OAuth2 = google.auth.OAuth2;
const jwt = require('jsonwebtoken');

const CONFIG = require('../config/config.js');

function handlePermission(scope)
{
    const oauth2Client = new OAuth2(CONFIG.oauth2Credentials.client_id, CONFIG.oauth2Credentials.client_secret, CONFIG.oauth2Credentials.redirect_uris[0]);
    const loginLink = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scope
    });

    return loginLink;
}

exports.getYoutubePermission = (req, res, next) => {
    const loginLink = handlePermission(CONFIG.oauth2Credentials.scopes[0]);

    res.status(200).json({
        permission_url: loginLink
    });
}

exports.getGoogleCalendarPermission = (req, res, next) => {
    const loginLink = handlePermission(CONFIG.oauth2Credentials.scopes[1]);

    res.status(200).json({
        permission_url: loginLink
    });
}

exports.getCredentials = (req, res, next) => {
    const oauth2Client = new OAuth2(CONFIG.oauth2Credentials.client_id, CONFIG.oauth2Credentials.client_secret, CONFIG.oauth2Credentials.redirect_uris[0]);

    //to delete
    let encrypted_token;

    if (req.query.error) {
        res.status(400).json({
            error: error
        });
    } else {
        oauth2Client.getToken(req.query.code, (err, token) => {
            if (err) {
                res.status(400).json({
                    error: error
                });
            }
            //res.cookie('jwt', jwt.sign(token, CONFIG.JWTsecret));

            //to delete
            encrypted_token = jwt.sign(token, CONFIG.JWTsecret);

            //to delete parameter and change URL for Client URL
            //return res.redirect(`/oauth2/infos?token=${encrypted_token}`);
            return res.redirect(`http://localhost:8080/oauth2/client?token=${encrypted_token}`);
        });
    }
}

exports.getClient = (req, res, next) => {
     res.status(200).json({
         response: "Good !"
    });
}

exports.getInfos = (req, res, next) => {
    // res.status(200).json({
    //     response: "Good !"
    // });
      // if (!req.cookies.jwt) {
      //   // We haven't logged in
      //   res.status(400).json({
      //       error: "Token Invalid"
      //   });
      // }
      // Create an OAuth2 client object from the credentials in our config file
      const oauth2Client = new OAuth2(CONFIG.oauth2Credentials.client_id, CONFIG.oauth2Credentials.client_secret, CONFIG.oauth2Credentials.redirect_uris[0]);
      // Add this specific user's credentials to our OAuth2 client
     // console.log("token after :", req.query.token);
      oauth2Client.setCredentials(jwt.verify(req.query.token, CONFIG.JWTsecret));
      //return oauth2Client;
      // Get the youtube service
      const service = google.youtube('v3');
      // Get five of the user's subscriptions (the channels they're subscribed to)
      service.subscriptions.list({
        auth: oauth2Client,
        mine: true,
        part: 'snippet,contentDetails',
        maxResults: 5
      }).then(resp => {
        // Render the data view, passing the subscriptions to it
        res.status(201).json({
                     response: resp
                 });
      });
}

exports.generateOAuth2Client = (encryptedToken) => {
    const oauth2Client = new OAuth2(CONFIG.oauth2Credentials.client_id, CONFIG.oauth2Credentials.client_secret, CONFIG.oauth2Credentials.redirect_uris[0]);

    oauth2Client.setCredentials(jwt.verify(encryptedToken, CONFIG.JWTsecret));
    return oauth2Client;
}
