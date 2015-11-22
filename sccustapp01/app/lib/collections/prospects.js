Prospects = new Mongo.Collection('prospects');


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
  bodystyle: {
    type: String,
    label: "Body Style",
    allowedValues: ['Convertibles', 'Coupes', 'Hatchbacks', 'Vans', 'Sedans', 'Suvs', 'Trucks', 'Wagons'],
    optional: true
  },
  topspeed: {
    type: Number,
    label: "Top Speed (mph)",
    optional: true
  },
  power: {
    type: Number,
    label: "Power (HP)",
    optional: true
  }
}));
