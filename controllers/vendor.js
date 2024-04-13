import Vendor from "../models/Vendor.js";

export const getAllVendor = async (req, res) => {
  console.log("hello");
  try {
    const data = await Vendor.find();

    if (data.length === 0) {
      res.status(400).json("Không có sản phẩm ");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getByIdVendor = async (req, res) => {
  try {
    const data = await Vendor.findById(req.params.id);

    if (data.length === 0) {
      res.status(400).json("Không tồn tại  sản phẩm ");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const createVendor = async (req, res) => {
  try {
    const data = await Vendor.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const deleteByIdVendor = async (req, res) => {
  try {
    const data = await Vendor.findByIdAndDelete(req.params.id);

    if (data.length === 0) {
      res.status(400).json("Không tồn tại  sản phẩm ");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateVendor = async (req, res) => {
  try {
    const data = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (data.length === 0) {
      res.status(400).json("Không tồn tại  sản phẩm ");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
