function check(){
    var score=0
    var right_ans_1=document.getElementById('q1_a1');
    var q1_ans_2=document.getElementById('q1_a2');
    var q1_ans_3=document.getElementById('q1_a3');
    var q1_ans_4=document.getElementById('q1_a4');
    if (right_ans_1.checked==true){
        score++
        alert('q1 ans is right');
    }
    else{
        alert('q1 ans is wrong');
    }
    var right_ans_2=document.getElementById('q2_a2');
    var q2_ans_2=document.getElementById('q2_a1');
    var q2_ans_3=document.getElementById('q2_a3');
    var q2_ans_4=document.getElementById('q2_a4');
    if (right_ans_2.checked==true){
        score++
        alert('q2 ans is right');
    }
    else{
        alert('q2 ans is wrong');
    }
    var right_ans_3=document.getElementById('q3_a3');
    var q3_ans_2=document.getElementById('q3_a1');
    var q3_ans_3=document.getElementById('q3_a2');
    var q3_ans_4=document.getElementById('q3_a4');
    if (right_ans_3.checked==true){
        score++
        alert('q3 ans is right');
    }
    else{
        alert('q3 ans is wrong');
    }
    alert("your score is " +score)
}