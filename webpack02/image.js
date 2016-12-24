var url = require('./image/2342.jpg');
var dataUrl = require('./image/Apple.svg');

var img = document.createElement('img');
img.src = url;

var embed = document.createElement('embed');
embed.src = dataUrl;

document.body.appendChild(img);
document.write('<br> the follow picture is svg <br>');
document.body.appendChild(embed);

document.write('yes!!I made it, image is loaded from image.js');