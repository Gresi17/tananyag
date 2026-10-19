import { sequelize } from "../database.js";
import { DataTypes } from "sequelize";

export const Kepessegek = sequelize.define(
  "Kepessegek",
  {
    hos_id: DataTypes.INTEGER,
    kepesseg_neve: DataTypes.STRING,
    leiras: DataTypes.TEXT,
    ero_szint: DataTypes.INTEGER,
  },
  {
    tableName: "kepessegek",
    timestamps: false,
  },
);
