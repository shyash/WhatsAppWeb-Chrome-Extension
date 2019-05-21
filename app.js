document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  console.log(keyName) 
  if (keyName === 'Control') {

  	 	document.querySelector("._3F6QL").classList.add("focused")
	    document.querySelector("._39LWd").style.visibility = "hidden"
	    document.querySelector("._2S1VP").innerHTML += `<img class="copyable-text selectable-text b61 emoji wa" data-plain-text="😂" alt="😂" draggable="false" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-is-emoji="true" style="background-position: -20px -20px;">`
	    document.querySelector("#main > footer > div._3pkkz.copyable-area > div:nth-child(3)").innerHTML = `<button class="_35EW6"><span data-icon="send" class=""> <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".45" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"> </path></svg></span></button>`
 	
  }
  if (keyName === 'Shift') {
  	
  		document.querySelector("._3F6QL").classList.add("focused")
	    document.querySelector("._39LWd").style.visibility = "hidden"
	    document.querySelector("._2S1VP").innerHTML += `<img class="copyable-text selectable-text b75 emoji wa" data-plain-text="🤣" alt="🤣" draggable="false" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-is-emoji="true" style="background-position: -40px -20px;">`
		document.querySelector("#main > footer > div._3pkkz.copyable-area > div:nth-child(3)").innerHTML = `<button class="_35EW6"><span data-icon="send" class=""> <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".45" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"> </path></svg></span></button>`
 	
  }
  }, false);