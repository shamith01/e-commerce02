const jwt = require("jsonwebtoken");
const user = require("../models/user");
const product = require("../models/product");
const cart = require("../models/cart");
const order = require("../models/order");
const bcrypt = require("bcrypt");

// <--user controllers -->
module.exports.signup = async (req, res,next) => {
  try {
    const { name, email, phone, password, address } = req.body;
    console.log(req.body);

    const match = await user.findOne({email:email});
    if (match) {
      next(400, "user already exists");
    }
    const _password = await bcrypt.hash(password, 10);

    const newUser = await user.create({
      name,
      email,
      password: _password,
      address,
      phone,
    });

    const token = jwt.sign(
      {
        email: newUser.email,
        id: newUser._id,
        role: newUser.role,
        name: newUser.name,
      },
      process.env.JWT_SECRET
    );

    console.log("user",newUser);
    return res
      .status(201)
      .cookie("token", token)
      .json({ user: newUser, token: token });
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res,next) => {
  try {
    const { email, password } = req.body;

    const user = await user.findOne(email);
    if (!user) {
      next(400, "user not found");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      next(400, "incorrect password ");
    }
    const token = jwt.sign(
      {
        email: user.email,
        name: user.name,
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET
    );

    return res
      .status(200)
      .cookie("token", token)
      .json({ message: "user verified" });
  } catch (error) {
    next(error);
  }
};

// <--cart controllers -->
module.exports.addCart = async (req, res) => {
  try {
  } catch (error) {
    next(error);
  }
};

// <--product controllers -->
module.exports.addProducts = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    if (!name) {
      next(400, "name is empty");
    } else if (!description) {
      next(400, "description is empty");
    } else if (!price) {
      next(400, "price is empty");
    } else if (!stock) {
      next(400, "stock is empty");
    }

    let picture;
    if (req.files) {
      picture = req.files.map((file) => {
        return { img: file.filename };
      });
    }

    const product = await product.create({
      name,
      description,
      price,
      picture,
      stock,
      picture,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.delProducts = async (req, res) => {
  try {
    const id = req.params;
    const del = await product.findOneAndDelete({ _id: id });

    if (!del) {
      next(400, "product not found");
    }
  } catch (error) {
    next(error);
  }
};

module.exports.updateProducts = async (req, res) => {
  try {
    const { name, description, price, stock, id } = req.body;

    await product.findByIdAndUpdate(
      { _id: id },
      { name, description, price, stock },
      { new: true }
    );
    next(200, "successfully updated product");
  } catch (error) {
    next(error);
  }
};

module.exports.getProducts = async (req, res) => {
  try {
    const products = await product.find();

    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

// <--order controllers -->
