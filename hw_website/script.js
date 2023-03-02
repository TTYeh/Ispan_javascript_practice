// �ŧi�����ܼ�
let answer = []; // ���T����
let guess = []; // ���a�q�����Ʀr
let tries = 0; // ���a�w���ժ�����

// ��l��:���ͤ��Ӥ��P���H���Ʀr�@�����T����
function init() {
    while (answer.length < 5) {
        let num = Math.floor(Math.random() * 10);
        if (!answer.includes(num)) {
            answer.push(num);
        }
    }
}
init()

// ���a���U�u���s�}�l�v���s�ɰ��檺�禡
function restart() {
    answer = [];
    guess = [];
    tries = 0;
    // ��l�ƿ��ﶵ
    document.getElementById("selectItem_1") 
    
    //document.getElementById("guesses").innerHTML = "";
    //document.getElementById("input").value = "";
    //document.getElementById("input").focus();
    //document.getElementById("restart-btn").style.display = "none";
    //document.getElementById("submit-btn").style.display = "inline-block";
    while (answer.length < 5) {
        let num = Math.floor(Math.random() * 10);
        if (!answer.includes(num)) {
            answer.push(num);
        }
    }
}

// ���a���U�u����v���s�ɰ��檺�禡
function submit() {
    let input = document.getElementById("input").value;
    // �ˬd��J�O�_�����줣�P���Ʀr
    if (input.length !== 5) {
        alert("�п�J���Ӥ��P���Ʀr�I");
        return;
    }
    for (let i = 0; i < 5; i++) {
        if (isNaN(input[i]) || guess.includes(parseInt(input[i]))) {
            alert("�п�J���Ӥ��P���Ʀr�I");
            return;
        }
    }
    guess = input.split("").map(num => parseInt(num));
    tries++;
    let result = checkGuess();
    document.getElementById("guesses").innerHTML += `<div>${guess.join("")} - ${result}</div>`;
    // �p�G�q�������Ʀr�A��ܮ��߰T���M���s�}�l���s
    if (result === "5A0B") {
        alert(`���ߧA�q���F�I�A�`�@���դF${tries}���C`);
        document.getElementById("restart-btn").style.display = "inline-block";
        document.getElementById("submit-btn").style.display = "none";
    } else {
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
    }
}

// �ˬd���a�q�����Ʀr�O�_�����T���סA�ê�^A�MB���ƶq
function checkGuess() {
    let a = 0;
    let b = 0;
    for (let i = 0; i < 5; i++) {
        if (guess[i] === answer[i]) {
            a++;
        } else if (answer.includes(guess[i])) {
            b++;
        }
    }
    return `${a}A${b}B`;
}