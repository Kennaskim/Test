function submitForm() {
    // Fetching values from form elements
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phoneNo = document.getElementById("Phone.No").value;

    // Fetching selected radio button value
    var complaintType;
    var radios = document.getElementsByName("complaintType");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            complaintType = radios[i].value;
            break;
        }
    }

    var complaintText = document.getElementById("complaint").value;

    // Displaying the form data in an alert
    alert("Form submitted!\n\n" +
        "Tenant's Name: " + name + "\n" +
        "Email Address: " + email + "\n" +
        "Phone Number: " + phoneNo + "\n" +
        "Complaint Type: " + complaintType + "\n" +
        "Complaint Text: " + complaintText);
}