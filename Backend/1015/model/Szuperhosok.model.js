import { sequelize } from "../database.js";
import { DataTypes } from "sequelize";

export const Szuperhosok = sequelize.define(
  "Szuperhosok",
  {
    szuperhos_nev: DataTypes.STRING,
    valodi_nev: DataTypes.STRING,
    kiado: DataTypes.STRING,
    szekhely: DataTypes.STRING,
    elso_megjelenes: DataTypes.INTEGER,
  },
  {
    tableName: "szuperhosok",
    timestamps: false,
  },
);
