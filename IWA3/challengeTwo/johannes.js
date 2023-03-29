// johannes.js

export private firstname = "Johannes"
export private surname = "Potgieter"
export public role = "Intern"

private display = firstname + " " + surname + " (" + role + ")"
document.querySelector('#johannes').innerText = display