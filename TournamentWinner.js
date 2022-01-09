// sample input 

//competition = [['HTML', 'C#'], ['C#', 'Python'], ['Python','HTML']]
//restults = [0, 0, 1]

//output: C# beats HTML, Python beats C# and Python beats html
// Html: 0 points
// C#: 3 points
// Python: 6 points


const HOME_TEAM_WON = 1 

function tournamentWinner(competitions, results) {
  // Write your code here.
	let currentBestTeam = ''
	const scores = {[currentBestTeam]: 0}
	
	for(let idx=0; idx < competitions.length; idx++) {
		const result = results[idx]
		const [homeTeam, awayTeam] = competitions[idx];
		
		const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam
		
		updateScore(winningTeam, 3, scores)
		
		if(scores[winningTeam] > scores[currentBestTeam]) {
			currentBestTeam = winningTeam
		}
	}
  return currentBestTeam;
}

function updateScore(team, points, scores) {
	if(!(team in scores)) scores[team] = 0
	
	scores[team] += points;
}

const competitions = [['HTML', 'C#'], ['C#', 'Python'], ['Python','HTML']]
const results = [0, 0, 1]

console.log(tournamentWinner(competitions, results))