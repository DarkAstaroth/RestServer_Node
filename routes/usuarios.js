const { Router } = require("express");
const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosPatch,
  usuariosDelete,
} = require("../controllers/usuariosController");

const router = Router();

router.get("/", usuariosGet);

router.put("/", usuariosPut);

router.post("/", usuariosPost);

router.patch("/", usuariosPatch);

router.delete("/", usuariosDelete);

module.exports = router;
