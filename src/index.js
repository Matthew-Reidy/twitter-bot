import fetch from 'node-fetch';

const API_KEY = process.env.API_KEY
const API_KEY_SECRET = process.env.API_KEY_SECRET


const postbody={
    text:"its the first of the month! Rise and grind!",
    media:{
        tweet_video:"1stOfTheMonth.mp4"
    }
    
}

export const postVideo = async()=>{

}