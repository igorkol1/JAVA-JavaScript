document.addEventListener("DOMContentLoaded", function () {

    console.log("JS Ready");


    let spinner = document.getElementById('spinnerValue');
    let upButton = spinner.parentElement.querySelectorAll('button')[0];
    let downButton = spinner.parentElement.querySelectorAll('button')[1];

    let stepValue = 1;
    let minValue = 0;
    let maxValue = 100;

    let progresBar = document.querySelector('.progressInner');

    let saveButton = document.querySelector('button[class$="saveSettings"]');

    evaluatePercent();

    upButton.addEventListener('click', function () {
        let spinnerValue = parseInt(spinner.value);
        if ((spinnerValue + stepValue) <= maxValue) {
            spinner.value = spinnerValue + stepValue;
        }
        evaluatePercent();
    });

    downButton.addEventListener('click', function () {
        let spinnerValue = parseInt(spinner.value);

        if ((spinnerValue - stepValue) >= minValue) {
            spinner.value = spinnerValue - stepValue;
        }
        evaluatePercent();
    });

    function evaluatePercent() {
        if (parseInt(spinner.value) > maxValue) {
            progresBar.style.width = '100%';
        } else {
            progresBar.style.width = ((parseInt(spinner.value) / maxValue) * 100) + '%';
        }
    }

    saveButton.addEventListener('click', function () {
        stepValue = parseInt(document.getElementById('step').value);
        minValue = parseInt(document.getElementById('min').value);
        maxValue = parseInt(document.getElementById('max').value);
        evaluatePercent();
    })

});
