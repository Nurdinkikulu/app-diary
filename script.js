document.getElementById("addEventBtn").addEventListener("click", function() {
  let date = document.getElementById("dateInput").value;
  let event = document.getElementById("eventInput").value;

  if (date && event) {
    addEvent(date, event);
  } else {
    alert("Please fill in both the date and event.");
  }
});

function addEvent(date, event) {
  let eventsList = document.getElementById("eventsList");

  let li = document.createElement("li");

  let eventText = document.createElement("span");
  eventText.textContent = `${date}: ${event}`;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function() {
    eventsList.removeChild(li);
  });

  li.appendChild(eventText);
  li.appendChild(deleteBtn);
  eventsList.appendChild(li);

  // Clear inputs after adding
  document.getElementById("dateInput").value = "";
  document.getElementById("eventInput").value = "";
}