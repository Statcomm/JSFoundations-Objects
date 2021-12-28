/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

const channels = require("./channels.json");
// console.log(channels[0]);

//Notes for myself: so we have an array in channels.json that's...well an array. It's called channels.
//Now each element in the channels array, each with its own index...is an element! It's an object of the array it belongs to.
//So when you want to call an object in which you want a property, you dont call the entire array, you call one element of the array.
//hence channels[0] because channels[0] is the first element of the array, from which you would be getting the properties later down the line.
/**************************************************************
 * getChannelName(channel)
 * - recieves a channel object
 * - returns the name of the channel
 ****************************************************************/
// getChannelName = (channel) => channel.name

// console.log(getChannelName(channels[0]));
//ok so notes to myself: basically get an object, i.e. channel, then as a function, return a property of the object channel. Which property? the name. SO dot name.
// how do I know it's going to return without actually specifying return? That's because the arrow, that serves as another way to make a function, is by default returning stuff.


/**************************************************************
 * numberOfVideos(channel)
 * - recieves a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
// numberOfVideos = (channel) => channel.videos.length

// console.log(numberOfVideos(channels[0]))
//same deal as above, 'tis a function that plays with something called channel that we predefined.
//in the channel, I want to access the property of videos. Now 

/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - recieves a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
// checkChannelTitle = (channel) => channel.videos.title
// console.log(checkChannelTitle(channels[0]))
//my attempt at just retrieving titles of videos. Gotta bear in mind that videos is an array within the array of channels.

// channelHasVideo = (videoTitle, channel) => channel.videos.map(element=> element.title === videoTitle ? "true" : "false")
// channelHasVideo = (videoTitle, channel) => channel.videos.some(element=> element.title === videoTitle)
// 

// console.log(channelHasVideo("The Universal S", channels[0]));
// console.log(channelHasVideo("The Universal S", channels[1]));

/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - recieves an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
 getChannelByName = (channelName, channels) => channels.find(channelName)
 getChannelByName = (channelName, channels) => channels.find(element => element.name === channelName)

console.log(getChannelByName("PowerfulJRE", channels))

/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - recieves an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
// getChannelByVideoTitle = (videoTitle, channels) => 

// console.log(getChannelByVideoTitle("The Universal S", channels));

/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
// function searchChannels(query, channels) {
  // Your code here
// }
// console.log(searchChannels("the", channels))

// module.exports = {
//   getChannelName,
//   numberOfVideos,
//   channelHasVideo,
//   getChannelByName,
//   getChannelByVideoTitle,
//   searchChannels,
// };
