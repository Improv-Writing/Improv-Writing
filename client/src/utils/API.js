import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=8BRi8Mur7x5UXHkxRh2ZfTVqOjpspRfl&limit=12&rating=pg";

// Export an object with a "search" method than object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  getUser: function () {
    return axios.get("/api/user/myStories");
  },

  logIn: function (username, password) {
    return axios.post("/api/user/logIn", {
      username: username,
      password: password
    })
  },
  publicStories: function () {
    return axios.get("/api/user/publicStories");
  },
  //  save stories to database
  saveStory: function (storyText, storyImgUrl, storyImgName, storyShare, storyLikes) {
    return axios.post("/api/user/saveStory", {
      storyText: storyText,
      storyImgUrl:storyImgUrl,
      storyImgName: storyImgName,
      storyShare: storyShare,
      storyLikes: storyLikes
    });
  },

  signUp: function (username, password) {
    return axios.post("/api/user/signUp", {
      username: username,
      password: password
    })
  },
  shareStory: function (storyId) {
    return axios.post("/api/user/shareStory", {
      id: storyId
    })
  }



  // deleteStory: function(id){
  //   return axios.delete("/api/user/deleteStory");
  // }

};