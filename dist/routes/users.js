"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var organization_1 = require("../controller/organization");
var router = express_1.default.Router();
/* GET users listing. */
router.get('/', organization_1.getAllOrganization);
router.get('/:id', organization_1.getOrganization);
router.post('/', organization_1.createOrganization);
router.put('/:id', organization_1.updateOrganization);
router.delete('/:id', organization_1.deleteOrganization);
exports.default = router;
