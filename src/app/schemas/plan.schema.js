const mongoose = require("mongoose")

const PlanSchema = mongoose.Schema({
  url: String,
  status: String,
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  shippable: {
    type: Boolean,
    default: false,
    required: true
  },
  payment_methods: {
    type: [String],
    enum: ['credit_card', 'boleto', 'debit_card'],
    default: ['debit_card'],
    required: true
  },
  installments: {
    type: [Number],
    default: [1],
    required: true
  },
  minimum_price: {
    type: Number,
    required: true
  },
  statement_descriptor: String,
  currency: {
    type: String,
    enum: ['BRL','ARS','BOB','CLP', 'COP','MXN','PYG','USD','UYU','EUR'],
    default: 'BRL'
  },
  interval: {
    type: String,
    enum: ['day','week','month','year'],
    required: true
  },
  interval_count: {
    type: Number,
    required: true
  },
  trial_period_days: {
    type: Number,
    default: 0
  },
  items:Array,
  metadata: Object
}, {
  timestamp: true
})

module.exports = mongoose.model('Plan', PlanSchema)
