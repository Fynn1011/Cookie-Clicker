var valueKeks = 0; 
var multiKeks = 1; 
var kostenMultiKeks = 30; 
var upgradeLevel = 1; 
var timeKeks = 1; 
var kostenTime = 50; 
var levelTime = 1; 
var timePlayedS = 0; 
var timePlayedMin = 0; 
var timePlayedH = 0; 
var OneKCookieDisplay = false; 
var TenKCookieDisplay = false; 
var HundredKCookieDisplay = false; 
var nmbClicks = 0; 
var overallKeks = 0; 
var autoInterval = 1000;
var kostenInterval = 100; 
var levelInterval = 1; 
var prestigeMulti = 1;
var valueKeksM = 0;  
var valueKeksMr = 0; 
var valueKeksTr = 0; 
var bigDis = true;
var settingsDis = false;
const million = 1000000;
const billion = 1000000000;
const trillion = 1000000000000;
var showVer = false;
var hideBorder = false;
var showColor = false;

document.getElementById("keks").addEventListener("click", keksDazu, true);
document.getElementById("cookieAlt").addEventListener("click", keksDazu, true);
refresh();

function keksDazu () {
    valueKeks = (valueKeks + multiKeks)  * prestigeMulti;
    overallKeks = (overallKeks + multiKeks) * prestigeMulti;
    nmbClicks = nmbClicks + 1;
    if (valueKeks >= 1000 && !OneKCookieDisplay) {
        const message1K = "Congrats for reaching 1k cookies. Now try to reach 10k";
        alert(message1K);
        OneKCookieDisplay = true;
    } if (valueKeks >=10000 && !TenKCookieDisplay) {
        const message10K = "Good job buddy 10k baby. Keep going";
        alert(message10K)
        TenKCookieDisplay = true;
    } if (valueKeks >= 100000 && !HundredKCookieDisplay) {
        const message100K = "Goodlike!!!";
        alert(message100K); 
        HundredKCookieDisplay = true;
    }
    refresh();
}

function multiUpgrade () {
    if (valueKeks >= kostenMultiKeks) {
        multiKeks = multiKeks + 0.5;
        valueKeks = valueKeks - kostenMultiKeks; 
        kostenMultiKeks = kostenMultiKeks * 1.5;
        upgradeLevel = upgradeLevel +1;
        refresh();
    } else {
        document.getElementById("alert").innerHTML = "Not enough Cookies";
        setTimeout(()=>{
            document.getElementById("alert").innerHTML = ""  
        },5000);
    }
}

function refresh () {
    document.getElementById("kosten").innerHTML = "Upgrade costs for click level " + (parseFloat(upgradeLevel) + 1) + " are: " + kostenMultiKeks.toFixed(2) + " cookies";
    document.getElementById("kostenZeit").innerHTML = "Upgrade costs for automatic click level " + (parseFloat(levelTime) + 1) + " are: " + kostenTime.toFixed(2) + " cookies";
    document.getElementById("clicks").innerHTML = "Times clicked: " + nmbClicks;
    document.getElementById("gesamt").innerHTML = "Overall cookies obtained: " + overallKeks.toFixed(2);
    document.getElementById("intervalKosten").innerHTML = "Interval for autoclick: " + autoInterval + "ms " + "| Upgrade costs are " + kostenInterval.toFixed(2) + " cookies"
    disCheck();
    showAltCookie();
    borderHide();
    if (timePlayedMin == 0 && timePlayedH == 0) {
        document.getElementById("zeit").innerHTML = "Time played: " + timePlayedS +"s";
    } if (timePlayedMin >= 1 && timePlayedH == 0) {
        document.getElementById("zeit").innerHTML = "Time played: " + timePlayedMin +"min " + timePlayedS + "s";
    } if (timePlayedH >= 1) {
        document.getElementById("zeit").innerHTML = "Time played: " + timePlayedH + "h " + timePlayedMin + "min " + timePlayedS + "s";
    }
}

function timeUpdate () {
    if (valueKeks >= kostenTime) {
        timeKeks = timeKeks * 1.3;
        valueKeks = valueKeks -kostenTime;
        kostenTime = kostenTime * 1.27;
        levelTime = levelTime + 1;
     } else {
        document.getElementById("alert").innerHTML = "Not enough Cookies";
        setTimeout(()=>{
            document.getElementById("alert").innerHTML = "";
        },5000);
    }
}    

setInterval (()=>{
    valueKeks = valueKeks + timeKeks / autoInterval;
    overallKeks = overallKeks + timeKeks / autoInterval;
    refresh();
},1)

setInterval (()=>{
    timePlayedS = timePlayedS + 1;
    if (timePlayedS >= 60) {
        timePlayedMin = timePlayedMin + 1;
        timePlayedS = 0;
    } if (timePlayedMin >= 60) {
        timePlayedMin = 0;
        timePlayedH = 1;
    }
    refresh();
},1000)

