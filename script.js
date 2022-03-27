let numCorrect = 0;
let endAnnoucement = "";

function startGame(){
    console.log("Game beginning");
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Who are the Mirabal sisters?</h1><center><button onClick="question1Correct()">Social activists who fought against the rule of Trujillo</button></center><center><button onClick="question1Incorrect()">Social activists who fought against the rule of Castro</button></center><center><button onClick="question1Incorrect()">The first women to vote in Spain</button></center><center><button onClick="question1Incorrect()">Social activists who fought for immigrant rights in the United States</button></center>';
}

function question1Correct(){
    numCorrect += 1;
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Correct!</h1><h2 style=text-align:center;color:gray;>The Mirabal sisters were four sisters who lived in the Dominican Republic during the regime of Trujillo. They were born in Ojo de Agua to an upper class family. They advocated for the removal Trujillo from power and earned the code name of \"Las Mariposas\" (the butterflies). Because of their involvement with the underground revolution movement, three out of four of them were murdered by Trujillo\'s secret police after coming back from visiting their husbands in jail.</h2><center><button onclick ="question2()">Continue</button></center>';
}

function question1Incorrect(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Incorrect!</h1><h2 style=text-align:center;color:gray;>The Mirabal sisters were four sisters who lived in the Dominican Republic during the regime of Trujillo. They were born in Ojo de Agua to an upper class family. They advocated for the removal Trujillo from power and earned the code name of \"Las Mariposas\" (the butterflies). Because of their involvement with the underground revolution movement, three out of four of them were murdered by Trujillo\'s secret police after coming back from visiting their husbands in jail.</h2><center><button onclick ="question2()">Continue</button></center>';
}

function question2(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Who was Minerva Mirabal?</h1><center><button onClick="question2Incorrect()">The eldest and most religious sister who was initially resistant to be involved in the underground movement against Trujillo</button></center><center><button onClick="question2Correct()">The loudest critic of Trujillo and the only sister who went to study law at university</button></center><center><button onClick="question2Incorrect()">The least politically involved sister and the sole survivor</button></center><center><button onClick="question2Incorrect()">The youngest sister who followed the footsteps of her older sisters and was very active in the revolutionary movement</button></center>';
}

