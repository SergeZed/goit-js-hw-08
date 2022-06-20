import { throttle } from 'lodash';

// const onPlay = function (data) {};

// player.on('play', onPlay);

// player.on('timeupdate', function (data) {
// 	localStorage.setItem('videoplayer-current-time', data.seconds);
// 	//   console.log(data);
// });

// let currentStart = localStorage.getItem('videoplayer-current-time');

// player.setCurrentTime(currentStart);

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const savedTime = localStorage.getItem('videoplayer-current-time') || 0;
// console.log(savedTime);
player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(data) {
	localStorage.setItem('videoplayer-current-time', data.seconds);
}
player.setCurrentTime(savedTime);
