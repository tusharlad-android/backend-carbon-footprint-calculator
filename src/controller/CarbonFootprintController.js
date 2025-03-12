import { getOpenAiAnalysis } from '../services/openAiService.js';

export const calculateCarbonFootprint = async (req, res) => {
    const { travelType, distance, transportType, frequency } = req.body;

    if (!travelType || !distance || !transportType || !frequency) {
        return res.status(400).json({ error: "All the fields are required." });
    }

    try {
        const result = await getOpenAiAnalysis({ travelType, distance, transportType, frequency });
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({ footprint: result });
    } catch (error) {
        res.status(500).json({ error });
    }
};


