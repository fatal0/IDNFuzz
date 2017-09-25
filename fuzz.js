
var t;

var i = 0;

function fuzz(){

//alert(input.value);

var urls = input.value.split("\n");

t = setInterval($=>{

if(i < urls.length){
    
    chrome.tabs.create({"url": "http://" + urls[i]});

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
      
        if(tab.url.startsWith("chrome") === false){
           
           if(tab.title.startsWith("xn--") === false) {
             log.append(tab.url + "------" + tab.title + "\n");
             localStorage.setItem(tab.url, tab.title);
           }
        
           chrome.tabs.remove(tabId);
        }
   }
   });


});


