function letsPickTheNum() {
    let IndexNum = [];
    while (IndexNum.length < 3) {
        let n = Math.floor(Math.random() * 21);
        if (!IndexNum.includes(n)) {
            IndexNum.push(n);
        }
    }
    return IndexNum;
}

var boolPast = true; 
var num = letsPickTheNum();

function pickup_click() {
    document.getElementById("home").style.display = "none";
    ["layout0", "layout1", "layout2"].forEach(id => {
        document.getElementById(id).style.display = "inline-block";
    });

    const directions = [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)];

    const handleClick = (index, elementId, imgId, textId, direction, timeFrame) => {
        document.getElementById(elementId).onclick = function() {
            document.getElementById(imgId).src = `img/${num[index]}.png`;
            boolPast = false;
            const directionText = direction ? "역방향" : "";
            this.style.transform = direction ? "rotate(180deg)" : "";
            document.getElementById(textId).innerText = `${timeFrame}${directionText}-${num[index]}`;
        };
    };

    handleClick(0, "layout0", "pick1", "textSpace1", directions[0], "과거");
    handleClick(1, "layout1", "pick2", "textSpace2", directions[1], "현재");
    handleClick(2, "layout2", "pick3", "textSpace3", directions[2], "미래");
}
