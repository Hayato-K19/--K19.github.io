console.log("接続成功");
//追加ボタンを取得
const taskAdd = document.getElementById("taskAdd"); 
//入力欄を取得
const taskInput = document.getElementById("taskInput"); 
//未完了タスク欄を取得
const TodoList = document.getElementById("TodoList");
//完了タスク欄を取得
const completedList = document.getElementById("CompletedList");

//追加ボタンがクリックされたら{}内のことを実行する
taskAdd.addEventListener("click", function () {
    //空欄だったら追加できないようにする
     if(taskInput.value === ""){
        return;
    }
    //入力欄の中身をconsoleに表示
    console.log(taskInput.value); 
    //タスクリストを作る
    const newTask = document.createElement("li");
    //チェックボックスを作る
    const checkBox = document.createElement("input");
    //input要素をチェックボックスとして設定する
    checkBox.type = "checkbox";
    //新しいタスクにチェックボックスを追加
    newTask.appendChild(checkBox);
    //新しいタスクに入力した内容を追加
    newTask.appendChild(document.createTextNode(taskInput.value));
    //新しいタスクを未完了タスクリストに追加
    TodoList.appendChild(newTask);
    //タスクを追加した後入力欄を空にする
    taskInput.value = ""
    //チェックボックスをクリックしたら以下が機能する
    checkBox.addEventListener("change", function () {

        //もしチェックされたら新しく追加したタスクを完了タスク欄に移動する
        if (checkBox.checked) {
            completedList.appendChild(newTask);
        //チェックを外したら未完了タスク欄に追加する
        } else {
            TodoList.appendChild(newTask);
        }
    });
});
//ここからタイマーエリア
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

const timer = document.getElementById("timer");
const workTime = document.getElementById("workTime");
const timeCircle = document.getElementById("timecircle");

let timeLeft = Number(workTime.value) * 60;
let timerId = null;


// 時間表示を更新
function updateDisplay() {
    function updateCircle() {

    const progress =
    (timeLeft / totalTime) * 360;

    timeCircle.style.background =
    `conic-gradient(
        #82b3ac ${progress}deg,
        #e5e5e5 ${progress}deg
    )`;

}

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}


// 開始ボタン
startButton.addEventListener("click", function () {

    if (timerId !== null) {
        return;
    }

    timerId = setInterval(function () {

        timeLeft--;

        updateDisplay();

        if (timeLeft <= 0) {

            clearInterval(timerId);

            timerId = null;

            alert("作業終了！");
        }

    }, 1000);

});


// 停止ボタン
stopButton.addEventListener("click", function () {

    clearInterval(timerId);

    timerId = null;

});


// リセットボタン
resetButton.addEventListener("click", function () {

    clearInterval(timerId);

    timerId = null;

    timeLeft = Number(workTime.value) * 60;

    updateDisplay();

});


// セレクトボックス変更
workTime.addEventListener("change", function () {

    timeLeft = Number(workTime.value) * 60;

    updateDisplay();

});


// 初期表示
updateDisplay();
``

let count = 10;

setInterval(function () {

    count--;

    console.log(count);

}, 1000);