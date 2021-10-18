const labels = document.querySelectorAll(".label")

labels.forEach((current) => {
    let a = current.innerHTML.split("").map((letter, idx) => {
        return `<span  style = "transition-delay : ${idx * 60}ms"> ${letter} </span>`
    }).join("")
    current.innerHTML = a

})


// PLEASE LIKE MY GIT REPOSITORY