function question2Correct(){
    numCorrect += 1;
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Correct!</h1><h2 style=text-align:center;color:gray;>Minerva Mirabal was the natural leader of the sisters and was the boldest critic of Trujillo out of the four sisters. She attended law school (to her parents\' disapproval) and was top of her class. However, Trujillo did not grant her a license to practice law. She was an icon for the revolutionary movement.</h2><center><button onclick ="question3()">Continue</button></center>';
}

function question2Incorrect(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Incorrect!</h1><h2 style=text-align:center;color:gray;>Minerva Mirabal was the natural leader of the sisters and was the boldest critic of Trujillo out of the four sisters. She attended law school (to her parents\' disapproval) and was top of her class. However, Trujillo did not grant her a license to practice law. She was an icon for the revolutionary movement.</h2><center><button onclick ="question3()">Continue</button></center>';
}

function question3(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Who was Patria Mirabal?</h1><center><button onClick="question3Correct()">The eldest and most religious sister who was initially resistant to be involved in the underground movement against Trujillo</button></center><center><button onClick="question3Incorrect()">The loudest critic of Trujillo and the only sister who went to study law at university</button></center><center><button onClick="question3Incorrect()">The least politically involved sister and the sole survivor</button></center><center><button onClick="question3Incorrect()">The youngest sister who followed the footsteps of her older sisters and was very active in the revolutionary movement</button></center>';
}

function question3Correct(){
    numCorrect += 1;
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Correct!</h1><h2 style=text-align:center;color:gray;>While Patria Mirabal was initially not too invested in politics. She eventually united with her sisters to stand up against Trujillo. She used her home as a safe meeting place for the rebels and allowed them to store ammunition and supplies on her property. She personally never went to jail, but both her son and husband did.</h2><center><button onclick ="question4()">Continue</button></center>';
}

function question3Incorrect(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Incorrect!</h1><h2 style=text-align:center;color:gray;>While Patria Mirabal was initially not too invested in politics. She eventually united with her sisters to stand up against Trujillo. She used her home as a safe meeting place for the rebels and allowed them to store ammunition and supplies on her property. She personally never went to jail, but both her son and husband did.</h2><center><button onclick ="question4()">Continue</button></center>';
}

function question4(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Who was Maria Teresa Mirabal?</h1><center><button onClick="question4Incorrect()">The eldest and most religious sister who was initially resistant to be involved in the underground movement against Trujillo</button></center><center><button onClick="question4Incorrect()">The loudest critic of Trujillo and the only sister who went to study law at university</button></center><center><button onClick="question4Incorrect()">The least politically involved sister and the sole survivor</button></center><center><button onClick="question4Correct()">The youngest sister who followed the footsteps of her older sisters and was very active in the revolutionary movement</button></center>';
}

function question4Correct(){
    numCorrect += 1;
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Correct!</h1><h2 style=text-align:center;color:gray;>Being the youngest sister, Maria Teresa adored her older sisters (especially Minerva) and wanted to do what she could to participate in the revolution. She was jailed on two separate occasions.</h2><center><button onclick ="question5()">Continue</button></center>';
}

function question4Incorrect(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Incorrect!</h1><h2 style=text-align:center;color:gray;>Being the youngest sister, Maria Teresa adored her older sisters (especially Minerva) and wanted to do what she could to participate in the revolution. She was jailed on two separate occasions.</h2><center><button onclick ="question5()">Continue</button></center>';
}

function question5(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Who was Bélgica (Dedé) Mirabal?</h1><center><button onClick="question5Incorrect()">The eldest and most religious sister who was initially resistant to be involved in the underground movement against Trujillo</button></center><center><button onClick="question5Incorrect()">The loudest critic of Trujillo and the only sister who went to study law at university</button></center><center><button onClick="question5Correct()">The least politically involved sister and the sole survivor</button></center><center><button onClick="question5Incorrect()">The youngest sister who followed the footsteps of her older sisters and was very active in the revolutionary movement</button></center>';
}

function question5Correct(){
    numCorrect += 1;
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Correct!</h1><h2 style=text-align:center;color:gray;>Under the guidance of her husband, Dedé was never involved too much in politics during the life of her sisters. However, after their deaths, she worked tirelessly to honor their cause. She also faced the burden of raising all of her nephews and nieces.</h2><center><button onclick ="question6()">Continue</button></center>';
}

function question5Incorrect(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Incorrect!</h1><h2 style=text-align:center;color:gray;>Under the guidance of her husband, Dedé was never involved too much in politics during the life of her sisters. However, after their deaths, she worked tirelessly to honor their cause. She also faced the burden of raising all of her nephews and nieces.</h2><center><button onclick ="question6()">Continue</button></center>';
}

function question6(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>How did Trujillo maintain his control of the Dominican Republic?</h1><center><button onClick="question6Incorrect()">Humiliating his enemies</button></center><center><button onClick="question6Incorrect()">Disposing of those who actively went against his regime</button></center><center><button onClick="question6Incorrect()">Controlling the media</button></center><center><button onClick="question6Correct()">All of the Above</button></center>';
}

function question6Correct(){
    numCorrect += 1;
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Correct!</h1><h2 style=text-align:center;color:gray;>Trujillo was a ruthless dictator who silenced anyone who tried to oppose him. He on multiple occasions intimidated and humiliated the sisters. He maintained control through his secret police and dominance of the media.</h2><center><button onclick ="question7()">Continue</button></center>';
}

function question6Incorrect(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Incorrect!</h1><h2 style=text-align:center;color:gray;>Trujillo was a ruthless dictator who silenced anyone who tried to oppose him. He on multiple occasions intimidated and humiliated the sisters. He maintained control through his secret police and dominance of the media.</h2><center><button onclick ="question7()">Continue</button></center>';
}

function question7(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>What occured after three of the four sisters were heinously and brutally murdered by Trujillo\’s soldiers?</h1><center><button onClick="question7Correct()">Trujillo was assassinated 6 months later</button></center><center><button onClick="question7Incorrect()">The sisters\’ movement ended</button></center><center><button onClick="question7Incorrect()">The sole surviving sister fled the country</button></center><center><button onClick="question7Incorrect()">The United States intervened and removed Trujillo from power</button></center>';
}

function question7Correct(){
    numCorrect += 1;
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Correct!</h1><h2 style=text-align:center;color:gray;>The people of the Dominican Republic were outraged over the deaths of las mariposas and were done with Trujillo\'s tyranny. Many say that this was Trujillo\'s fatal mistake while others quote different actions of Trujillo that resulted in his downfall. </h2><center><button onclick ="question8()">Continue</button></center>';
}

function question7Incorrect(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Incorrect!</h1><h2 style=text-align:center;color:gray;>The people of the Dominican Republic were outraged over the deaths of las mariposas and were done with Trujillo\'s tyranny. Many say that this was Trujillo\'s fatal mistake while others quote different actions of Trujillo that resulted in his downfall. </h2><center><button onclick ="question8()">Continue</button></center>';
}

function question8(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>What was the impact of the book In the Time of the Butterflies?</h1><center><button onClick="question8Incorrect()">It contained anti-Trujillo ideology that aided in the revolutionary movement</button></center><center><button onClick="question8Incorrect()">It gave a platform for the sisters to write down their experiences under the Trujillo regime</button></center><center><button onClick="question8Incorrect()">It publicized the sisters\’ journey to the people within the Dominican Republic</button></center><center><button onClick="question8Correct()">It dramatizes the Mirabal sisters’ life and was the first time that their story was widely shared with an English speaking audience</button></center>';
}

function question8Correct(){
    numCorrect += 1;
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Correct!</h1><h2 style=text-align:center;color:gray;>In the Time of the Butterflies was a powerful novel that brought to life the Mirabal sisters\' stories to a wider audience. Now, more people are aware of the powerful contributions that they have made to the Dominican Republic and their role as feminist icons.</h2><center><button onclick ="question9()">Continue</button></center>';
}

function question8Incorrect(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Incorrect!</h1><h2 style=text-align:center;color:gray;>In the Time of the Butterflies was a powerful novel that brought to life the Mirabal sisters\' stories to a wider audience. Now, more people are aware of the powerful contributions that they have made to the Dominican Republic and their role as feminist icons.</h2><center><button onclick ="question9()">Continue</button></center>';
}

function question9(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Who wrote In the Time of the Butterflies?</h1><center><button onClick="question9Incorrect()">Isabelle Allende</button></center><center><button onClick="question9Correct()">Julia Alvarez</button></center><center><button onClick="question9Incorrect()">Gabriela Mistral</button></center><center><button onClick="question9Incorrect()">Helena Araújo</button></center>';
}

function question9Correct(){
    numCorrect += 1;
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Correct!</h1><h2 style=text-align:center;color:gray;>While being born in New York City, Julia Alvarez lived in the Dominican Republic during the regime of Trujillo. She had to flee with her family after her father was caught in an anti-regime plot. She wrote this novel to honor and share the story of the Mirabal sisters.</h2><center><button onclick ="question10()">Continue</button></center>';
}

function question9Incorrect(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Incorrect!</h1><h2 style=text-align:center;color:gray;>While being born in New York City, Julia Alvarez lived in the Dominican Republic during the regime of Trujillo. She had to flee with her family after her father was caught in an anti-regime plot. She wrote this novel to honor and share the story of the Mirabal sisters.</h2><center><button onclick ="question10()">Continue</button></center>';
}

function question10(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>What day is represented by the Mirabal sisters?</h1><center><button onClick="question10Incorrect()">International Women\’s Day</button></center><center><button onClick="question10Incorrect()">Independence Day (of the Dominican Republic)</button></center><center><button onClick="question10Correct()">International Day for the Elimination of Violence Against Women</button></center><center><button onClick="question10Incorrect()">Day of the Butterflies</button></center>';
}

function question10Correct(){
    numCorrect += 1;
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Correct!</h1><h2 style=text-align:center;color:gray;>The International Day for the Elimination of Violence Against Women was instated by the United Nations to call attention to the immense problem of violence towards women. According to the UN, nearly 1 in 3 women have been abused in their lifetime.</h2><center><button onclick ="endScreen()">Continue</button></center>';
}

function question10Incorrect(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Incorrect!</h1><h2 style=text-align:center;color:gray;>The International Day for the Elimination of Violence Against Women was instated by the United Nations to call attention to the immense problem of violence towards women. According to the UN, nearly 1 in 3 women have been abused in their lifetime.</h2><center><button onclick ="endScreen()">Continue</button></center>';
}

function endScreen(){
    endAnnoucement = '<h1 style="text-align:center; color:gray;">Congrats you finished the game!</h1><center><p1 style="text-align:center; color:gray;">You scored a ';
    endAnnoucement += numCorrect;
    endAnnoucement += ' out of 10!</p1></center><center><button onclick ="mainScreen()">Back to Main Screen</button></center>';
    document.getElementById("game").innerHTML = endAnnoucement;
}

function mainScreen(){
    numCorrect = 0;
    document.getElementById("game").innerHTML = '<h1 style="text-align:center; color:gray;">Learn about the Mirabal Sisters!</h1><center><button style="text-align:center;" onclick = "startGame()">Begin!</button></center><center><button style="text-align:center;" onclick = "resourceScreen()">Resources!</button></center>';
}

function resourceScreen(){
    document.getElementById("game").innerHTML = '<h1 style=text-align:center;color:gray;>Resources</h1><h2 style=text-align:center;color:gray;>“International Day for the Elimination of Violence Against Women.” United Nations, United Nations, https://www.un.org/en/observances/ending-violence-against-women-day.</h2><h2 style=text-align:center;color:gray;>Otom. “In the Time of the Butterflies by Julia Alvarez, Reviewed by Olivia Kim.” Northampton Review of Latina Books, 29 Dec. 2016, https://sophia.smith.edu/blog/latinareviewofbooks/2016/12/29/in-the-time-of-the-butterflies-by-julia-alvarez-2/.</h2><h2 style=text-align:center;color:gray;>ROBINSON, NANCY. “Women’s Political Participation in the Dominican Republic: The Case of the Mirabal Sisters.” Caribbean Quarterly, vol. 52, no. 2/3, University of the West Indies, 2006, pp. 172–83, http://www.jstor.org/stable/40654568.</h2><center><button onclick ="mainScreen()">Back to Main Screen</button></center>';
}