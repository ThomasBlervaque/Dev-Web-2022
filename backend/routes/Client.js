const  express = require("express")
const router = express.Router()
const clientCtrl = require('../controllers/Client')
const authentification = require('../middleware/authentification')

router.post('/createClient', clientCtrl.createClient)

router.post ('/login',clientCtrl.login)

router.get ('/showOneClient/:id', clientCtrl.showOneClient)

router.get ('/searchEmail/:email',clientCtrl.searchEmail)

router.put('/modify/:id',clientCtrl.modify)

router.delete('/delet/:id', authentification, clientCtrl.delete)

router.get('/showAllClient',authentification, clientCtrl.showAllClient)

module.exports = router