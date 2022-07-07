import axios from 'axios'
import express from 'express'
const router = express.Router()


router.get('/',async(req,res) => {
    console.log('>>>>>>>>>>>>>>>>> inside lambda function')
    let API_KEY  = "74f8cf364bb8557c47cbb569d5dad64f"
    let location = req.body.city;
    console.log(location,">>>>>>>>>>>>>>")

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        const response = await axios.get(url);
        
        console.log("-------------->>>>>>>>>",response.data)
        
        const apiResponse = {
        statusCode: 200,
        body: JSON.stringify(response.data),
        
    };
    res.json({apiResponse})
    return apiResponse;
       
    } catch (error) {
        console.log(error.message)
    }
}) 

export { router }