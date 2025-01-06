const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var slug = require("mongoose-slug-updater");
// var slug = require("slugify");
mongoose.plugin(slug);
const Course = new Schema(
  {
    name: {
      type: String,
      maxlength: 255,
      required: true,
    },
    description: {
      type: String,
      maxlength: 255,
    },
    image: {
      type: String,
      maxlength: 255,
    },
    videoId: {
      type: String,
    },
    slug: {
      type: String,
      slug: "name",
      unique: true,
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
    level: {
      type: String,
      maxlength: 225,
    },
  },
  {
    timestamps: true,
  },
);

// Middleware để tự động gán slug = name
// Course.pre("save", function (next) {
//   if (this.isModified("name")) {
//     this.slug = this.name; // Gán slug bằng với name
//   }
//   next();
// });

module.exports = mongoose.model("Course", Course);
