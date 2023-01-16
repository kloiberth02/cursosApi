const VideosService = require("../services/videos.services");


const createVideos = async (req, res) => {

    try {
        const video = req.body;
        const result = await VideosService.create(video);
        res.status(201).json(result);

    } catch (error) {
        res.status(400).json(error.message);      
    }
}

const deleteVideos = async (req, res) => {

    try {
        
        const id = req.body;
        const result = await VideosService.deleted(id);
        res.status(200);

    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports =  {
    createVideos,
    deleteVideos,
}