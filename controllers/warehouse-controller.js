all knex import statements - placeholders
import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);


const findOneWarehouse = async (req, res) => {
    try {
      const warehousesFound = await knex("warehouse").where({ id: req.params.id });
  
      if (warehousesFound.length === 0) {
        return res.status(404).json({
          message: `Warehouse with ID ${req.params.id} not found`,
        });
      }
  
      const warehouseData = warehousesFound[0];
      res.status(200).json(warehouseData);
    } catch (error) {
      res.status(500).json({
        message: `Unable to retrieve warehouse data for warehouse with ID ${req.params.id}`,
      });
    }
  };