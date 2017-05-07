var IQExamObj = {
    name: "IQ Exam",
    time: 15,
    maxQuesNum: 30,
    Quests: [
         {
            head:"Only 1 month of the year has 28 days.",
            answers: ["true","false"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head:"1000+40+1000+30+1000+20+1000+10= 5000",
            answers: ["true","false"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head:"Leap year occurs every 2 years.",
            answers: ["true","false"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head:"Look at this series: 1.5, 2.3, 3.1, 3.9, . . . What number should come next?",
            answers: ["4.2","4.4","4.7","5.1"],
            correctAnswer: 2,
            grade: 1
        },
        {
            head: "Look at this series: 5.2, 4.8, 4.4, 4, . . . What number should come next?",
            answers: ["3","3.3","3.5","3.6"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "Look at this series: 2, 1, 12, 14, . . . What number should come next?",
            answers: ["1/3","1/8 ","2/8","1/16 "],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "28 25 5 21 18 5 14 ,...  What numbers should come next?",
            answers: ["11 5","10 7","11 8","5 10","10 5"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "Look at this series: U32, V29, __, X23, Y20, . . . What number should fill the blank?",
            answers: ["W26","W17","Z17","Z26"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "Look at this series: XXIV, XX, __, XII, VIII, . . . What number should fill the blank?",
            answers: [" XXII"," XIII"," XVI"," IV"],
            correctAnswer: 2,
            grade: 1
        },
        {
            head: "QAR RAS SAT TAU _____",
            answers: [" UAV"," UAT"," TAS"," TAT"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "Which word does NOT belong with the others?",
            answers: [" tulip"," rose"," bud"," daisy"],
            correctAnswer: 2,
            grade: 1
        },
        {
            head: "Which word does NOT belong with the others?",
            answers: [" parsley"," basil"," dill"," mayonnaise"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "Which word does NOT belong with the others?",
            answers: [" book"," index"," glossary"," chapter"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "Which word does NOT belong with the others?",
            answers: [" defendant"," prosecutor"," trial"," judge"],
            correctAnswer: 2,
            grade: 1
        },
        {
            head:"find the word that names a necessary part of book",
            answers: [" fiction"," pages"," pictures"," learning"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "find the word that names a necessary part of diploma",
            answers: [" principal"," curriculum"," employment"," graduation"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "find the word that names a necessary part of swimming",
            answers: [" pool"," bathing suit"," water"," life jacket "],
            correctAnswer: 2,
            grade: 1
        },
        {
            head: "find the word that names a necessary part of desert",
            answers: [" cactus"," arid"," oasis"," flat"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "find the word that names a necessary part of itinerary",
            answers: [" map"," route"," travel"," guidebook"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "Window is to pane as book is to",
            answers: [" novel."," glass."," cover."," page."],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "Artist is to painting as senator is to",
            answers: [" attorney."," law."," politician."," constituents."],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "Guide is to direct as reduce is to",
            answers: [" decrease."," maintain."," increase."," preserve."],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "Sponge is to porous as rubber is to",
            answers: [" massive."," solid."," elastic."," inflexible."],
            correctAnswer: 2,
            grade: 1
        },
        {
            head:"find the word that completes row of words.\n ant    fly     bee \n hamster squirrel _______",
            answers: [" spider"," mouse"," rodent"," cat"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "find the word that completes row of words.\npalette easel brush\ntextbook lesson plan _______",
            answers: [" artist"," teacher"," report card"," paint"],
            correctAnswer: 1,
            grade: 1
        },
        {//251
            head: "find the word that completes row of words.\napples fruit supermarket\nnovel book _______",
            answers: [" bookstore"," magazine"," vegetable"," shopping "],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "find the word that completes row of words.\nwalk skip run\ntoss pitch _______",
            answers: [" swerve"," hurl"," jump"," dance"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "find the word that completes row of words.\ndaisy flower plant\nbungalow house _______",
            answers: [" building"," cottage"," apartment"," city"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "find the pair that has a similar relationship.\n PETAL : FLOWER",
            answers: [" salt : pepper"," tire : bicycle"," base : ball"," sandals : shoes","e. puppy : dog"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "find the pair that has a similar relationship.\nPULSATE : THROB",
            answers: [" walk : run"," tired : sleep"," examine : scrutinize"," ballet : dancer","e. find : lose"],
            correctAnswer: 0,
            grade: 1
        }
    ]
};
var EnglishExamObj = {
    name: "English Exam",
    time: 10,
    maxQuesNum: 20,
    Quests: [
        {
            head: "___________ Caviar in the fridge.",
            answers: [" There isn’t no"," There is any"," There isn’t any"," There aren’t no"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "David is the boss, you need to speak to ___________",
            answers: [" it"," him"," her"," them"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "We haven’t got ___________ Champagne",
            answers: [" a lot"," little"," too"," muc"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "David is the boss, you need to speak to ___________",
            answers: [" it"," him"," her"," them"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "The party was a disaster. There ___________ there!",
            answers: [" wasn’t nobody"," was anybody"," was nobody"," was somebody"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "Michael ___________ Paris in the morning",
            answers: [" to leaving"," leaves for"," is leaving for"," leave to"],
            correctAnswer: 2,
            grade: 1
        },
        {
            head: "___________ orange juice in the fridge.",
            answers: [" There isn’t no"," There is any"," There isn’t any"," There aren’t no"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: " He goes to work ___________",
            answers: [" by taxi"," on taxi"," with taxi"," in taxi"],
            correctAnswer: 2,
            grade: 1
        },
        {
            head: "Mark ..... fly to London tomorrow.",
            answers: [" to going"," goes to"," is going to"," go to"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "John is the manager, you need to speak to ___________",
            answers: [" it"," him"," her"," them"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "He ___________ breakfast yesterday",
            answers: ["hadn’t"," no had"," didn’t have got"," didn’t have"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "I’ve lost my keys. I can’t find them ___________",
            answers: ["anywhere."," nowhere."," everywhere."," somewhere"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "We'll never get to the airport! There is ___________ time!",
            answers: ["few."," too little"," too much little."," too few."],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: " I haven’t seen your cousin .....over a year ago.",
            answers: ["since"," for"," during"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "There ..... hooligans at the match, for a change.",
            answers: ["were no"," weren't no"," were any"," were not"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "We're really looking forward ___________ on holiday.",
            answers: [" to go"," going"," go"," to going"],
            correctAnswer: 2,
            grade: 1
        },
        {
            head: "Tom is ___________ Elizabeth how to copy it right now",
            answers: ["telling"," saying"," saying to"," telling to"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "On a windy morning, I arrived ___________ Chicago Airport.",
            answers: ["in"," on"," at"," by"],
            correctAnswer: 2,
            grade: 1
        },
        {
            head: "That can't be Albert! I ___________",
            answers: ["have just seen him"," am just seen him."," just see him."," am just seen him."],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "You live upstairs from me ___________",
            answers: ["do you?"," are you?"," don't you?"," didn’t you?"],
            correctAnswer: 0,
            grade: 1
        },
    ]
};

var ExamArr = [IQExamObj, EnglishExamObj];
var ExamIndx = 0;
var currentExamObj = ExamArr[ExamIndx];
var index = 0;
var markQuestArr = [];
var examMode = 'exam';
var minutes=0;
var seconds = 60;
window.addEventListener("load", function() {
    btnFirst.addEventListener("click", function() {
        index = 0;
        appendQuest(currentExamObj, index);
    });
    btnNext.addEventListener("click", function() {
        if (index >= 0 && index < currentExamObj.Quests.length - 1) {
            index = ++index;
            appendQuest(currentExamObj, index);
            if((currentExamObj.Quests[index-1].userAnswer)==undefined )   
                appendSideQuest(index-1);
        }
    });
    btnPrev.addEventListener("click", function() {
        if (index > 0 && index < currentExamObj.Quests.length) {
            index = --index;
            appendQuest(currentExamObj, index);
            if((currentExamObj.Quests[index+1].userAnswer)==undefined )    
                appendSideQuest(index+1);
        }
    });
    btnLast.addEventListener("click", function() {
        index = currentExamObj.Quests.length - 1;
        appendQuest(currentExamObj, index);
    });
    btnMark.addEventListener("click", function() {
        appendSideQuest(index);
    });
    btnFinish.addEventListener("click", function() {
    	if (seconds==0){
    		minutes--;
    		seconds=60;
    	};// To adjust time at finishing exactly 0 seconds
        currentExamObj.answerTime=String((currentExamObj.time-1)-(minutes)) + ' : ' + String(60-seconds); // To save time of each exam
        if (currentExamObj == ExamArr[ExamArr.length - 1]) {  // last exam
            if (examMode == 'practice') {
                showResult(ExamArr);
                showModelAnswer(ExamArr);
            }
            else if (examMode == 'exam') {
                showResult(ExamArr);
            }
        }
        else {                   // first exam
            currentExamObj = ExamArr[++ExamIndx];
            currentExamObj.Quests = shuffleQuestArr(currentExamObj.Quests);
            clearInterval(intervalID);
            timerFun(currentExamObj);
            index = 0;
            markQuestArr = [];
            appendQuest(currentExamObj, index);
            sideDiv.innerHTML = "";
            head.innerHTML = "English Test";
        };
    });
    btnPractise.addEventListener("click", function () {
        wrap.style.display= 'none';
        exam.style.display= 'block';
        examMode="practice";
        main();

    });
    btnExam.addEventListener("click", function () {
        wrap.style.display= 'none';
        exam.style.display= 'block';
        examMode="exam";
        main();

    });
    //to load fist element
    function main(){
      currentExamObj.Quests = shuffleQuestArr(currentExamObj.Quests);
      btnFirst.click();
      timerFun(currentExamObj);
    };
    function appendQuest(obj, index) {
        mainDiv.innerHTML = "";
        var questNumHead = document.createElement("h2");
        questNumHead.innerText = "Question No." + (index + 1);
        mainDiv.appendChild(questNumHead);
        var currentQues = obj.Quests[index];

        var questHead = document.createElement("h3");
        questHead.innerText = currentQues.head;
        mainDiv.appendChild(questHead);

        var table = document.createElement("table");

        for (var x = 0; x < currentQues.answers.length; x++) {
            var tr = document.createElement("tr");
            var td = document.createElement("td");

            var radBtn = document.createElement("input");
            radBtn.setAttribute("type", "radio");
            radBtn.setAttribute("value", x);
            radBtn.checked = false;
            radBtn.setAttribute("name", "q" + index);
            td.appendChild(radBtn);
            tr.appendChild(td);
            radBtn.addEventListener("click", function() {
                qIndex = Number(this.name.substring(1));
                obj.Quests[qIndex].userAnswer = this.value; // create
            });
            var td = document.createElement("td");
            var label = document.createElement("label");
            label.innerText = currentQues.answers[x];
            if (obj.Quests.userAnswer != "") {
                if (x == obj.Quests[index].userAnswer) {
                    radBtn.checked = true;
                }
            }
            td.appendChild(label);
            tr.appendChild(td);
            table.appendChild(tr);
        }
        mainDiv.appendChild(table);
    }
    function appendSideQuest(markIndex) {
        var qSideHead = document.createElement("h3"); // side div
        qSideHead.innerText = "Question No." + (markIndex + 1);
        if (!(markQuestArr.includes(markIndex))) {
            markQuestArr.push(markIndex);
            sideDiv.appendChild(qSideHead);
        }
        qSideHead.addEventListener("click", function() {
            index = markIndex;
            appendQuest(currentExamObj, markIndex);
        });
    };
    function shuffleQuestArr(array) {
        var tmp, current, top = array.length;
        if (top)
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        return array;
    };
    function timerFun(obj1) {
        minutes = (obj1.time - 1);
        seconds = 60;
        intervalID = setInterval(function() {
            seconds--;
            if (seconds == -1) {
                seconds = 59;
                minutes--;
            }
            timer.innerText = minutes + " : " + seconds;
        }, 1000)
        setTimeout(function() {
            clearInterval(intervalID);
            btnFinish.click();
        }, (60 * 1000 * obj1.time + 1000));
    };
    function calcResult(examObj) {
        var Result = 0;
        var countRight = 0;
        var countWrong = 0;
        for (var y = 0; y < examObj.Quests.length; y++) {
            if (examObj.Quests[y].correctAnswer == examObj.Quests[y].userAnswer) {
                Result += examObj.Quests[y].grade;
                countRight++;
            } else {
                countWrong++;
            }
        }
        Result = (Result/examObj.Quests.length)*100;
        return [Result, countRight, countWrong,examObj.answerTime];
    };
    function showResult(examArray) {
        //exam.style.display = "none";
        buttons.style.visibility = 'hidden';
        mainDiv.innerText = "";
        head.innerHTML = "Result of Exams";
        rightSide.style.display = 'none';
        leftSide.style.width = '97%';
        mainDiv.style.height = 'auto';

        clearInterval(intervalID);
        //timer.innerText = "";
        var table = document.createElement('table');
        table.setAttribute("class", "resultTable");
        table.setAttribute("border", "1px solid #ccc");
        table.setAttribute("cellpadding", "10px");
        table.setAttribute("cellspacing", "10px");
        table.setAttribute("width", "100%");
        for (var i = 0; i < examArray.length; i++) {

          var tr = document.createElement('tr');
          var td = document.createElement('td');
          var resultHead = document.createElement("h2");
            resultHead.innerText = "Result of " + examArray[i].name + "\n";
            //mainDiv.appendChild(resultHead);
            td.appendChild(resultHead);
            tr.appendChild(td);

            var td = document.createElement('td');
            var result = calcResult(examArray[i]);
            var resultWrite = document.createElement("h3");
            resultWrite.innerText = "Total Grade is  " + result[0] +"%"+ " \nNumber of right Answers is : " + result[1] + " \nNumber of wrong Answers : " + result[2] + " \nTime of the Exam : " + result[3];;
            //mainDiv.appendChild(resultWrite);
            td.appendChild(resultWrite);
            tr.appendChild(td);

            table.appendChild(tr);
            mainDiv.appendChild(table);
            if(result[1] > 60){
                ullinks.innerText = "congratulation you passed in these Exams";
                ullinks.style.color = "#f8198d";
                ullinks.style.fontSize = "24px";
            }
            else{
              ullinks.innerText ='unfortunatly you failed in these Exams';
              ullinks.style.color = "#f8198d";
              ullinks.style.fontSize = "24px";
            }
        };
    };
    function showModelAnswer(examArray) {

        for (var i = 0; i < examArray.length; i++) {

            var resultHead = document.createElement("h2");
            resultHead.innerText = "Model Answer Of " + examArray[i].name;
            mainDiv.appendChild(resultHead);
            var table = document.createElement('table');
              table.setAttribute("class", "resultTable");
              table.setAttribute("border", "1px solid #ccc");
              table.setAttribute("cellpadding", "10px");
              table.setAttribute("cellspacing", "10px");
              table.setAttribute("width", "100%");
              var tr = document.createElement('tr');
              var th = document.createElement('th');
              th.innerText = "Question No.";
              tr.appendChild(th);
              var th = document.createElement('th');
              th.innerText = "Question Head";
              tr.appendChild(th);
              var th = document.createElement('th');
              th.innerText = "correct answers";
              tr.appendChild(th);
              var th = document.createElement('th');
              th.innerText = "user answers";
              tr.appendChild(th);
              table.appendChild(tr);
              //mainDiv.appendChild(table);
            for (indx = 0; indx < examArray[i].Quests.length; indx++) {
              var tr = document.createElement('tr');
              var td = document.createElement('td');
                var questNumHead = document.createElement("h2");
                questNumHead.innerText = (indx + 1) + " )";
                td.appendChild(questNumHead);
                tr.appendChild(td);
                var currentExam = examArray[i];
                var currentQues = currentExam.Quests[indx];
                var td = document.createElement('td');
                var questHead = document.createElement("h3");
                questHead.innerText = currentQues.head;
               // mainDiv.appendChild(questHead);
                td.appendChild(questHead);
                tr.appendChild(td);

                var correctTd = document.createElement('td');
                var correctLabel = document.createElement("label");

                var wrongTd = document.createElement('td');
                var wrongLabel = document.createElement("label");

                for (var x = 0; x < currentQues.answers.length; x++) {
                    if (x == currentQues.correctAnswer) {
                      correctLabel.innerText = currentQues.answers[x];
                      correctLabel.style.color='green';
                      correctTd.appendChild(correctLabel);
                      tr.appendChild(correctTd);
                    }
                }

                for (var x = 0; x < currentQues.answers.length; x++) {
                    /*if((x == currentQues.correctAnswer) && (x == currentQues.userAnswer)){
                      wrongLabel.innerText = currentQues.answers[x];
                      wrongLabel.style.color='green';
                      wrongTd.appendChild(wrongLabel);
                      tr.appendChild(wrongTd);
                    }
                    else if ((x == currentQues.userAnswer) && (x != currentQues.correctAnswer)) {
                      wrongLabel.innerText = currentQues.answers[x];
                      wrongLabel.style.color='red';
                      wrongTd.appendChild(wrongLabel);
                      tr.appendChild(wrongTd);
                    }
                    else{
                      wrongLabel.innerText = "No User Answer";
                      wrongLabel.style.color='red';
                      wrongTd.appendChild(wrongLabel);
                      tr.appendChild(wrongTd);
                    } */
                    if (currentQues.userAnswer) {
                        if(x == currentQues.correctAnswer){
                          if(currentQues.correctAnswer == currentQues.userAnswer){
                            wrongLabel.innerText = currentQues.answers[x];
                            wrongLabel.style.color='green';
                            wrongTd.appendChild(wrongLabel);
                            tr.appendChild(wrongTd);
                          }
                        }
                        else if(x != currentQues.correctAnswer){
                          if(x == currentQues.userAnswer){
                            wrongLabel.innerText = currentQues.answers[x];
                            wrongLabel.style.color='red';
                            wrongTd.appendChild(wrongLabel);
                            tr.appendChild(wrongTd);
                          }
                        }
                    } else {
                      wrongLabel.innerText = "No User Answer";
                      wrongLabel.style.color='red';
                      wrongTd.appendChild(wrongLabel);
                      tr.appendChild(wrongTd);
                    }
                }
                table.appendChild(tr);
            };
            mainDiv.appendChild(table);
        };

    };
}); //End of Load Event
