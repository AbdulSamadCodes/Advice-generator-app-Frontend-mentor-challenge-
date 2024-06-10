
// async function to fetch advice from api

async function fectchAdvice() {
    const advicePromise = await fetch("https://api.adviceslip.com/advice");
    const adviceResult = await advicePromise.json();

    return adviceResult;
}

/* function to handle the event */
function handleEvent() {
    const adviceCounter = document.querySelector("[data-advice-count]");
    const adviceText = document.querySelector("[data-advice-text]");
    let adviceCount = 1;

    document.querySelector("[data-advice-btn]").addEventListener("click", function () {
        adviceCounter.innerText = ++adviceCount;

        fectchAdvice().then((adviceObject) => {
            const advice = adviceObject.slip.advice;
            adviceText.innerText = advice;
        });
    });
}

handleEvent();




