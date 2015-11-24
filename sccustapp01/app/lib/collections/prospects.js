Prospects = new Mongo.Collection('prospects');

Prospects.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 100
  },
  email: {
    type: String,
    label: "eMail",
    max: 100
  },
  country: {
    type: String,
    label: "Country",
    allowedValues: ['Argentina', 'México'],
  },
  license: {
    type: String,
    label: "License Type",
    allowedValues: ['Enterprise', 'Single User', 'Unlimited'],
    optional: true
  },
  company: {
    type: String,
    label: "Company",
    optional: true
  },
  order: {
    type: Number,
    label: "Order",
    optional: true
  }
}));

if (Meteor.isServer) {
  Prospects.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
