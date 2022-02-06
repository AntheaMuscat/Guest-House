function updateSpan(element) {
    document.getElementById("rangeValue").innerText = element.value;
}

function submitForm() { 
    let checkIn = document.forms[0]["checkInDate"].value;
    let checkOut = document.forms[0]["checkOutDate"].value;

    alert(`Rooms Booked from ${checkIn} to ${checkOut}.`);
}