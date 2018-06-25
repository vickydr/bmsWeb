function getitems() {
    var params = {
        url: "ListCart",
        success: function (data) {
        	console.log(data);
            var cartDetails = JSON.parse(data);
            var template ='<div class="rep">\
            	<table style="width:70%;" >\
            	  <tr>\
            	    <th>Firstname</th>\
            	    <th>Lastname</th>\
            	    <th>Age</th>\
            	  </tr>\
            	<tr>\
                <td><img src="*thumb*" height="42" width="42"></td>\
                <td>*item-name*</td>\
                <td>*price*</td>\
                </tr>\
            	</table>\
            	</div>';
            var tamilResults ="";
            for (var i = 0; i < cartDetails.length; i++) {
                   tamilResults += template.replace("*thumb*",
                		   cartDetails[i].curl).replace("*item-name*",cartDetails[i].citemName).replace("*price*", cartDetails[i].citemPrice);
        }
           console.log(tamilResults);
            document.getElementById("rep").innerHTML = tamilResults;
        }
    }
    $.ajax(params);
}
window.onload = getitems();