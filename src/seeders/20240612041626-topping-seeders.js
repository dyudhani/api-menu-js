"use strict";
require("dotenv").config();
const { Menu } = require("../models");
const { nanoid } = require("nanoid");
const { MENU_ONE, MENU_TWO, MENU_THREE } = process.env;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const menu_one = await Menu.findOne({ where: { name: MENU_ONE } });
    const menu_two = await Menu.findOne({ where: { name: MENU_TWO } });
    const menu_three = await Menu.findOne({ where: { name: MENU_THREE } });

    await queryInterface.bulkInsert("Toppings", [
      {
        id: nanoid(7),
        menu_id: menu_one.id,
        name: "Cheese",
        price: 12000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(7),
        menu_id: menu_one.id,
        name: "Chicken",
        price: 18000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(7),
        menu_id: menu_one.id,
        name: "Pepper",
        price: 8000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(7),
        menu_id: menu_two.id,
        name: "Blueberry",
        price: 12000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(7),
        menu_id: menu_two.id,
        name: "Cheese",
        price: 12000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(7),
        menu_id: menu_two.id,
        name: "Sugar Glaze",
        price: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(7),
        menu_id: menu_three.id,
        name: "Pepper",
        price: 8000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(7),
        menu_id: menu_three.id,
        name: "Blueberry",
        price: 12000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(7),
        menu_id: menu_three.id,
        name: "Apple Slices",
        price: 14000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Toppings", null, {});
  },
};
