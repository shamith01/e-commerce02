const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}_${shortid.generate()}_${Date.now()}_${path.extname(
        file.originalname
      )}`
    );
  },
});

const imageFilter = (req, file, cb) => {
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const imageUpload = multer({ storage, imageFilter });

const uploadImage = imageUpload.array("pictures", 5);

module.exports = { uploadImage };
