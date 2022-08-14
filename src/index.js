
import { TwitterApi } from 'twitter-api-v2';
import * as dotenv from 'dotenv' 
import { ClientRequestMaker } from 'twitter-api-v2/dist/client-mixins/request-maker.mixin';
dotenv.config()

const API_KEY = process.env.API_KEY
const API_KEY_SECRET = process.env.API_KEY_SECRET

const BEARER_TOKEN = process.env.BEARER_TOKEN

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

// const postbody={
//     text:"its the first of the month cock suckas! Rise and grind!", 
// }
const TwitterApi = new TwitterApi({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET
});

const 

const tweetVideo= async()=>{
    try{
        await 
    }catch(err){
        console.error(err)
    }
}

tweetVideo()