import express from 'express';
import { calculateCarbonFootprint } from './controller/CarbonFootprintController.js';

const router = express.Router();

router.post('/calculate', calculateCarbonFootprint);

export default router;
