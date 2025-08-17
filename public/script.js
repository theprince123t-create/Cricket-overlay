function updateScoreboard() {
    const data = {
        team1: {
            name: document.getElementById('team1-name').value,
            score: document.getElementById('team1-score').value,
            wickets: document.getElementById('team1-wickets').value
        },
        team2: {
            name: document.getElementById('team2-name').value,
            score: document.getElementById('team2-score').value,
            wickets: document.getElementById('team2-wickets').value
        },
        crr: document.getElementById('crr').value,
        overBall: document.getElementById('over-ball').value,
        batsmen: {
            striker: {
                name: document.getElementById('striker-name').value,
                runs: document.getElementById('striker-runs').value,
                balls: document.getElementById('striker-balls').value
            },
            nonStriker: {
                name: document.getElementById('non-striker-name').value,
                runs: document.getElementById('non-striker-runs').value,
                balls: document.getElementById('non-striker-balls').value
            }
        },
        bowler: {
            name: document.getElementById('bowler-name').value,
            runs: document.getElementById('bowler-runs').value,
            wickets: document.getElementById('bowler-wickets').value
        }
    };

    fetch('/update-scoreboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        console.log(result);
        alert('Scoreboard updated!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error updating scoreboard.');
    });
}
