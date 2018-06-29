import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=8BRi8Mur7x5UXHkxRh2ZfTVqOjpspRfl&limit=12&rating=pg";

// Export an object with a "search" method than object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  getUser: function() {
    return axios.get("/api/user/veryFirstUser");
  },

  logIn: function(username, password) {
    return axios.post("/api/user/logIn", {
      username: username,
      password: password
          })
  },
  publicStories: function(){
    return axios.get("/api/user/publicStories");
  },
 
  saveStory: function(username, storyText, storyImgURL){
    return axios.post("/api/user/saveStory", {
     username: username,
     storyText: storyText,
     storyImgURL: storyImgURL
    });
  }
  };

