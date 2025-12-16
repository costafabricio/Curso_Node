const Tought = require('../models/Tought')
const User = require('../models/User')
const ToughtController = require('../controllers/ToughtController')

module.exports = class ToughtController {
    static async showToughts(req,res) {
        res.render('toughts/home')
    }

    static async dashboard(req,res) {
        res.render('toughts/dashboard')
    }

    static createTought(req,res) {
        res.render('toughts/create')
    }
}