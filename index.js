const got = require('got');

const API = require('./api.js');

class Golf {
  constructor() {
    this.apiKey = process.env.SPORTSDATA_API_KEY;

    if (!this.apiKey) throw new Error('SPORTSDATA_API_KEY not set');

    const apis = Object.entries(API);
    for (let [name, endpoint] of apis) {
      this[name] = async (args = {}) => {
        if (typeof args !== 'object')
          throw new Error('arguments must be an object')

        Golf.validate(name, args);
        endpoint = Golf.getEndpoint(endpoint, args);
        const response = await this.request(endpoint);
        return response;
      };
    }
  }

  static getArgs(name) {
    // find text within {}
    return API[name].match(/(?<={).+?(?=})/g);
  }

  static getEndpoint(endpoint, args) {
    for (const arg in args) {
      endpoint = endpoint.replace(`{${arg}}`, args[arg]);
    }
    return endpoint;
  }

  static validate(name, args) {
    const params = Golf.getArgs(name) || [];
    for (const param of params) {
      if (!args[param]) throw new Error(`Missing argument: ${param}`);
    }
  }

  async request(endpoint) {
    const response = await got(endpoint, {
      throwHttpErrors: false,
      headers: {
        'Ocp-Apim-Subscription-Key': this.apiKey
      }
    });
    return response.body;
  }
}

module.exports = Golf;
