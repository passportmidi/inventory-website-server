import express from "express";
import * as inventoryController from "../controllers/inventory-controller.js";

const router = express.Router();

router.route("/").get(inventoryController.getAllInventories).post(inventoryController.createInventoryItem);
router.route("/:id").get(inventoryController.findOneInventory);

export default router;
