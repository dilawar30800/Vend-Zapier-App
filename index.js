const authentication = require('./authentication');
const updateSaleCreate = require('./creates/update_sale.js');
const updateSaleStatusCreate = require('./creates/update_sale_status.js');
const updateExistingSaleCreate = require('./creates/update_existing_sale.js');
const findSaleSearch = require('./searches/find_sale.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  creates: {
    [updateSaleCreate.key]: updateSaleCreate,
    [updateSaleStatusCreate.key]: updateSaleStatusCreate,
    [updateExistingSaleCreate.key]: updateExistingSaleCreate,
  },
  searches: { [findSaleSearch.key]: findSaleSearch },
};
