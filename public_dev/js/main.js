function toggleState(item) {
    if (item.className == "btn-circle-on") {
        item.className = "btn-circle-off";
        document.getElementById("togglebtnId").innerHTML  = "OFF";
    } else {
        item.className = "btn-circle-on";
        document.getElementById("togglebtnId").innerHTML  = "ON";
    }
}