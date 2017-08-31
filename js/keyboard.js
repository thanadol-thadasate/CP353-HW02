$(function(){
    var $write = $('#write')
     
    $('#keyboard button').click(function(){
        var $this = $(this),
            character = $this.html();
         
        // Delete
        if ($this.hasClass('delete')) {
            var html = $write.html();
             
            $write.html(html.substr(0, html.length - 1));
            return false;
        }
		
		// Clear
		if ($this.hasClass('clear')) {
			var html = $write.html();

			$write.html(html.substr(0, html.leng - 9999999));
			return false;
		}
         
        // Special characters
        if ($this.hasClass('symbol')) character = $this.html();
        if ($this.hasClass('space')) character = ' ';
        if ($this.hasClass('tab')) character = "\t";
        if ($this.hasClass('enter')) character = "\n";
         
         
        // Add the character
        $write.html($write.html() + character);
    });
});

function input(write) {
	document.getElementById(this).innerHTML = document.getElementById(this).innerHTML + write;
}