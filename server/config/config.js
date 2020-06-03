const port = 8080;
const baseURL = `http://localhost:${port}`;

module.exports = {
    JWTsecret: 'oauthsecret',
    baseURL: baseURL,
    port: port,
    oauth2Credentials: {
        client_id: "917427207714-97p12mv3nfnfijqcn6g5hlq6c5a0kcet.apps.googleusercontent.com",
        project_id: "personaldashboard-275208",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_secret: "_BO8Q4iXcnxQER_avVIDnyvr",
        redirect_uris: [
            `${baseURL}/oauth2/callback`
        ],
        scopes: [
            'https://www.googleapis.com/auth/calendar.readonly'
        ]
    }
};
