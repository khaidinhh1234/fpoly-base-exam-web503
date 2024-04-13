import Service from "../models/Service.js";
import { vilidateService } from "../schema.js/sevice.js";

export const getAllservice = async (req, res) => {
  try {
    const data = await Service.find();

    if (data.length === 0) {
      res.status(400).json("Không có sản phẩm ");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getByIdservice = async (req, res) => {
  try {
    const data = await Service.findById(req.params);

    if (data.length === 0) {
      res.status(400).json("Không tồn tại  sản phẩm ");
    }
    res.status(200).json(data);
  } catch (error) {
    const err = error.message.map((item) => item.message);
    res.status(500).json(err);
  }
};
export const createservice = async (req, res) => {
  try {
    const validate = await vilidateService.validate(req.body);
    const data = await Service.create(validate);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const deleteByIdservice = async (req, res) => {
  try {
    const data = await Service.findByIdAndDelete(req.params);

    if (data.length === 0) {
      res.status(400).json("Không tồn tại  sản phẩm ");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateservice = async (req, res) => {
  try {
    const validate = await vilidateService.validate(req.body);
    const data = await Service.findByIdAndUpdate(req.params, validate, {
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
