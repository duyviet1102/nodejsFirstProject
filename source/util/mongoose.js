const { default: mongoose } = require("mongoose");

module.exports = {
  // ham xu ly array
  multipleMongooseToObj: function (mongooseArrays) {
    return mongooseArrays.map((mongoose) => mongoose.toObject());
  },
  mongooseToObject: function (mongooseArrays) {
    return mongooseArrays ? mongooseArrays.toObject : mongooseArrays;
  },
};
