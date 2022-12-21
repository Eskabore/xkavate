import Product from "../models/product.js";
import ProductStat from "../models/productStat.js";

export const getProducts = (req, res) => {
    Product.find((error, products) => {
      if (error) {
        res.status(404).json({ message: error.message });
        return;
      }
      const productsWithStats = products.map((product) => {
        ProductStat.find({ productId: product._id }, (error, stat) => {
          if (error) {
            res.status(404).json({ message: error.message });
            return;
          }
          return {
            ...product._doc,
            stat,
          };
        });
      });
      res.status(200).json(productsWithStats);
    });
  };
