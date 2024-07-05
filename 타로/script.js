// JSON 파일을 불러오는 함수
async function loadTarotData() {
    // tarot.json 파일을 불러와서 JSON 데이터로 변환합니다.
    const response = await fetch('tarot.json');
    return response.json(); // JSON 데이터를 반환합니다.
}

// 3개의 고유한 숫자를 생성하는 함수
function generateUniqueNumbers() {
    let uniqueNumbers = []; // 고유한 숫자를 저장할 배열을 선언합니다.
    while (uniqueNumbers.length < 3) {
        let n = Math.floor(Math.random() * 21); // 0부터 20까지의 랜덤 숫자를 생성합니다.
        // 배열에 이미 포함된 숫자가 아닌 경우에만 배열에 추가합니다.
        if (!uniqueNumbers.includes(n)) {
            uniqueNumbers.push(n); // 중복되지 않는 숫자만 배열에 추가합니다.
        }
    }
    return uniqueNumbers; // 3개의 고유한 숫자를 반환합니다.
}

// 전역 변수 선언
var num = generateUniqueNumbers(); // 카드 번호 배열을 생성합니다.
var tarotData = null; // 타로 카드 데이터를 저장할 변수를 선언합니다.

// 페이지가 로드될 때 JSON 데이터를 불러옵니다.
window.onload = async function() {
    tarotData = await loadTarotData(); // 타로 데이터를 비동기적으로 로드합니다.
    console.log(tarotData)
};

// 카드 뽑기 버튼을 클릭하면 실행되는 함수
function pickupCards() {
    // 초기 화면을 감추고 카드 선택 화면을 표시합니다.
    document.getElementById("home").style.display = "none"; // 초기 화면을 숨깁니다.
    document.querySelectorAll(".card-layout").forEach(layout => {
        layout.style.display = "inline-block"; // 카드 선택 화면을 표시합니다.
    });
}

// 카드를 클릭했을 때 실행되는 함수
function cardClick(cardIndex) {
    // 타로 데이터가 로드되지 않았으면 함수를 종료합니다.
    if (!tarotData) return;

    const cardIds = ["pick1", "pick2", "pick3"]; // 카드 이미지 요소의 ID 배열
    const textIds = ["textSpace1", "textSpace2", "textSpace3"]; // 텍스트 요소의 ID 배열
    const timePeriods = ["past", "present", "future"]; // 시간대를 나타내는 배열

    const isReversed = Math.random() < 0.5; // 50% 확률로 정방향 또는 역방향을 결정합니다.

    // 클릭한 카드 이미지 요소와 텍스트 요소를 가져옵니다.
    const imgElement = document.getElementById(cardIds[cardIndex]);
    const textElement = document.getElementById(textIds[cardIndex]);

    imgElement.src = `img/${num[cardIndex]}.png`; // 카드 이미지를 설정합니다.

    const direction = isReversed ? "reversed" : "upright"; // 방향을 설정합니다.
    // 타로 데이터에서 해당 카드의 텍스트를 설정합니다.
    textElement.innerText = tarotData[num[cardIndex]][direction][timePeriods[cardIndex]];

    // 카드 방향에 따라 이미지를 회전시킵니다.
    if (isReversed) {
        imgElement.style.transform = "rotate(180deg)"; // 역방향일 경우 이미지를 180도 회전시킵니다.
    } else {
        imgElement.style.transform = "none"; // 정방향일 경우 이미지를 회전하지 않습니다.
    }
}