function timeMarginUpdate () {
    if (valueKeks >= kostenInterval) {
        if (autoInterval >= 10) {
            autoInterval = autoInterval - 10;
            valueKeks = valueKeks - kostenInterval;
            kostenInterval = kostenInterval * 1.75;
            levelInterval = levelInterval + 1;
        } else {
            document.getElementById("intervalKosten").innerHTML = "Minimal autoclick interval reached (10ms)";
        }
    } else {
        document.getElementById("alert").innerHTML = "Not enough Cookies";
        setTimeout(()=>{
            document.getElementById("alert").innerHTML = ""  
        },5000);
    }
}

function resetAsk () {
    document.getElementById("resetText").style.display = "block";
    document.getElementById("resetConfirm").style.display = "block";
    document.getElementById("resetDecline").style.display = "block";
}

function decline () {
    document.getElementById("resetText").style.display = "none";
    document.getElementById("resetConfirm").style.display = "none";
    document.getElementById("resetDecline").style.display = "none";
}

function ogState () {
    valueKeks = 0;
    multiKeks = 1;
    kostenMultiKeks = 30;
    upgradeLevel = 1;
    timeKeks = 0;
    kostenTime = 50;
    levelTime = 1;
    timePlayedS = 0;
    timePlayedMin = 0; 
    timePlayedH = 0;
    OneKCookieDisplay = false;
    nmbClicks = 0;
    overallKeks = 0;
    autoInterval = 1000;
    kostenInterval = 100;
    levelInterval = 1;
    document.getElementById("resetText").style.display = "none";
    document.getElementById("resetConfirm").style.display = "none";
    document.getElementById("resetDecline").style.display = "none";
}

function dropdown () {
    document.getElementById("contentDrop").style.display = "block";
    document.getElementById("burgerMenu").style.display = "none";
    document.getElementById("cross").style.display = "block";
    document.getElementById("settings").style.display = "block";
}  

function dropdownReverse () {
    document.getElementById("contentDrop").style.display = "none";
    document.getElementById("burgerMenu").style.display = "block";
    document.getElementById("cross").style.display = "none";
}

function prestige () {
    if (valueKeks / 1000 >= 1) {
        prestigeMulti = prestigeMulti + (valueKeks / 1000);
        valueKeks = valueKeks - 1000;
    } else {
        document.getElementById("alert").innerHTML = "Not enough Cookies. You need atleast 1000 Cookies";
        setTimeout(()=>{
            document.getElementById("alert").innerHTML = "";
        },5000)
    }
}

function biggNmb () {
    var checkbox = document.getElementById("smallerNmb")
    if (checkbox.checked) {
        bigDis = true;
    } else {
        bigDis = false;
    }
}

function disCheck () {
    biggNmb();
    if (bigDis == false) {
        if (valueKeks <= million) {
            document.getElementById("output").innerHTML = "Cookies: " + valueKeks.toFixed(2);
        } else if (valueKeks >= million && valueKeks <= billion) {
            valueKeksM = valueKeks / million;
            document.getElementById("output").innerHTML = "Cookies: " + valueKeksM.toFixed(3) + "million";
        } else if (valueKeks > billion && valueKeks < trillion) {
            valueKeksMr = valueKeks / billion;
            document.getElementById("output").innerHTML = "Cookies: " + valueKeksMr.toFixed(3) + "billion";
        } else if (valueKeks >= trillion) {
            valueKeksTr = valueKeks / trillion;
            document.getElementById("output").innerHTML = "Cookies: " + valueKeksTr.toFixed(3) + "trillion";
        }
    } if (bigDis == true) {
        document.getElementById("output").innerHTML = "Cookies: " + valueKeks.toFixed(2);
    }
}

function showSettings () {
    if(settingsDis == false) {
        document.getElementById("options").style.display = "block";
        settingsDis = true;
    } else if (settingsDis == true){
        document.getElementById("options").style.display = "none";
        settingsDis = false;
    }
}

function showAltCookie () {
    var checkbox = document.getElementById("option2");
    if (checkbox.checked) {
        document.getElementById("cookieAlt").style.display = "block";
        document.getElementById("keks").style.display = "none";
    } else {
        document.getElementById("cookieAlt").style.display = "none";
        document.getElementById("keks").style.display = "block";
    }
}

function versionMenu () {
    if (showVer == false) {
        document.getElementById("version").style.display = "block";
        showVer = true;
    } else if (showVer == true) {
        document.getElementById("version").style.display = "none";
        showVer = false;
    }
}

function borderHide () {
    var checkbox = document.getElementById("noBorder");
    if (checkbox.checked) {
        document.getElementById("")
    }
}

function changeBgMenu () {
    if (showColor == false) {
        document.getElementById("bgColor").style.display = "block";
        document.getElementById("enterColor").style.display = "block";
        document.getElementById("linkPicker").style.display = "block";
        showColor = true;
    } else if (showColor == true) {
        document.getElementById("bgColor").style.display = "none";
        document.getElementById("enterColor").style.display = "none";
        document.getElementById("linkPicker").style.display = "none";
        showColor = false;
    }
}

//function changeBg () {
//    var hexcodeColor = document.getElementById("enterColor");
//    document.getElementsByName("body").style.background-color = "hexcodeColor";
//}