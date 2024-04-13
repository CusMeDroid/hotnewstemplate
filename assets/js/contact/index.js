function mContact() {
  const mUsername = document.getElementById("username").value;
  const mEmail = document.getElementById("email").value;
  const mSubject = document.getElementById("subject").value;
  if (mUsername < 1 || mEmail < 1 || mSubject < 1) {
    alert("Please do not ne empty!");
  } else {
    window.open('mailto:cusmedroidteam@gmail.com?subject='+mUsername+', '+mEmail+'&body='+mSubject);
  }
}
