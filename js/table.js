function getitems() {
    var params = {
        url: "ListCart",
        success: function (data) {
        	console.log(data);
            var itemDetails = JSON.parse(data);
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
            var tamilResult ="" ;
            for (var i = 0; i < itemDetails.length; i++) {
                   tamilResult += template.replace("*thumb*",
                		   itemDetails[i].curl).replace("*item-name*",itemDetails[i].citemName).replace("*price*", itemDetails[i].citemPrice).replace("*pid*",itemDetails[i].cid).replace("*email*",itemDetails[i].cemail).replace("*item-id*",itemDetails[i].citemId);
        }
           // console.log(tamilResult);
            document.getElementById("rep").innerHTML = tamilResult;
        }
    }
    $.ajax(params);
}
window.onload = getitems();