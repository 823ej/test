// JSON 파일을 불러오는 함수	
async function loadTarotData() {	
    // tarot.json 파일을 불러와서 JSON 데이터로 변환	
    const response = await fetch('tarot.json');	
    return response.json();	
}	

// 3개의 고유한 숫자를 생성하는 함수	
function generateUniqueNumbers() {	
    let uniqueNumbers = []; // 고유한 숫자를 저장할 배열	
    while (uniqueNumbers.length < 3) {	
        let n = Math.floor(Math.random() * 21); // 0부터 20까지의 랜덤 숫자 생성	
        if (!uniqueNumbers.includes(n)) {	
            uniqueNumbers.push(n); // 중복되지 않는 숫자만 배열에 추가	
        }	
    }	
    return uniqueNumbers;	
}	

// 전역 변수	
var num = generateUniqueNumbers(); // 카드 번호 배열	
var tarotData = null; // 타로 카드 데이터 저장 변수	

// 페이지 로드 시 JSON 데이터를 불러옴	
window.onload = async function() {	
    tarotData = await loadTarotData(); // 타로 데이터 로드	
};	

function pickupCards() {	
    // 카드를 뽑기 버튼을 클릭하면 처음 화면을 감추고 카드 선택 화면을 표시	
    document.getElementById("home").style.display = "none";	
    document.querySelectorAll(".card-layout").forEach(layout => {	
        layout.style.display = "inline-block";	
    });	
}	

// 카드 클릭 시 처리하는 함수	
function cardClick(cardIndex) {	
    if (!tarotData) return; // 타로 데이터가 로드되지 않았으면 함수 종료	

    const cardIds = ["pick1", "pick2", "pick3"]; // 카드 이미지 요소의 ID	
    const textIds = ["textSpace1", "textSpace2", "textSpace3"]; // 텍스트 요소의 ID	
    const timePeriods = ["past", "present", "future"]; // 시간대 배열	

    const isReversed = Math.random() < 0.5; // 50% 확률로 정방향 또는 역방향 결정	

    const imgElement = document.getElementById(cardIds[cardIndex]); // 클릭한 카드 이미지 요소	
    const textElement = document.getElementById(textIds[cardIndex]); // 클릭한 카드에 해당하는 텍스트 요소	

    imgElement.src = `img/${num[cardIndex]}.png`; // 카드 이미지 설정	

    const direction = isReversed ? "reversed" : "upright"; // 방향 설정	
    textElement.innerText = tarotData[num[cardIndex]][direction][timePeriods[cardIndex]]; // 타로 데이터에 맞는 텍스트 설정	

    if (isReversed) {	
        imgElement.style.transform = "rotate(180deg)"; // 역방향일 경우 이미지 회전	
    } else {	
        imgElement.style.transform = "none"; // 정방향일 경우 회전하지 않음	
    }	
}