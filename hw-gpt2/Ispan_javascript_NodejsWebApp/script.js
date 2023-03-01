// 宣告全域變數
let answer = [];  // 用來存放電腦產生的答案
let guess = [];  // 用來存放玩家猜測的數字

// 產生五個不同的隨機數字
function generateAnswer() {
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 5; i++) {
        let index = Math.floor(Math.random() * nums.length);  // 從nums中隨機選一個索引
        answer.push(nums[index]);  // 將對應索引的數字加入answer中
        nums.splice(index, 1);  // 從nums中刪除已經加入的數字
    }
}

// 猜測數字
function makeGuess() {
    let input = document.getElementById("guessInput");
    let num = parseInt(input.value);
    if (isNaN(num) || num < 0 || num > 9) {  // 如果不是0~9之間的數字，則提示錯誤
        alert("請輸入0~9之間的整數！");
        input.value = "";  // 清空輸入框
        input.focus();  // 重新聚焦輸入框
        return;
    }
    if (guess.includes(num)) {  // 如果已經猜過這個數字，則提示已經猜過
        alert("您已經猜過這個數字了！");
        input.value = "";  // 清空輸入框
        input.focus();  // 重新聚焦輸入框
        return;
    }
    guess.push(num);  // 將猜測的數字加入guess中
    let result = document.getElementById("guessResult");
    if (guess.length < 5) {  // 如果還沒猜完五個數字
        if (num === answer[guess.length - 1]) {  // 如果猜中了
            result.innerHTML += "<span class='correct'>" + num + "</span> ";  // 顯示猜中的數字
        } else {
            result.innerHTML += "<span class='incorrect'>" + num + "</span> ";  // 顯示猜錯的數字
        }
        input.value = "";  // 清空輸入框
        input.focus();  // 重新聚焦輸入框
    } else {  // 如果已經猜完五個數字
        if (num === answer[guess.length - 1]) {  // 如果最後一個數字也猜中了
            result.innerHTML += "<span class='correct'>"