/* <script src="https://apis.google.com/js/api.js"></script>
    <script>
  /**
   * Sample JavaScript code for youtube.search.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */ 

   //import api from gitignore file
import React from 'react'
import { gapi } from 'gapi-script';
import AxiosSearch from './AxiosSearch'


//currently this thing requires authorization and load. 

class YoutubeSearch extends React.Component{

    state = {
        body: {}
    }

    componentDidMount() {

        gapi.load("client:auth2", function () {
            gapi.auth2.init({ client_id: process.env.REACT_APP_CLIENT_ID });
        });
        if (gapi.client){
        gapi.client.setApiKey(process.env.REACT_APP_API_KEY);
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function () { console.log("GAPI client loaded for API"); },
                function (err) { console.error("Error loading GAPI client for API", err); });
        }
       
    }


    authenticate = () => {
        return gapi.auth2.getAuthInstance()
            .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
            .then(function () { console.log("Sign-in successful"); },
                function (err) { console.error("Error signing in", err); });
    }

    loadClient = () => {
        gapi.client.setApiKey(process.env.REACT_APP_API_KEY);
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function () { console.log("GAPI client loaded for API"); },
                function (err) { console.error("Error loading GAPI client for API", err); });
    }

    // Make sure the client is loaded and sign-in is complete before calling this method.
    execute = (videoid) => {
        console.log("worked")
        return gapi.client.youtube.search.list({
            "part": "snippet",
            "q": videoid
        }).then(response => { 
            
            console.log(response.body.data)
            console.log("[]",response.body["items"])
            console.log("keys", response.data.items)})


            // .then(function (response) {
            //     // Handle the results here (response.result has the parsed body).
            //     console.log("Response", response);
            //     return response.json()
            // },
            //     function (err) { console.error("Execute error", err); })
            //     .then(body => console.log(body));
    }

    getYoutubeIDFromURL = (url) => {
        let video_id = url.split('v=')[1]
        
        if (!video_id){
            console.log("There is a problem with this URL")
        } else {
            let ampersandPosition = video_id.indexOf('&');
            if (ampersandPosition != -1) {
                video_id = video_id.substring(0, ampersandPosition);
            }
            console.log(`The video ID is ${video_id}`)
            this.execute(video_id)
        }
    }

    ////////
    //AXIOS TEST
    handleSearch = async (youtubeid) => {
        const response = await AxiosSearch.get('/search', {
            params:{
                q: youtubeid,
                part: "snippet",
                key: process.env.REACT_APP_API_KEY}
        })
        console.log(response.data.items[0].snippet)
        //handle the search response here :)
    }

    render(){
        return (
            <div>
                <button onClick={() => this.handleSearch("_Hj9v6pwTf8")}>Test Search</button>
                <button onClick={() => this.getYoutubeIDFromURL("https://www.youtube.com/watch?v=_Hj9v6pwTf8")}></button>
                <button onClick={this.loadClient}>authorize and load</button>
                {/* <button onClick={() => this.execute("_Hj9v6pwTf8")}>execute</button> */}
            </div>)
    }
   
}
// </script>
    
export default YoutubeSearch