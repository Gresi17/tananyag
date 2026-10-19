import express from "express";
import { Kepessegek } from "./model/Kepessegek.model.js";
import { Szuperhosok } from "./model/Szuperhosok.model.js";

Szuperhosok.hasMany(Kepessegek, { foreignKey: "hos_id" });
Kepessegek.belongsTo(Szuperhosok, { foreignKey: "hos_id" });

// Az alkalmazás fő változója
const app = express();

// JSON:
// {
//     kulcs: "érték",
//     kulcs2: "érték"
// }

app.use(express.json());

app.listen(3300, () => {
  console.log("Elindult");
});

app.get("/api/szuperhosok", async (req, res) => {
  const data = await Szuperhosok.findAll({
    include: Kepessegek,
  });

  res.status(200).json(data);
});

app.post("/api/szuperhosok", async (req, res) => {
  const { szuperhos_nev, valodi_nev, kiado, szekhely, elso_megjelenes } = req.body;

  if (!szuperhos_nev || !valodi_nev || !kiado || !szekhely || !elso_megjelenes) {
    return res.status(400).json({
      error: "Hiányzó adatok: szuperhős név, valódi név, kiadó, székhely és első megjelenés megadása kötelező.",
    });
  }

  await Szuperhosok.create({
    szuperhos_nev,
    valodi_nev,
    kiado,
    szekhely,
    elso_megjelenes,
  });

  res.status(201).json({
    message: "Sikeresen hozzáadva",
  });
});

app.get("/api/kepessegek", async (req, res) => {
  const data = await Kepessegek.findAll()

  res.status(200).json(data);
})

app.put("/api/kepessegek/:kepesseg_id", async (req, res) => {
  const { kepesseg_neve, leiras, ero_szint, hos_id } = req.body;
  const kepesseg_id = req.params.kepesseg_id;

  const hos = await Szuperhosok.findByPk(hos_id);
  const kepesseg = await Kepessegek.findByPk(kepesseg_id);

  if (!hos) {
    return res.sendStatus(400);
  }

  try {
    await kepesseg.update({
      kepesseg_neve,
      leiras,
      ero_szint,
      hos_id,
    });

    res.status(200).json("Sikeres");
  } catch (error) {
    res.status(500).json("Szerver hiba!");
  }
});
