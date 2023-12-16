document.getElementById('visualizeButton').addEventListener('click', function () {

    const selectedAlgorithm = document.getElementById('algorithmSelect').value;
    const inputData = document.getElementById('dataInput').value.split(',').map(Number);

    document.getElementById('visualizationContainer').innerHTML = '';
    document.getElementById('steps-involved').innerHTML = '';

    if (selectedAlgorithm === 'bubbleSort') {
        animateBubbleSort(inputData);
        bubbleSortVisualization(inputData);
    }
});

function animateBubbleSort(data) {
    let container = document.getElementById('visualizationContainer');

    for (let i = 0; i < data.length; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.innerText = data[i];

        container.appendChild(box);
    }

    let animations = getBubbleSortAnimations(data.slice());
    let i = 0;

    function animateStep() {
        if (i < animations.length) {
            const [index1, index2, swap] = animations[i];
            visualizeStep(container, index1, index2, swap);

            i++;
            setTimeout(animateStep, 1000);
        }
    }

    animateStep();
}

function visualizeStep(container, index1, index2, swap) {
    let boxes = container.childNodes;
    boxes[index1].classList.add('red');
    boxes[index2].classList.add('red');


    if (swap) {
        const temp = boxes[index1].innerText;
        boxes[index1].innerText = boxes[index2].innerText;
        boxes[index2].innerText = temp;
    }

    setTimeout(() => {
        boxes[index1].classList.remove('red');
        boxes[index2].classList.remove('red');
    }, 300);
}

function getBubbleSortAnimations(arr) {
    const animations = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            animations.push([j, j + 1, arr[j] > arr[j + 1]]);
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return animations;
}

function bubbleSortVisualization(data) {

    let stepsInvolved = document.getElementById('steps-involved');
    // stepsInvolved.innerHTML = "hello!"
    console.log("printing data")
    console.log(data)


    for (let i = 0; i < data.length; i++) {

        for (let j = 0; j < data.length - i - 1; j++) {

            const stepContainer = document.createElement('div');
            stepContainer.classList.add('step-container');

            stepContainer.innerHTML = `
                <h3>Step ${i + 1}</h3>
                <p>Comparing elements ${j + 1} and ${j + 2}</p>
            `;

            const box = document.createElement('div');
            box.classList.add('box');
            box.innerText = data[i];

            stepContainer.appendChild(box);
   
            let boxes = stepContainer.childNodes;
    
            stepsInvolved.appendChild(stepContainer);
    
            if (data[j] > data[j + 1]) {
                [data[j], data[j + 1]] = [data[j + 1], data[j]];
                stepsInvolved.innerHTML = `<p>As element ${j + 1} is greater than ${j + 2}, Swapping elements ${j + 1} and ${j + 2}<p>`;
            } else {
                stepsInvolved.innerHTML = `<p>As element ${j + 2} is greater than ${j + 1}, no swapping occurs</p>`;
            }

        }
    }
}

// document.getElementById('visualizeButton').addEventListener('click', function () {

//     var x = document.getElementById("imtired");
//     if (x.style.display == '' || x.style.display === "none") {
//         x.style.display = "block";
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var showText = '&darr; Steps Involved',
//         hideText = '&rarr; Steps Involved';

//     var stepsInvolved = document.querySelector('.steps-involved');
//     var steps = stepsInvolved.previousElementSibling;

//     var toggleLink = document.createElement('a');
//     toggleLink.href = '#';
//     toggleLink.className = 'toggleLink';
//     toggleLink.textContent = showText;

//     steps.appendChild(toggleLink);

//     toggleLink.addEventListener('click', function(e) {
//         e.preventDefault();
//         var isVisible = stepsInvolved.style.display !== 'none';
//         toggleLink.innerHTML = isVisible ? showText : hideText;
//         stepsInvolved.style.display = isVisible ? 'none' : 'block';
//     });
// });
