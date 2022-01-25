
function submit(){
    reqdate = new Date(document.getElementById("when").value)

    curdate = new Date()

    timeleft = reqdate-curdate-19800000
    
    totalseconds = timeleft/1000 
    days = Math.floor(totalseconds / (24*60*60))
    hours = Math.floor(totalseconds/3600)%24
    mins = Math.floor(totalseconds/60)%60
    secs = Math.floor(totalseconds%60)

    document.getElementById("days").innerHTML=days
    document.getElementById("hours").innerHTML=hours
    document.getElementById("mins").innerHTML=mins
    document.getElementById("secs").innerHTML=secs
    

    occasion = document.getElementById("occasion").value

    document.getElementById("heading").innerHTML = occasion
    setInterval(submit, 1000)
}







