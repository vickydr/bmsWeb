function getitems() {
    var params = {
        url: "CakeCartServ",
        success: function (data) {
        	console.log(data);
            var itemDetails = JSON.parse(data);
            var template ='<div class="insertcake">\
            	<form action="CartAdd" method="get">\
                            <div col-lg-3 col-md-4 col-sm-6 col-xs-12>\
                            <div class ="image fit">\
                              <div class="hovereffect">\
                                <img class="img-responsive" src="*thumb*" alt="">\
                                <div class="overlay">\
                                <h2>*item-name*</h2>\
                                <h2>1kg = *price* RS</h2>\
            	<input type="text" style="display:none;" value="*pid*" name="id">\
                <input type="submit" value="Order">\
                             </div>\
                           </div>\
                           </div>\
            				</div>\
                           <div>\
            	</form>\
            	</div>';
            var tamilResult ="" ;
            for (var i = 0; i < itemDetails.length; i++) {
                   tamilResult += template.replace("*thumb*",
                		   itemDetails[i].url).replace("*item-name*",itemDetails[i].itemName).replace("*price*", itemDetails[i].itemPrice).replace("*pid*",itemDetails[i].itemId);
        }
           // console.log(tamilResult);
            document.getElementById("insertcake").innerHTML = tamilResult;
        }
    }
    $.ajax(params);
}
window.onload = getitems();