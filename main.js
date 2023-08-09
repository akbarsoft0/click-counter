const count = document.querySelector("input");
const buttons = document.querySelector(".buttons");
console.log(count, buttons);

// fixed: using the correct property to update value of input
buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        count.value++;
        color();
    }
    if (e.target.classList.contains("reset")) {
        count.value = 0;
        color();
    }
    // fixed: using the correct property to update value of input
    if (e.target.classList.contains("sub")) {
        count.value--;
        color();
    }
})

function color() {
    // fixed: using parseint() to convert string to integer before comparing
    if (parseInt(count.value) > 0) {
        count.style.color = "green";
    }
    // fixed: using parseint() to convert string to integer before comparing
    if (parseInt(count.value) < 0) {
        count.style.color = "red";
    }
    if (parseInt(count.value) == 0) {
        count.style.color = "black";
    }
}
