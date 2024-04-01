const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let operatorSchema = new Schema({
  name: {
    type: String
  },
  cnic: {
    type: String
  },
  depname: {
    type: String
  },
  empnum: {
    type: String
  },
  idate: {
    type: Date
  },
  rdate: {
    type: Date
  },
  email: {
    type: String
  },
  mobile: {
    type: String
  }
}, {
    collection: 'operator'
  })
module.exports = mongoose.model('Operators', operatorSchema)