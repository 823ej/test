// 카드 클릭 시 처리하는 함수
function cardClick(cardIndex) {
    if (!tarotData) return;

    const cardIds = ["pick1", "pick2", "pick3"];
    const textIds = ["textSpace1", "textSpace2", "textSpace3"];
    const timePeriods = ["past", "present", "future"];

    // 무작위로 정방향 또는 역방향 선택
    const isReversed = Math.random() < 0.5;

    const imgElement = document.getElementById(cardIds[cardIndex]);
    const textElement = document.getElementById(textIds[cardIndex]);

    imgElement.src = `img/${num[cardIndex]}.png`;

    // 선택된 방향에 따라 데이터 설정
    const direction = isReversed ? "reversed" : "upright";
    textElement.innerText = tarotData[num[cardIndex]][direction][timePeriods[cardIndex]];

    // 역방향인 경우 이미지를 회전
    if (isReversed) {
        imgElement.style.transform = "rotate(180deg)";
    } else {
        imgElement.style.transform = "none";
    }
}
