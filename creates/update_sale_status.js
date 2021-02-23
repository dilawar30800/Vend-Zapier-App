const perform = (z, bundle) => {
  const options = {
    url: 'https://smartsysdemo.vendhq.com/api/register_sales',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.access_token}`,
    },
    params: {},
    body: {
      id: bundle.inputData.id,
      status: bundle.inputData.status,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'id',
        label: 'Sale ID',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'status',
        label: 'Sale Status',
        type: 'string',
        choices: [
          'SAVED',
          'CLOSED',
          'ONACCOUNT',
          'LAYBY',
          'ONACCOUNT_CLOSED',
          'LAYBY_CLOSED',
          'AWAITING_DISPATCH',
          'AWAITING_PICKUP',
          'DISPATCHED_CLOSED',
          'PICKED_UP_CLOSED',
          'VOIDED',
        ],
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
  },
  key: 'update_sale_status',
  noun: 'sale',
  display: {
    label: 'Update Sale Status',
    description: 'To update the only status of sale registered',
    hidden: false,
    important: true,
  },
};
