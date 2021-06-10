function calc (val) {
    
			document.getElementById('screendiv').value=document.getElementById('screendiv').value+val;
}
function reset () {
document.getElementById('screendiv').value=""
				
}
function equall () {
			var text =	document.getElementById('screendiv').value
			var result =eval(text)
			document.getElementById('screendiv').value=result
			
}

				
