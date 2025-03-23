// Questions array
const questions = [
  'Pulled an all-nighter in PG',
  'Eaten a sad Chick-fil-A alone in the Student Center',
  'Waited in line at Chick-fil-A in the Student Center for over 20 minutes?',
  'Procrastinated ‘cause you found code on GitHub, then realized it’s the wrong assignment',
  'Lost your shit when someone said "GATech" instead of "Georgia Tech"',
  'Lost your BuzzCard',
  'Got screamed at by the Ramblin’ Wreck horn',
  'Stolen the T from a campus sign',
  'Waited 30+ minutes for a Stingerette only for it to drive past you',
  'Rode the Stinger in circles because you were too tired to move',
  'Befriended a campus squirrel (or at least stared down)',
  'Showed up to a lecture and immediately realized you were in the wrong class',
  'Blacked out during wet weekend',
  'Ran in cake race drunk',
  'Been roasted on r/gatech',
  'Posted a rant on r/gatech at 2AM during finals',
  'Went to Midnight Breakfast just for the vibes',
  'Tried to drop a class after the drop deadline',
  'Accidentally referred to GT as "Tech" when talking to non-GT students?',
  'Rode on the Ramblin\' Wreck',
  'Eaten at Willage Dining Hall and lived to tell the tale?',
  'Slept in the Crosland Tower',
  'Taken a nap in the CULC bean bags and questioned your life choices',
  'Got rizzed up or rejected in Tech Green',
  'Lived off of Sublime Donuts for at least 24 hours?',
  'Built something in your dorm room that violated housing policy?',
  'Walked across campus in the rain without an umbrella?',
  'Attempted the Freshman 15 (pounds lost, not gained)?',
  'Made a joke about "getting out" that non-GT students didn\'t understand?',
  'Walked up Tech Tower Hill and regretted all your life decisions',
  'Called the CRC your “second home” despite only using it twice',
  'Studied for an exam by watching one (1) YouTube video',
  'Took a co-op just to escape campus',
  'Had 3+ breakdowns in one week',
  'Been ghosted after a group project',
  'Been the ghost in a group project',
  'Copied a friend’s homework, then found out they were also wrong',
  'Got caught walking out of class 10 minutes in',
  'Been humbled by CS 1331',
  'Had Chick-fil-A or Panda Express for every meal for a week',
  'Had dining dollars expire with a balance over $50?',
  'Corrected someone who called you a "Georgia Tech Engineer" when you\'re in a different major?',
  'Said "Go Jackets" to a random person wearing GT gear?',
  'Attended a career fair just for the free swag?',
  'Witnessed the Midnight Bud at the library?',
  'Received an email from Dean Stein?',
  'Used your student ID to get free museum admission in Atlanta?',
  'Made a joke about the CS 1371 Piazza?',
  'Switched majors, or seriously thought about it',
  'Drank at Veranda and forgot what happened',
  'Took the Stinger drunk',
  'Gone to a frat party and failed to name a brother',
  'Got caught doing something sus on the hammocks',
  'Got into a relationship during Dead Week',
  'Got dumped during Dead Week',
  'Dated someone from Emory or UGA',
  'Cried over Oscar’s food quality',
  'Bragged about your internship on LinkedIn like a menace',
  'Lied during a coding interview',
  'Slept through a final',
  'Had your laptop die mid-exam',
  'Had a squirrel steal your snack',
  'Ranted about parking prices',
  'Got rejected from a TA position',
  'Wondered who George P. Burdell actually is',
  'Lied on your resume and still got the job',
  'Got roasted by a professor mid-lecture',
  'Accidentally emailed your prof something cursed',
  'Used "mental health day" to watch anime for 8 hours straight',
  'Peaked during high school and now you’re here',
  'Failed a class and blamed the curve',
  'Failed a class and blamed yourself (growth)',
  'Took History of Chairs or History of Jazz for the humanities credit',
  'Thought Tech was gonna be like Big Bang Theory but now you’re just depressed',
  'Met your soulmate at GT',
  'Attended a hackathon solely for the food',
  'Had your project deleted and cried',
  'Been humbled by a freshman',
  'Slept in a classroom overnight',
  'Stalked your class crush on LinkedIn',
  'Used ChatGPT to write your entire paper',
  'Got called out for using ChatGPT to write your paper',
  'Went to a football game and left before halftime',
  'Had beef with Buzz',
  'Hated on GT, then cried when you graduated',
  'Spent more time in Discord than actual class',
  'Bragged about your 6-figure internship while crying inside',
  'Got ghosted after a career fair',
  'Took a mental health day and it turned into a month',
  'Got a caffeine-induced panic attack',
  'Regretted coming here, but stayed anyway',
  'Faked confidence in a project demo',
  'Got roasted by a recruiter',
  'Started a startup that failed in 3 months',
  'Sent a resume with a typo and still got hired',
  'Beheaded Buzz'
];

// Get DOM elements
const questionList = document.getElementById('question-list') as HTMLOListElement;
const calculateButton = document.getElementById('calculate') as HTMLButtonElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;
const scoreElement = document.getElementById('score') as HTMLHeadingElement;
const testSection = document.getElementById('test-section') as HTMLElement;
const resultSection = document.getElementById('result-section') as HTMLElement;

// Generate the list of questions with checkboxes
function generateQuestionList() {
  questionList.innerHTML = '';

  questions.forEach((question, index) => {
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `q${index + 1}`;
    checkbox.name = `q${index + 1}`;

    const label = document.createElement('label');
    label.htmlFor = `q${index + 1}`;
    label.textContent = question;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    questionList.appendChild(listItem);
  });
}

// Calculate the purity score
function calculateScore() {
  const checkboxes = questionList.querySelectorAll('input[type="checkbox"]');
  let checkedCount = 0;

  checkboxes.forEach(checkbox => {
    if ((checkbox as HTMLInputElement).checked) {
      checkedCount++;
    }
  });

  // Rice Purity Score = 100 - (number of checked boxes)
  const purityScore = 100 - checkedCount;

  // Display the result
  scoreElement.textContent = purityScore.toString();
  testSection.style.display = 'none';
  resultSection.style.display = 'block';
}

// Reset all checkboxes
function resetCheckboxes() {
  const checkboxes = questionList.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    (checkbox as HTMLInputElement).checked = false;
  });
}

// Event listeners
calculateButton.addEventListener('click', calculateScore);
resetButton.addEventListener('click', resetCheckboxes);

// Initialize the question list when the page loads
generateQuestionList();
