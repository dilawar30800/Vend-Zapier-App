const perform = (z, bundle) => {
  var product = [];
  var payment = [];
  if (bundle.inputData.product.length > 0) {
    for (var i = 0; i < bundle.inputData.product.length; i++) {
      var obj = {};
      if (bundle.inputData.product[i].register_sale_products_id != null) {
        obj['id'] = bundle.inputData.product[i].register_sale_products_id;
      }
      if (bundle.inputData.product[i].product_id != null) {
        obj['product_id'] = bundle.inputData.product[i].product_id;
      }
      if (bundle.inputData.product[i].product_register_id != null) {
        obj['register_id'] = bundle.inputData.product[i].product_register_id;
      }
      if (bundle.inputData.product[i].sequence != null) {
        obj['sequence'] = bundle.inputData.product[i].sequence;
      }

      if (bundle.inputData.product[i].quantity != null) {
        obj['quantity'] = bundle.inputData.product[i].quantity;
      }

      if (bundle.inputData.product[i].price != null) {
        obj['price'] = bundle.inputData.product[i].price;
      }
      if (bundle.inputData.product[i].cost != null) {
        obj['cost'] = bundle.inputData.product[i].cost;
      }
      if (bundle.inputData.product[i].price_set != null) {
        obj['price_set'] = bundle.inputData.product[i].price_set;
      }

      if (bundle.inputData.product[i].discount != null) {
        obj['discount'] = bundle.inputData.product[i].discount;
      }
      if (bundle.inputData.product[i].loyalty_value != null) {
        obj['loyalty_value'] = bundle.inputData.product[i].loyalty_value;
      }
      if (bundle.inputData.product[i].tax != null) {
        obj['tax'] = bundle.inputData.product[i].tax;
      }
      if (bundle.inputData.product[i].tax_id != null) {
        obj['tax_id'] = bundle.inputData.product[i].tax_id;
      }
      if (bundle.inputData.product[i].product_status != null) {
        obj['status'] = bundle.inputData.product[i].product_status;
      }

      product.push(obj);
    }
  }

  if (bundle.inputData.payment.length > 0) {
    for (var i = 0; i < bundle.inputData.payment.length; i++) {
      var obj = {};
      if (bundle.inputData.payment[i].payment_id != null) {
        obj['id'] = bundle.inputData.payment[i].payment_id;
      }
      if (bundle.inputData.payment[i].payment_register_id != null) {
        obj['register_id'] = bundle.inputData.payment[i].payment_register_id;
      }
      if (bundle.inputData.payment[i].retailer_payment_type_id != null) {
        obj['retailer_payment_type_id'] =
          bundle.inputData.payment[i].retailer_payment_type_id;
      }
      if (bundle.inputData.payment[i].payment_date != null) {
        obj['payment_date'] = bundle.inputData.payment[i].payment_date;
      }

      if (bundle.inputData.payment[i].amount != null) {
        obj['amount'] = bundle.inputData.payment[i].amount;
      }

      payment.push(obj);
    }
  }

  var body = {};

  body['id'] = bundle.inputData.sale_id;
  if (bundle.inputData.source_id != null) {
    body['source_id'] = bundle.inputData.source_id;
  }

  if (bundle.inputData.register_id != null) {
    body['register_id'] = bundle.inputData.register_id;
  }

  if (bundle.inputData.customer_id != null) {
    body['customer_id'] = bundle.inputData.customer_id;
  }

  if (bundle.inputData.user_id != null) {
    body['user_id'] = bundle.inputData.user_id;
  }

  if (bundle.inputData.sale_date != null) {
    body['sale_date'] = bundle.inputData.sale_date;
  }

  if (bundle.inputData.note != null) {
    body['note'] = bundle.inputData.note;
  }

  if (bundle.inputData.status != null) {
    body['status'] = bundle.inputData.status;
  }

  if (bundle.inputData.short_code != null) {
    body['short_code'] = bundle.inputData.short_code;
  }

  if (bundle.inputData.invoice_number != null) {
    body['invoice_number'] = bundle.inputData.invoice_number;
  }

  if (bundle.inputData.accounts_transaction_id != null) {
    body['accounts_transaction_id'] = bundle.inputData.accounts_transaction_id;
  }
  body['register_sale_products'] = product;
  // body["register_sale_payments"]=payment;

  const options = {
    url: 'https://smartsysdemo.vendhq.com/api/register_sales',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.access_token}`,
    },
    params: {},
    body,
    //     body:
    // {
    //   "id": "0a6f6e36-8bc1-11ea-f3d6-f740d499d430",

    //   "status": "VOIDED"

    // }
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results;
  });
  // return {options};
  //return {"bundle":bundle.inputData,"line Length":bundle.inputData.line.length, "Line":Line};
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'sale_id',
        label: 'Sale Id',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'source_id',
        label: 'source id',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'register_id',
        label: 'register id',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'customer_id',
        label: 'customer id',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'user_id',
        label: 'user id',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'sale_date',
        label: 'sale date',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'note',
        label: 'note',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'status',
        label: 'status',
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
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'short_code',
        label: 'short code',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'invoice_number',
        label: 'invoice number',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'accounts_transaction_id',
        label: 'accounts transaction id',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'product',
        children: [
          {
            key: 'register_sale_products_id',
            label: 'item id',
            type: 'string',
            required: true,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'product_id',
            label: 'product id',
            type: 'string',
            required: true,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'product_register_id',
            label: 'register id',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'sequence',
            label: 'sequence',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'quantity',
            label: 'quantity',
            type: 'string',
            required: true,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'price',
            label: 'price',
            type: 'string',
            required: true,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'cost',
            label: 'cost',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'price_set',
            label: 'price_set',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'discount',
            label: 'discount',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'loyalty_value',
            label: 'loyalty_value',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'tax',
            label: 'tax',
            type: 'string',
            required: true,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'tax_id',
            label: 'tax_id',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'product_status',
            label: 'status',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
        ],
        label: 'Sale Products',
        required: false,
        altersDynamicFields: false,
      },
      {
        key: 'payment',
        children: [
          {
            key: 'payment_id',
            label: 'Payment id',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'payment_register_id',
            label: 'Payment Register Id',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'retailer_payment_type_id',
            label: 'retailer payment type id',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'payment_date',
            label: 'payment date',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
          {
            key: 'amount',
            label: 'amount',
            type: 'string',
            required: false,
            list: false,
            altersDynamicFields: false,
          },
        ],
        label: 'Sale Payment',
        required: false,
        altersDynamicFields: false,
      },
    ],
  },
  key: 'Update_existing_Sale',
  noun: 'sales',
  display: {
    label: 'Update An Existing Sale',
    description: 'To update an existing sale form the vend',
    hidden: false,
    important: true,
  },
};
