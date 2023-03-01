// �ŧi�����ܼ�
let answer = [];  // �ΨӦs��q�����ͪ�����
let guess = [];  // �ΨӦs�񪱮a�q�����Ʀr

// ���ͤ��Ӥ��P���H���Ʀr
function generateAnswer() {
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 5; i++) {
        let index = Math.floor(Math.random() * nums.length);  // �qnums���H����@�ӯ���
        answer.push(nums[index]);  // �N�������ު��Ʀr�[�Janswer��
        nums.splice(index, 1);  // �qnums���R���w�g�[�J���Ʀr
    }
}

// �q���Ʀr
function makeGuess() {
    let input = document.getElementById("guessInput");
    let num = parseInt(input.value);
    if (isNaN(num) || num < 0 || num > 9) {  // �p�G���O0~9�������Ʀr�A�h���ܿ��~
        alert("�п�J0~9��������ơI");
        input.value = "";  // �M�ſ�J��
        input.focus();  // ���s�E�J��J��
        return;
    }
    if (guess.includes(num)) {  // �p�G�w�g�q�L�o�ӼƦr�A�h���ܤw�g�q�L
        alert("�z�w�g�q�L�o�ӼƦr�F�I");
        input.value = "";  // �M�ſ�J��
        input.focus();  // ���s�E�J��J��
        return;
    }
    guess.push(num);  // �N�q�����Ʀr�[�Jguess��
    let result = document.getElementById("guessResult");
    if (guess.length < 5) {  // �p�G�٨S�q�����ӼƦr
        if (num === answer[guess.length - 1]) {  // �p�G�q���F
            result.innerHTML += "<span class='correct'>" + num + "</span> ";  // ��ܲq�����Ʀr
        } else {
            result.innerHTML += "<span class='incorrect'>" + num + "</span> ";  // ��ܲq�����Ʀr
        }
        input.value = "";  // �M�ſ�J��
        input.focus();  // ���s�E�J��J��
    } else {  // �p�G�w�g�q�����ӼƦr
        if (num === answer[guess.length - 1]) {  // �p�G�̫�@�ӼƦr�]�q���F
            result.innerHTML += "<span class='correct'>"