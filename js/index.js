let temp = 0;

function printClock() {
    
    var clock = document.getElementById("clock");            // 출력할 장소 선택
    var currentDate = new Date();                                     // 현재시간
    var calendar = currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate() // 현재 날짜
    var amPm = 'AM'; // 초기값 AM
    var currentHours = addZeros(currentDate.getHours(),2); 
    var currentMinute = addZeros(currentDate.getMinutes() ,2);
    var currentSeconds =  addZeros(currentDate.getSeconds(),2);
    var want_time = parseInt(document.getElementById('want_time').value);
    var want_time_min = parseInt(document.getElementById('want_time_min').value);

    if(currentHours >= 12){ // 시간이 12보다 클 때 PM으로 세팅, 12를 빼줌
        amPm = 'PM';
        currentHours = addZeros(currentHours - 12,2);
    }


    if(currentHours >= (want_time-1)){ // 본문에서 입력받은 원하는 시간 이후에 색이 빨간색으로 변함.

        if(currentMinute >= (60-want_time_min))
        {
            currentHours = '<span style="color:#de1951;">'+currentHours+'</span>'
            currentMinute= '<span style="color:#de1951;">'+currentMinute+'</span>'
            currentSeconds= '<span style="color:#de1951;">'+currentSeconds+'</span>'
        } 
    }

    if(currentHours == (want_time))
    { //설정한 퇴근 시간이 되면 alert 알림 표시
        if(currentMinute==(want_time_min))
        {
        alert("지정하신 퇴근 타이밍이 되었습니다.");
        }
    }
    clock.innerHTML = currentHours+":"+currentMinute+":"+currentSeconds +" <span style='font-size:50px;'>"+ amPm+"</span>"; //날짜를 출력해 줌
    
    setTimeout("printClock()",1000);         // 1초마다 printClock() 함수 호출
}

function addZeros(num, digit) { // 자릿수 맞춰주기
        var zero = '';
        num = num.toString();
        if (num.length < digit) {
        for (i = 0; i < digit - num.length; i++) {
            zero += '0';
        }
        }
        return zero + num; //인라인 함수 하지 말기
}

function blink() {
    let color = $('body').css('color');
    if(color == 'rgb(255, 0, 0)' && temp == 0) {
        $('body').css('color','orange');
    } else if (color == 'rgb(255, 165, 0)') {
        $('body').css('color','yellow');
    } else if (color == 'rgb(255, 255, 0)') {
        $('body').css('color','green');
    } else if (color == 'rgb(0, 128, 0)') {
        $('body').css('color','blue');
    } else if (color == 'rgb(0, 0, 255)') {
        $('body').css('color','navy');
    } else if (color == 'rgb(0, 0, 128)') {
        $('body').css('color','purple');
    } else {
        $('body').css('color','red');
    }
    setTimeout('blink()', 70);
}

 /*function move() {
    let align = $('body').css('text-align');
    if(align == 'left') {
        $('body').css('text-align','center');
        temp = 1;
    } else if(align == 'center' && temp == 1) {
        $('body').css('text-align','right');
        temp = 0;
    } else if(align == 'right') {
        $('body').css('text-align','center');
    } else {
        $('body').css('text-align','left');
    }
    setTimeout('move()', 50);
}*/


$(document).ready(function() {
    $('body').onload = printClock();
    $('body').onload = blink();
    $('body').onload = move();
    // Handler for .ready() called.
});
