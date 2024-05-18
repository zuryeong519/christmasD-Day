// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
    // 기존에 모달이 있다면 제거합니다.
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }

    // 모달 요소를 생성합니다.
    const modal = document.createElement('div');
    modal.className = 'modal hidden';

    // 모달 내용을 담는 컨테이너를 생성합니다.
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content zoomIn';

    // 이미지를 표시할 요소를 생성합니다.
    const image = document.createElement('div');
    image.style.backgroundImage = `url(${imageUrl})`;
    image.alt = 'Door Image';
    image.style.width = '100%';
    image.style.height = '211px';

    // 텍스트를 표시할 요소를 생성합니다.
    const textElement = document.createElement('p');
    textElement.textContent = text;

    // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
    modalContent.appendChild(image);
    modalContent.appendChild(textElement);

    // 모달에 모달 컨텐트를 추가합니다.
    modal.appendChild(modalContent);

    // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
    modal.addEventListener('click', () => {
        modal.remove(); // 모달을 문서에서 제거합니다.
    });

    // 문서에 모달을 추가합니다.
    document.body.appendChild(modal);
    // 모달을 표시합니다.
    setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
    { "number": 1, "message": "크리스마스의 기적은 당신을 기다리고 있어요." },
    { "number": 2, "message": "이번 크리스마스는 당신의 꿈이 이루어질 거예요." },
    { "number": 3, "message": "행복은 작은 것에서 시작돼요. 지금 당신은 그것을 발견할 거예요." },
    { "number": 4, "message": "당신의 삶은 밝고 아름다운 빛으로 가득할 거예요." },
    { "number": 5, "message": "매일매일 크리스마스처럼 특별한 날이 될 거예요." },
    { "number": 6, "message": "당신의 삶에는 항상 기적이 있을 거예요." },
    { "number": 7, "message": "이번 크리스마스에는 특별한 선물이 당신을 기다리고 있어요." },
    { "number": 8, "message": "작은 행복들이 큰 기쁨으로 이어질 거예요." },
    { "number": 9, "message": "당신은 크리스마스의 주인공이에요." },
    { "number": 10, "message": "당신의 삶은 크리스마스 캐롤처럼 달콤할 거예요." },
    { "number": 11, "message": "크리스마스의 기쁨이 당신의 삶을 가득 채울 거예요." },
    { "number": 12, "message": "당신은 크리스마스의 기적 같은 사람이에요." },
    { "number": 13, "message": "당신의 하루가 항상 크리스마스처럼 특별하길." },
    { "number": 14, "message": "당신의 꿈은 이번 크리스마스에 이뤄질 거예요." },
    { "number": 15, "message": "당신의 삶은 마치 크리스마스 트리처럼, 희망과 기쁨으로 장식되어 있어요." },
    { "number": 16, "message": "당신의 웃음은 마치 크리스마스 벨 소리처럼, 사랑과 기쁨을 전해줘요." },
    { "number": 17, "message": "당신의 삶은 마치 크리스마스 캔들처럼, 밝고 따뜻한 희망을 불러와요." },
    { "number": 18, "message": "당신은 마치 크리스마스 이브의 선물처럼, 모두에게 사랑받는 존재에요." },
    { "number": 19, "message": "당신은 무엇이든 이룰 수 있는 힘을 갖고 있어요." },
    { "number": 20, "message": "오늘은 당신의 행운의 시작일 거예요." },
    { "number": 21, "message": "마음을 열고 주변을 둘러보세요, 당신의 행운이 기다리고 있어요." },
    { "number": 22, "message": "오늘은 당신이 더 나은 선택을 할 수 있는 날이에요." },
    { "number": 23, "message": "당신은 성공의 열쇠를 이미 손에 쥐고 있어요." },
    { "number": 24, "message": "당신의 노력은 결코 헛되지 않을 거예요." }
];

