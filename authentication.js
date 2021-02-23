module.exports = {
  type: 'oauth2',
  test: {
    url: 'https://smartsysdemo.vendhq.com/api/users',
    method: 'GET',
    params: { domain: '{{bundle.authData.domain}}' },
    headers: {
      Authorization: 'Bearer {{bundle.authData.access_token}}',
      'X-DOMAIN': '{{bundle.authData.domain}}',
    },
    body: {},
    removeMissingValuesFrom: {},
  },
  oauth2Config: {
    authorizeUrl: {
      method: 'GET',
      url: 'https://secure.vendhq.com/connect',
      params: {
        client_id: '{{process.env.CLIENT_ID}}',
        state: '{{bundle.inputData.state}}',
        redirect_uri: '{{bundle.inputData.redirect_uri}}',
        response_type: 'code',
      },
    },
    getAccessToken: {
      url: 'https://smartsysdemo.vendhq.com/api/1.0/token',
      method: 'POST',
      params: {},
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      body: {
        code: '{{bundle.inputData.code}}',
        client_id: '{{process.env.CLIENT_ID}}',
        client_secret: '{{process.env.CLIENT_SECRET}}',
        grant_type: 'authorization_code',
        redirect_uri: '{{bundle.inputData.redirect_uri}}',
      },
      removeMissingValuesFrom: {},
    },
    refreshAccessToken: {
      url: 'https://smartsysdemo.vendhq.com/api/1.0/token',
      method: 'POST',
      params: {},
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      body: {
        refresh_token: '{{bundle.authData.refresh_token}}',
        grant_type: 'refresh_token',
      },
      removeMissingValuesFrom: {},
    },
    autoRefresh: true,
  },
  fields: [],
};
