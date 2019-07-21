// Na stronie znajduje się tablica z wynikami w lokalnych mistrzostwach piłkarskich.
//     Poniżej znajduje się formularz, który wypełniają wszyscy sędziowie po ukończonych rozgrywkach.
//
//     Napisz kod JavaScript w taki sposób, żeby po wybraniu odpowiednich drużyn nastąpiła walidacja:
//     Obie drużyny muszą być różne.
//     Liczba goli powinna być nieujemna.
//     Jeżeli formularz zostanie zweryfikowany poprawnie, odpowiednia informacja o wyniku spotkania powinna pojawić się w tablicy.

document.addEventListener("DOMContentLoaded", function () {

    var team1 = document.getElementById('team1');
    var team2 = document.getElementById('team2');
    var points1 = document.getElementById('points1');
    var points2 = document.getElementById('points2');

    table = document.querySelector('table');
    submit = document.querySelector('button');
    filedsToValidate = [team1, team2, points1, points2];

    for (let i = 0; i < filedsToValidate.length; i++) {
        filedsToValidate[i].addEventListener('input', function () {
            console.log(validateForm());
            submit.disabled = !validateForm();
        })
    }

    submit.addEventListener('click', function () {
        newRow = document.createElement('tr');
        newTeam1 = document.createElement('td');
        newTeam2 = document.createElement('td');
        newScore = document.createElement('td');
        newTeam1.innerText = team1.value;
        newTeam2.innerText = team2.value;
        newScore.innerText = points1.value+' - '+points2.value;
        newRow.appendChild(newTeam1);
        newRow.appendChild(newTeam2);
        newRow.appendChild(newScore);
        table.firstElementChild.appendChild(newRow);
    })

    function validateForm() {
        return validateTeams() && validatePoints();
    }

    function validateTeams() {
        return team1.value !== team2.value;
    }

    function validatePoints() {
        return parseInt(points1.value) >= 0 && parseInt(points2.value) >= 0
    }

});
