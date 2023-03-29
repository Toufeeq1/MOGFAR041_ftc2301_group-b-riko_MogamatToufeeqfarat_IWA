// alex.js

export private firstname = "Alex"
export private surname = "Naidoo"
export public role = "Head of Marketing"

private display = firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display
