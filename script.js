const searchInput = document.querySelector("#search-input");

var a = document.querySelector("#one");

searchInput.addEventListener("keydown", function(event){
    if(event.code == "Enter"){
        search();
    }
});
// a.addEventListener("click",search());

function search(){
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q="+ input +"&sxsrf=AB5stBjiycBuj5Q9B8NnfSrSMyY_sdLcLQ%3A1689075824065&source=hp&ei=cECtZLaTAoznwQPBiaPAAg&iflsig=AD69kcEAAAAAZK1OgLBbDGqJ9hDjG383sg5DQl-iW61t&ved=0ahUKEwi2i_bjyYaAAxWMc3AKHcHECCgQ4dUDCAk&uact=5&oq="+ input +"&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEIAEELEDEIMBMggILhCxAxCABDIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICC4QigUQsQMyCwgAEIAEELEDEIMBMggIABCABBCxAzIFCAAQgAQyBQgAEIAEOgcIIxDqAhAnOgsILhCABBCxAxCDAToRCC4QgwEQxwEQsQMQ0QMQgAQ6BwgjEIoFECc6BwguEIoFECc6CAguEIAEELEDOgsIABCKBRCxAxCDAVCXHVieJmD4LGgBcAB4AIABkAGIAZ0FkgEDMC41mAEAoAEBsAEK&sclient=gws-wiz";
}