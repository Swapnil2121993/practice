<html>
    <!-- 
    We are trying to build a simple flash card application, using pure html, js, and css.
    
    Given a json string stored globally of the format -
        var flashCardsJson = '{
            "flashCards": [
                {"question": "What does it all mean?", "answer": "We'll never know."},
                {"question": "Do I have to come up with more questions?", "answer": "Nope!"},
                ...
            ]
        }'
    
    Write the necessary html, js and css to produce a flash card application that looks like this:
        ________________
       |                |
       |    Question    |
       |                |
       |                |
        ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
       ____            ____
      |Prev|          |Next|
       ‾‾‾‾            ‾‾‾‾
       
   Also write code to ensure that when you click next or prev, the card will display the 
   next / previous question. When you click on the card displaying the question, it should
   switch to showing the answer.
   
    -->
    <head></head>
    
        <style>
            .mainboard {
                border: 1px solid black;
                padding: 10px auto;
                margin: 10px ;
            }
            .page-footer {
               display: flex;
               margin: 10px;
            }
            .prev {
                margin-right: 20px;
                justify-content: flex-start;
            }
            .next {
                justify-content: flex-end;
            }
        </style>
        <body>
            <div class="page-container" id="card" onclick="clickHandler()">
                <div class="mainboard">
                    <h2> Question </h2>
                </div>
                <div class="page-footer">
                    <button class="prev" onclick="prevHandler()">prev</button>
                    <button class="next" onclick="nextHandler()">Next</button>
                </div>
                <script type="text/javascript">
                    var cardElement = document.getElementById('card');
                    var isAnswer = false;
                    var currentCard = 0;
                    var farray = JSON.parse(flasCardJSON).flashCards
                    
                    var updateCard = function() {
                        cardElement.innerHTML = isAnswer ? farray[currentCard].answer : farry[currentCard].question;
                    }
                    
                    var clickHandler = function() {
                        isAnswer = !isAnswer
                        updateCard()
                    }
                    
                    var nextHandler = function() {
                        if(currentCard === farray.length - 1 ) currentCard = farray.length - 1
                        else currentCard++;
                        isAnswer = false;
                        updateCard()
                    }
                    
                    var prevHandler = function() {
                        if(currentCard === 0) {
                            currentCard = 0;
                        }
                        else {
                            currentCard--;
                        }
                        isAnswer = false;
                        updateCard()
                        
                    }
                    
                </script>
            </div>
        </body>
    
</html>