
function log() {
	console.log("haha");
};



function y(a){
	if (a < 0) {
		return}
	else if (a == 1) {
		window.setTimeout(log, 2000);
		return y(a-1)
	}
	else if (a == 0) {
		window.setTimeout(log, 400);
       		return y(a-1)	}
	else {
		return y(a-1) ;}
	};



function flickr(string, 
