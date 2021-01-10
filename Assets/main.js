var d = new Date();
var tasks = [];

document.getElementById("currentDay").innerHTML = d;

/* Show 9 hours within a work day. Each hour is displayed in a row. Each row contains an hour, a test array and a save button */
function show_hours() {
  // Print out nine Hours with appropriate formating classes
  for (let hour = 9; hour < 18; hour++) {
    var current_hour = d.getHours();
    let hour_class;
    if (hour < current_hour) {
      hour_class = "past";
    } else if (hour == current_hour) {
      hour_class = "present";
    } else {
      hour_class = "future";
    }

    // Create the row elements and attached their hour values
    $("#schedule").append(`<row class="row time-block" value=${hour}>
        <div class="col-2 hour">${hour > 12 ? hour - 12 : hour}</div>
        <textarea class="col-9 description ${hour_class}"></textarea>
        <button class="col-1 saveBtn"><i class="fas fa-save"></i></button>
        </row>`);
  }
  renderLineItems();
}

// Will save line items to local storage
function save() {
  let item = $(this).siblings(".description").val();
  let dayHour = $(this).siblings(".hour").text();
  console.log(item);
  console.log(dayHour);

  localStorage.setItem("item", item);
  localStorage.setItem("timeblock", dayHour);

  let entry = {
    item: item,
    timeBlock: dayHour,
  };
  tasks.push(entry);

  localStorage.setItem("lineItem", JSON.stringify(tasks));

  console.log(tasks);
}

//Will call line items from local storage
function renderLineItems() {
  //Prints the last stored item value to all rows beacuse I can't solve this freaking puzzle.
  $(".description").html(JSON.parse(localStorage.getItem("item")));
}

//Calls for the save function to run on click
$("#schedule").on("click", ".saveBtn", save);

//Calls for show_hours funtion to run
show_hours();
