//const express = require('express');
const axios = require('axios');
//const cors = require('cors');

//const app = express();
//app.use(cors());

//const PORT = 3000;

//app.get('/api/classify', async (req, res) 
module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { name } = req.query;

    //missing name or empty name
    if (!name || name.trim() === '') {
        return res.status(400).json({
            status: 'error',
            message: 'Bad Request:Missing or empty name parameter'
        });
    }

    //if it not a string
    if (typeof name !== 'string') {
        return res.status(422).json({
            status: 'error',
            message: 'Unprocessable entity: name must be a string'
        });
    }

    try {
    const response = await axios.get(`https://api.genderize.io?name=${name}`);
    const data = response.data;

    const {gender, probability, count} = data;

    if (!gender || count === 0) {
        return res.status(404).json({
            status: 'error',
            message: 'No data found for the given name'
        });
    }
    
    const sample_size = count;

    const is_confident = probability >= 0.7 && sample_size >= 100;
    const processed_at = new Date().toISOString();

    return res.json({
        status: 'success',
        data: {
            name,
            gender, 
            probability, 
            sample_size,
            is_confident,
            processed_at
        }
    });

}catch (error) {
    return res.status(500).json({
        status: 'error',
        message: 'Unable to fetch data from Genderize API'
    });
}
};

