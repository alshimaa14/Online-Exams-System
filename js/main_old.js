var IQExamObj = {
    name: "IQ Exam",
    time: 30,
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
        },
        {
            head: "find the pair that has a similar relationship.\nDEPRESSED : SAD",
            answers: [" neat : considerate"," towering : cringing"," rapid : plodding"," progressive : regressive","e. exhausted : tired"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "find the pair that has a similar relationship.\nCOTTON : BALE",
            answers: [" butter : churn"," wine : ferment"," grain : shock"," curd : cheese","e. beef : steak"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "find the pair that has a similar relationship.\nFINCH : BIRD",
            answers: [" frog : toad"," elephant : reptile"," Dalmatian : dog"," collie : marsupial","e. ant : ladybug"],
            correctAnswer: 3,
            grade: 1
        }
    ]
};
var EnglishExamObj = {
    name: "English Exam",
    time: 20,
    maxQuesNum: 30,
    Quests: [
        {
            head: "The major language of World Wide Web is ___________?",
            answers: [/*" HTML", " PHP", " ASP.NET", " Java"*/"True", "false"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "HTML is an abbreviation for?",
            answers: [" HiTech Meaningful Language", " HyperText Meaningful Language", " HiTech Markup Language", " HyperText Markup Language"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "___________ is a device from where the information is sent?",
            answers: [" Transmitter", " Spreadsheet", " Simulation", " Modulation"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "LAN is an abbreviation for ?",
            answers: [" Large Access Network", " Local Access Network", " Large Area Network", " Local Area Network"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "Full form of URL is ?",
            answers: [" Uniform Resource Locator", " Uniform Resource Link", " Uniform Registered Link", " Unified Resource Link"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "FTP is an abbreviation for?",
            answers: [" File Transfer Position", " File Transfer Protection", " File Transfer Protocol", " File Transfer Possibility"],
            correctAnswer: 2,
            grade: 1
        },
        {
            head: "In which of the following form, data is stored in computer ?",
            answers: [" Decimal", "b: Binary", " HexaDecimal", " Octal"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "The brain of any computer system is ?",
            answers: [" ALU", " Memory", " CPU", " Control unit"],
            correctAnswer: 2,
            grade: 1
        },
        {
            head: "Which of the following computer language is used for artificial intelligence ?",
            answers: [" FORTRAN", " PROLOG", " C", " COBOL"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "The binary system uses powers of ?",
            answers: [" 2", " 8", " 10", " 16"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "The major language of World Wide Web is ___________?",
            answers: [/*" HTML", " PHP", " ASP.NET", " Java"*/"True", "false"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "HTML is an abbreviation for?",
            answers: [" HiTech Meaningful Language", " HyperText Meaningful Language", " HiTech Markup Language", " HyperText Markup Language"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "___________ is a device from where the information is sent?",
            answers: [" Transmitter", " Spreadsheet", " Simulation", " Modulation"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "LAN is an abbreviation for ?",
            answers: [" Large Access Network", " Local Access Network", " Large Area Network", " Local Area Network"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "Full form of URL is ?",
            answers: [" Uniform Resource Locator", " Uniform Resource Link", " Uniform Registered Link", " Unified Resource Link"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "FTP is an abbreviation for?",
            answers: [" File Transfer Position", " File Transfer Protection", " File Transfer Protocol", " File Transfer Possibility"],
            correctAnswer: 2,
            grade: 1
        },
        {
            head: "In which of the following form, data is stored in computer ?",
            answers: [" Decimal", " Binary", " HexaDecimal", " Octal"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "The brain of any computer system is ?",
            answers: [" ALU", " Memory", " CPU", " Control unit"],
            correctAnswer: 2,
            grade: 1
        },
        {
            head: "Which of the following computer language is used for artificial intelligence ?",
            answers: [" FORTRAN", " PROLOG", " C", " COBOL"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "The binary system uses powers of ?",
            answers: [" 2", " 8", " 10", " 16"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "The major language of World Wide Web is ___________?",
            answers: [/*" HTML", " PHP", " ASP.NET", " Java"*/"True", "false"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "HTML is an abbreviation for?",
            answers: [" HiTech Meaningful Language", " HyperText Meaningful Language", " HiTech Markup Language", " HyperText Markup Language"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "___________ is a device from where the information is sent?",
            answers: [" Transmitter", " Spreadsheet", " Simulation", " Modulation"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "LAN is an abbreviation for ?",
            answers: [" Large Access Network", " Local Access Network", " Large Area Network", " Local Area Network"],
            correctAnswer: 3,
            grade: 1
        },
        {
            head: "Full form of URL is ?",
            answers: [" Uniform Resource Locator", " Uniform Resource Link", " Uniform Registered Link", " Unified Resource Link"],
            correctAnswer: 0,
            grade: 1
        },
        {
            head: "FTP is an abbreviation for?",
            answers: [" File Transfer Position", " File Transfer Protection", " File Transfer Protocol", " File Transfer Possibility"],
            correctAnswer: 2,
            grade: 1
        },
        {
            head: "In which of the following form, data is stored in computer ?",
            answers: [" Decimal", " Binary", " HexaDecimal", " Octal"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "The brain of any computer system is ?",
            answers: [" ALU", " Memory", " CPU", " Control unit"],
            correctAnswer: 2,
            grade: 1
        },
        {
            head: "Which of the following computer language is used for artificial intelligence ?",
            answers: [" FORTRAN", " PROLOG", " C", " COBOL"],
            correctAnswer: 1,
            grade: 1
        },
        {
            head: "The binary system uses powers of ?",
            answers: [" 2", " 8", " 10", " 16"],
            correctAnswer: 0,
            grade: 1
        }
    ]
};

var ExamArr = [IQExamObj,EnglishExamObj];
var ExamIndx = 0 ;
var currentExamObj = ExamArr [ExamIndx];
var index = 0;
var markQuestArr = [];
var examMode = 'exam' ;

window.addEventListener("load", function () {
  //var wrap = document.getElementById("wrap");
  btnPractise.addEventListener("click", function () {
    //alert("clicked");
      wrap.style.display= 'none';
      exam.style.display= 'block';

      
  });
  btnExam.addEventListener("click", function () {
    //alert("clicked");
      wrap.style.display= 'none';
      exam.style.display= 'block';

      btnFirst.addEventListener("click", function () {
      index = 0;
      appendQuest(currentExamObj,index);
  });
  btnNext.addEventListener("click", function () {
      if (index >= 0 && index < currentExamObj.Quests.length - 1) {
          index = ++index;
          appendQuest(currentExamObj,index);
      }
  });
  btnPrev.addEventListener("click", function () {
      if (index > 0 && index < currentExamObj.Quests.length) {
          index = --index;
          appendQuest(currentExamObj,index);
      }
  });
  btnLast.addEventListener("click", function () {
      index = currentExamObj.Quests.length - 1;
      appendQuest(currentExamObj,index);
  });
  btnMark.addEventListener("click", function () {
       appendSideQuest(index);
  });
  btnFinish.addEventListener("click",function(){
    if (currentExamObj == ExamArr[ExamArr.length-1])
    {
      if (examMode == 'practice')
      {
        alert("practice");
      }
      else
      {
        alert("exam mode")
      }
    }
    else
    {
      currentExamObj=ExamArr[++ExamIndx];
      currentExamObj.Quests=shuffleQuestArr(currentExamObj.Quests);
      index=0;
      markQuestArr=[];
      appendQuest(currentExamObj,index);
      sideDiv.innerHTML="";
    };
  });
  //to load fist element
  currentExamObj.Quests=shuffleQuestArr(currentExamObj.Quests);
  btnFirst.click();

  function appendQuest(obj,index)  {
    mainDiv.innerHTML="";
    var questNumHead = document.createElement("h2");
    questNumHead.innerText = "Question No." + (index + 1);
    mainDiv.appendChild(questNumHead);
    var currentQues = obj.Quests[index];

    var questHead = document.createElement("h3");
    questHead.innerText = currentQues.head;
    mainDiv.appendChild(questHead);
    var table = document.createElement("table");

    for (var x = 0; x < currentQues.answers.length; x++)
    {
      var tr = document.createElement("tr");
      var td = document.createElement("td");
      var radBtn = document.createElement("input");
      radBtn.setAttribute("type", "radio");
      radBtn.setAttribute("value", x);
      radBtn.checked= false;
      radBtn.setAttribute("name", "q" + index);
      td.appendChild(radBtn);
      tr.appendChild(td);
      radBtn.addEventListener("click", function () {
          qIndex = Number(this.name.substring(1));
          obj.Quests[qIndex].userAnswer = this.value;
      });//end of radio button clicked

     // mainDiv.appendChild(radBtn);
      var td = document.createElement("td");
      var label = document.createElement("label");
      label.innerText = currentQues.answers[x];
      if(obj.Quests.userAnswer != "")
      {
        if(x == obj.Quests[index].userAnswer)
        {
          radBtn.checked = true;
        }
      }

      td.appendChild(label);
      tr.appendChild(td);
      table.appendChild(tr);
    } //end of for
     mainDiv.appendChild(table);
  }//end of append guestion function
  function appendSideQuest(markIndex)  {
   var qSideHead = document.createElement("h3");    // side div
   qSideHead.innerText = "Question No." + (markIndex + 1);
   if(!(markQuestArr.includes(markIndex)))
    {
      markQuestArr.push(markIndex);
      sideDiv.appendChild(qSideHead);
    }
    qSideHead.addEventListener("click",function(){
      index=markIndex;
      appendQuest(currentExamObj,markIndex);
    });
  };
  function shuffleQuestArr(array) {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  };
  function calcResult (examObj) {
     var Result = 0;
     for (var y = 0; y < examObj.Quests.length; y++)
     {
        if (examObj.Quests[y].correctAnswer == examObj.Quests[y].userAnswer)
          Result += examObj.Quests[y].grade;
     }
 };
});//End of Load Event

});
