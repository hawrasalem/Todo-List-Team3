
$('.dropdown-item').on('click', function() {
  var btnObj = $(this).parent().siblings('button');
  $(btnObj).text($(this).text());
  $(btnObj).val($(this).attr('at'));
  // alert(    $(this).attr('at'));
  if ($(this).text() === "High Priority") {
    $(".dropdown-toggle").css('color', 'white');
    $(".dropdown-toggle").css('background', '#DC3545');
  } else if ($(this).text() === "Middle Priority") {
    $(".dropdown-toggle").css('color', 'white');
    $(".dropdown-toggle").css('background', '#FFC107');
  } else  if ($(this).text() === "Low Priority") {
    $(".dropdown-toggle").css('color', 'white');
    $(".dropdown-toggle").css('background', '#198754');
  }
});
let tasks = []

function addRow() {
  let newItem = document.getElementById('newlistitem').value;
  if (newItem != "" && $(".dropdown-toggle").val()!="") {
    var table = document.getElementById("listforitems");
    var row = table.insertRow();

    var cell = row.insertCell();
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    cell.appendChild(checkbox);

    cell = row.insertCell();
    cell.innerHTML = newItem;

    cell = row.insertCell();
    var priority = document.createElement("h6");
    priority.className = "badge bg-"+$(".dropdown-toggle").val();
    priority.innerHTML = $(".dropdown-toggle").text();
    cell.appendChild(priority);

    cell = row.insertCell();
    var action = document.createElement("i");
    action.className = "icon fa-sharp fa-solid fa-pencil";
    action.setAttribute('id', 'edit');
    cell.appendChild(action);
    action = document.createElement("i");
    action.className = "icon fas fa-trash-alt fa-lg text-warning";
    action.setAttribute('id', 'remove');
    cell.appendChild(action);

    cell = row.insertCell();
    var date = document.createElement("p");
    date.innerHTML = (new Date()).toString().split(' ').splice(1, 3).join(' ');
    cell.appendChild(date);

    document.getElementById('newlistitem').value = '';
    $(".dropdown-toggle").css('color', 'black');
    $(".dropdown-toggle").css('background', '#F8F9FA');
    $(".dropdown-toggle").text('Select Priority');
    $(".dropdown-toggle").val('');
    $("#newlistitem").focus();

  }

}

