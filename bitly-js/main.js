const { BitlyClient } = require('bitly');
const bitly = new BitlyClient('e1b4ed361ecab82cb73a3fab203d7a966d8401a1', {});

// bitly.shorten('')
//   .then(function(result) {
//     console.log(result.link);
//   })
//   .catch(function(error) {
//     console.error(error);
//   });