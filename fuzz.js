
var t;

var i = 0;

function fuzz(){

//alert(input.value);

var urls = input.value.split("\n");

t = setInterval($=>{

if(i < urls.length){
    
    chrome.tabs.create({"url": "http://" + urls[i] + "###" + urls[i]});

    i++;


}
else{
  
    clearInterval(t);
  
}

},88);


}





document.addEventListener("DOMContentLoaded", function() {
     
   start.onclick = fuzz;
   
   chrome.tabs.onUpdated.addListener(function (tabId , info, tab) {
   
   if (tab.status === "complete") {
      
        if(tab.url.lastIndexOf("###") !== -1){
           
           if(tab.title === tab.url.substring(tab.url.lastIndexOf("###")+3)) {
             log.append(tab.title + "\n");
           }
        
           chrome.tabs.remove(tabId);
        }
   }
   });


});



