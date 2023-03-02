// 宣告全域變數
let answer = []; // 正確答案
let guess = []; // 玩家猜測的數字
let tries = 0; // 玩家已嘗試的次數

// 初始化:產生五個不同的隨機數字作為正確答案
function init() {
    while (answer.length < 5) {
        let num = Math.floor(Math.random() * 10);
        if (!answer.includes(num)) {
            answer.push(num);
        }
    }
}
init()

// 當玩家按下「重新開始」按鈕時執行的函式
function restart() {
    answer = [];
    guess = [];
    tries = 0;
    // 初始化選單選項
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

// 當玩家按下「提交」按鈕時執行的函式
function submit() {
    let input = document.getElementById("input").value;
    // 檢查輸入是否為五位不同的數字
    if (input.length !== 5) {
        alert("請輸入五個不同的數字！");
        return;
    }
    for (let i = 0; i < 5; i++) {
        if (isNaN(input[i]) || guess.includes(parseInt(input[i]))) {
            alert("請輸入五個不同的數字！");
            return;
        }
    }
    guess = input.split("").map(num => parseInt(num));
    tries++;
    let result = checkGuess();
    document.getElementById("guesses").innerHTML += `<div>${guess.join("")} - ${result}</div>`;
    // 如果猜中全部數字，顯示恭喜訊息和重新開始按鈕
    if (result === "5A0B") {
        alert(`恭喜你猜中了！你總共嘗試了${tries}次。`);
        document.getElementById("restart-btn").style.display = "inline-block";
        document.getElementById("submit-btn").style.display = "none";
    } else {
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
    }
}

// 檢查玩家猜測的數字是否為正確答案，並返回A和B的數量
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