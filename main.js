var d = new Date();

var timeBlockEl = document.querySelector("#time-block");

var hour_block = `<row class="row time-block" value="9">
<div class="col-2 hour">9am</div>
<textarea class="col-9 description past"></textarea>
<button class="col-1 saveBtn"><i class="fas fa-save"></i></button>
</row>`;

document.getElementById("currentDay").innerHTML = d;
document.getElementById("demo").innerHTML = d.getHours();

/* Needs to be able to show 9 hours within a work day. Each hour is displayed in a row. Each row contains an hour, a test array and a save button */
function show_hours() {
  // Print out nine Hours
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

    // Create a row
    $("#schedule").append(`<row class="row time-block" value=${hour}>
        <div class="col-2 hour">${hour > 12 ? hour - 12 : hour}</div>
        <textarea class="col-9 description ${hour_class}"></textarea>
        <button class="col-1 saveBtn"><i class="fas fa-save"></i></button>
        </row>`);
  }
}

function save() {
  let text = $(this).siblings(".description").val();
  console.log(text);
  $(this).siblings(".description").prepend(text);
}

$("#schedule").on("click", ".saveBtn", save);

show_hours();
