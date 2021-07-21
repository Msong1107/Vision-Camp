window.addEventListener("click", init, false);


function init() {
    document.forms[0].elements[7].addEventListener("click", quizCheck, false);
}

function quizCheck() {
    var examineeName = document.forms[0].name.value; // 응시자 이름
    var answer = [5 + 6, 8 - 3, 76, 15 / 3, 8 + 6 - (32) / 2]; //시험 문제의 정답
    var correct = 0; //정답 개수 카운트
    var questionElement = new Array; // 5개의 문제가 차례로 들어가는 변수
    var today = new Date(); // 날짜 작성을 위한 변수
    var year = today.getFullYear()
    var month = today.getMonth() + 1
    var date = today.getDate()
    var dayLabel = today.getDay()
    var week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    var weekToday = week[dayLabel];
    var outputString = ""; //최정 출력될 HTML 문자열을 위한 변수

    console.log(year);
    console.log(month);
    console.log(date);
    console.log(dayLabel);
    console.log(weekToday);

    for (var i = 0; i < 5; i++) {
        questionElement.push(document.forms[0].elements[i + 2].value);
        if (answer[i] == questionElement[i]) {
            correct += 1;
            document.forms[0].elements[i + 2].classList.remove("fail");
        } else {
            document.forms[0].elements[i + 2].classList.add("fail");
        }
    }
    var sum = 20 * correct;

    outputString = "<p>" + examineeName + " 님의</p>";
    outputString += "<p>" + year + "년 " + month + "월 " + date + "일 " + weekToday + " 계산 퀴즈 결과</p>";
    outputString += "<p>총 " + answer.length + "문제 중 " + (answer.length - correct) + "문제를 틀렸습니다.</p>";
    outputString += "<p>틀린 답은 빨간색으로 표시 하였습니다.</p>";
    outputString += "<p>최종 점수는 <strong>" + sum + "점</strong> 입니다.</p>";
    document.getElementById('resultarea').innerHTML = outputString;
    document.getElementById('resultarea').style.visibility = 'visible';
}