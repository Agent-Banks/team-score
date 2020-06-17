let teamOne = 0
let teamTwo = 0
function handleAddingPointToTeam1() {
  const valueCount = document.querySelector('.team1Score')
  teamOne++
  valueCount.textContent = `${teamOne}`
}

function handleSubtractingPointToTeam1() {
  const valueCount = document.querySelector('.team1Score')
  teamOne--
  if (teamOne < 0) {
    teamOne = 0
  }
  valueCount.textContent = `${teamOne}`
}

function handleAddingPointToTeam2() {
  const valueCount = document.querySelector('.team2Score')
  teamTwo++
  valueCount.textContent = `${teamTwo}`
}

function handleSubtractingPointToTeam2() {
  const valueCount = document.querySelector('.team2Score')
  teamTwo--
  if (teamTwo < 0) {
    teamTwo = 0
  }
  valueCount.textContent = `${teamTwo}`
}

const main = () => {
  const team1AddPoint = document.querySelector('.team1 .add')
  const team1SubtractPoint = document.querySelector('.team1 .subtract')

  const team2AddPoint = document.querySelector('.team2 .add')
  const team2SubtractPoint = document.querySelector('.team2 .subtract')

  team1AddPoint.addEventListener('click', handleAddingPointToTeam1)
  team1SubtractPoint.addEventListener('click', handleSubtractingPointToTeam1)

  team2AddPoint.addEventListener('click', handleAddingPointToTeam2)
  team2SubtractPoint.addEventListener('click', handleSubtractingPointToTeam2)

  const team1Name = document.querySelector('.team1 .team1NameInput')
  const team1NameLog = document.getElementById('.team1 .team1Name')
  team1Name.addEventListener('.team1 .team1NameInput', updateValue)
  function updateValue(e) {
    team1NameLog.textContent = e.target.Value
  }
}

document.addEventListener('DOMContentLoaded', main)
