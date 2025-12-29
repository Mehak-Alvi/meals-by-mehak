function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  if (name === "") {
    alert("Please enter your name");
    return false;
  }
  if (email === "") {
    alert("Please enter your email");
    return false;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address");
    return false;
  }
  if (message === "") {
    alert("Please enter your message");
    return false;
  }
  alert("Form submitted successfully!");
  return true;

}
function incomingFeature() {
    const toast = document.createElement("div");
    toast.innerText = "Feature Incoming!";
    Object.assign(toast.style, {
        position: "fixed",
        top: "80px", 
        right: "20px",
        backgroundColor: "yellow", 
        color: "black",
        padding: "12px 25px",
        borderRadius: "5px",
        fontWeight: "bold",
        zIndex: "1000",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        transition: "opacity 0.5s"
    });

    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 500);
    }, 2000);
}
