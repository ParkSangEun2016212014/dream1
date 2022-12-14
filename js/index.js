// dream1-background

$(setTimeout(function () {

    alert("만나서 반갑습니다. \n꿈에 관한 질문 몇 가지만 하겠습니다.")

    alert("대답하기 힘든 질문은 취소(아니오)를 눌러도 괜찮아요.\n가볍게 시작해보죠.")




    var userInput = prompt("이름이 어떻게 되세요?" + "");
    alert(userInput + "이라, 멋진 이름이군요!");
    var first = 0
    var second = 0

    var userInput_2 = prompt("어릴 적 장래희망은 뭐였나요? \n참고로 당시에는 교사, 공무원, 운동선수 등이 인기 있었네요." + "");

    if (userInput_2 == null) {
        alert("괜찮아요. 기억 안 날 수도 있죠.")
        var first = 1
        var second = 0

    } else {
        alert(userInput_2 + ", 그것도 좋은 선택이었죠.")
        var first = 0
        var second = 1
    }

    // 직업 입력했을 때
    if (first == 0) {
        var userInput = prompt("그 직업을 골랐던 이유가 있나요?" + "")
        alert("그렇군요...")
        //취소를 눌렀을 때
    } else if (second == 0) {
        alert("아니면 말하기 싫으실 수도 있고요.")
    }
    location.href = "https://parksangeun2016212014.github.io/dream2";

}, 1000));