// JSON 파일을 불러오는 함수
async function loadTarotData() {
    const response = await fetch('tarot.json');
    return response.json();
}

// 3개의 고유한 숫자를 생성하는 함수
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

// 전역 변수
var boolPast = true;
var num = letsPickTheNum();
var tarotData = null;

// 페이지 로드 시 JSON 데이터를 불러옴
window.onload = async function() {
    tarotData = await loadTarotData();
};

function pickup_click() {
    document.getElementById("home").style.display = "none";
    document.getElementById("layout0").style.display = "inline-block";
    document.getElementById("layout1").style.display = "inline-block";
    document.getElementById("layout2").style.display = "inline-block";
}

// 카드 클릭 시 처리하는 함수
function cardClick(cardIndex) {
    if (!tarotData) return;

    const cardIds = ["pick1", "pick2", "pick3"];
    const textIds = ["textSpace1", "textSpace2", "textSpace3"];
    const timePeriods = ["past", "present", "future"];
    
    const ForR = Math.random() < 0.5;

    const imgElement = document.getElementById(cardIds[cardIndex]);
    const textElement = document.getElementById(textIds[cardIndex]);
    
    imgElement.src = `img/${num[cardIndex]}.png`;
    const direction = ForR ? "upright" : "reversed";
    textElement.innerText = tarotData[num[cardIndex]][direction][timePeriods[cardIndex]];
    
    if (!ForR) {
        imgElement.style.transform = "rotate(180deg)";
    }
}
