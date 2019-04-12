'use strict';

let ads1 = document.getElementsByClassName('adsbygoogle');
for(let a of ads1){
	a.remove();
}