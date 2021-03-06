let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
		{
		img : 'images/2hype.jpg',
		name : '2 Hype Ibiza',
		artist : '3 Texas Boyz - Lucky Ding',
		music : 'music/2hypeibiza.mp3'
	},
	{
		img : 'images/mikejones.jpg',
		name : 'Intro To Red Orchestra II',
		artist : 'Dj StevenGotRemix',
		music : 'music/stevengotremixintro.mp3'
	},
	{
		img : 'images/areyoutheone.jpg',
		name : 'Are You The One',
		artist : 'Dj Babyboi - Stevie So Fly',
		music : 'music/areyoutheone.mp3'
	},
	{
		img : 'images/flute.jpg',
		name : 'Flute Reaction',
		artist : 'Dj Farm - Andrew D',
		music : 'music/flutereaction.mp3'
	},
	{
		img : 'images/whereibelong.jpg',
		name : 'Where I Belong',
		artist : 'Dj Babyboi - Dopey',
		music : 'music/whereibelong.mp3'
	},
	{
		img : 'images/runaway.jpg',
		name : 'We Can Runaway',
		artist : 'Dj Loopy',
		music : 'music/wecanrunaway.mp3'
	},
	{
		img : 'images/burn.jpg',
		name : 'Usher - Burn Remix',
		artist : 'Dj Babyboi - Dj Stud',
		music : 'music/burn.mp3'
	},
	{
		img : 'images/attheclub.jpg',
		name : 'At The Club',
		artist : 'Dj Xoduzz Lucky ding Lazzie Boy',
		music : 'music/attheclub.mp3'
	},
	{
		img : 'images/texas.jpg',
		name : 'Texas Intro',
		artist : '3 Texas Boyz',
		music : 'music/texasintro.mp3'
	},
	{
		img : 'images/canoninb.jpg',
		name : 'Canon In B',
		artist : 'Dj Babyboi',
		music : 'music/canoninb.mp3'
	},	
	{
		img : 'images/resurrected.jpg',
		name : 'Resurrected',
		artist : 'Dj Babyboi - Dj Loopy',
		music : 'music/resurrected.mp3'
	},
	{
		img : 'images/brightside.jpg',
		name : 'Mr. Brightside',
		artist : 'Dj Babyboi - Dj Stud',
		music : 'music/brightside.mp3'
	},
	{
		img : 'images/luckystar.jpg',
		name : 'Lucky Star',
		artist : 'Dj Loopy - Dj Babyboi',
		music : 'music/luckystar.mp3'
	},
	{
		img : 'images/ecstacy.jpg',
		name : 'Ecstacy ATB',
		artist : 'Dj Loopy',
		music : 'music/ecstacy.mp3'
	},
	{
		img : 'images/elements.jpg',
		name : 'Elements',
		artist : 'Dj Babyboi-Trypsta-Sonic Zoom',
		music : 'music/elements.mp3'
	},
	{
		img : 'images/wannabewithme.jpg',
		name : 'Wanna Be With Me',
		artist : 'Dj Babyboi',
		music : 'music/wannabewithme.mp3'
	},
		{
		img : 'images/silentheart.jpg',
		name : 'Silent Heart',
		artist : 'Dj Burnz',
		music : 'music/silentheart.mp3'
	},
	{
		img : 'images/illflywithyou.jpg',
		name : 'I/ll Fly With You',
		artist : 'Dj StevenGotRemix-Japplez-Dj Sgr',
		music : 'music/illflywithyou.mp3'
	},
	{
		img : 'images/peace.jpeg',
		name : 'I Found Peace',
		artist : 'Dj TinmanHHH',
		music : 'music/ifoundpeace.mp3'
	},
		{
		img : 'images/notimeforlies.jpg',
		name : 'No Time For Lies',
		artist : 'Xoduzz-Invinhsible-Lonelyboi',
		music : 'music/notimeforlies.mp3'
	},
		{
		img : 'images/lies.jpg',
		name : 'Lies',
		artist : 'Dj Babyboi - Dj Loopy',
		music : 'music/lies.mp3'
	},
];

loadTrack(track_index);

function loadTrack(track_index){
	clearInterval(updateTimer);
	reset();

	curr_track.src = music_list[track_index].music;
	curr_track.load();

	track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
	track_name.textContent = music_list[track_index].name;
	track_artist.textContent = music_list[track_index].artist;
	now_playing.textContent	= "Playing music " + (track_index + 1) + " of " + music_list.length;

	updateTimer = setInterval(setUpdate, 1000);

	curr_track.addEventListener('ended', nextTrack);
	random_bg_color();
}

function random_bg_color(){
	let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
	let a;

	function populate(a){
		for(let i=0; i<6; i++){
			let x = Math.round(Math.random() * 14);
			let y = hex[x];
			a += y;
		}
		return a;
	}
	let Color1 = populate('#');
	let Color2 = populate('#');
	var angle = 'to right';

	let gradient = 'linear-gradient(' + angle + ',' + Color1 + ',' + Color2 + ")";
	document.body.style.background = gradient;
}
function reset(){
	curr_time.textContent = "00:00";
	total_duration.textContent = "00:00";
	seek_slider.value = 0;
}
function randomTrack(){
	isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
	isRandom = true;
	randomIcon.classList.add('randomActive');
}
function pauseRandom(){
	isRandom = false;
	randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
	let current_index = track_index;
	loadTrack(current_index);
	playTrack();
}
function playpauseTrack(){
	isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
	curr_track.play();
	isPlaying = true;
	track_art.classList.add('rotate');
	wave.classList.add('loader');
	playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
	curr_track.pause();
	isPlaying = false;
	track_art.classList.remove('rotate');
	wave.classList.remove('loader');
	playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
	if(track_index < music_list.length - 1 && isRandom === false){
		track_index += 1;
	} else if (track_index < music_list.length - 1 && isRandom === true){
		let random_index = Number.parseInt(Math.random() * music_list.length);
		track_index = random_index;
	} else {
		track_index = 0;
	}
	loadTrack(track_index);
	playTrack();
}
function prevTrack(){
	if(track_index > 0){
		track_index -=  1;
	} else {
		track_index = music_list.length -1;
	}
	loadTrack(track_index);
	playTrack();
}
function seekTo(){
	let seekto = curr_track.duration * (seek_slider.value / 100);
	curr_track.currentTime = seekto;
}
function setVolume(){
	curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
	let seekPosition = 0;
	if(!isNaN(curr_track.duration)){
		seekPosition = curr_track.currentTime * (100 / curr_track.duration);
		seek_slider.value = seekPosition;

		let currentMinutes = Math.floor(curr_track.currentTime / 60);
		let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
		let durationMinutes = Math.floor(curr_track.duration / 60);
		let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

		if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
		if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
		if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
		if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

		curr_time.textContent = currentMinutes + ":" + currentSeconds;
		total_duration.textContent = durationMinutes + ":" + durationSeconds;
	}
}