let shownResult = false;

async function loadTarotData() {
    const response = await fetch('fortune.json');
    return response.json();
}

function pickup_click() {
    if (shownResult) return; // 이미 결과를 보여준 경우, 더 이상 동작하지 않음
    shownResult = true;

    // 세 장의 카드를 랜덤하게 뽑아서 이미지와 결과 텍스트를 설정
    let cardNumbers = [1, 2, 3];
    cardNumbers.forEach(async cardNumber => {
        let cardImageElement = document.getElementById(`pick${cardNumber}`);
        let resultTextElement = document.getElementById(`pick${cardNumber}Text`);

        // JSON 데이터를 불러오기
        const tarotData = await loadTarotData();

        // 랜덤한 카드 번호를 가져오고, 역방향 여부에 따라 결과 설정
        let cardIndex = getRandomCard();
        let cardData = tarotData.past; // 예시로 과거 데이터 사용

        if (cardData.reversed && cardData.reversed.hasOwnProperty(cardIndex.toString())) {
            resultTextElement.textContent = cardData.reversed[cardIndex];
            // 역방향 카드 이미지로 설정
            cardImageElement.src = `img/reverse/card${cardIndex}.png`;
        } else {
            resultTextElement.textContent = cardData[cardIndex];
            // 정방향 카드 이미지로 설정
            cardImageElement.src = `img/card${cardIndex}.png`;
        }
    });
}
