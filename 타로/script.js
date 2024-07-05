// JSON 파일을 불러오는 함수
async function loadTarotData() {
    const response = await fetch('fortune.json');
    return response.json();
}

let shownResult = false;

function pickup_click() {
    if (shownResult) return; // 이미 결과를 보여준 경우, 더 이상 동작하지 않음
    shownResult = true;

    // 세 장의 카드를 랜덤하게 뽑아서 이미지와 결과 텍스트를 설정
    let cardNumbers = [1, 2, 3];
    cardNumbers.forEach(cardNumber => {
        let cardImageElement = document.getElementById(`pick${cardNumber}`);
        let resultTextElement = document.getElementById(`pick${cardNumber}Text`);
        let cardIndex = getRandomCard();
        cardImageElement.src = `img/card${cardIndex}.png`;
        resultTextElement.textContent = getResultText(cardNumber, cardIndex);
    });
}
    if (!ForR) {
        imgElement.style.transform = "rotate(180deg)";
    }

