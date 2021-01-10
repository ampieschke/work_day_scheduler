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

    //put local storage in this loop?
    // if (hour == tasks.timeBlock) {
    //   $(".description").html(lineItem);
    //
  }
  renderLineItems();
}

// Will save line items to local storage
function save() {
  let text = $(this).siblings(".description").val();
  let dayHour = $(this).siblings(".hour").text();
  console.log(text);
  console.log(dayHour);

  localStorage.setItem("text", text);
  localStorage.setItem("timeblock", dayHour);

  let bingo = {
    text: text,
    timeBlock: dayHour,
  };
  tasks.push(bingo);

  localStorage.setItem("lineItem", JSON.stringify(tasks));

  console.log(tasks);
}

//Will call line items from local storage
function renderLineItems() {
  var lineItem = localStorage.getItem("text");
  for (let hour = 9; hour < 18; hour++) {
    if (hour == dayHour) {
      $(this).siblings(".desciption").html(lineItem.text);
    }
  }
  //   //Prints the last lineItem value to all rows
  //   $(".description").html(lineItem);
}

$("#schedule").on("click", ".saveBtn", save);

show_hours();
