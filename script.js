function idCard() {
  var firstName = document.getElementById('fname').value;
  var lastName = document.getElementById('lname').value;
  var address = document.getElementById('address').value;

  document.getElementById('postFullName').innerHTML = firstName + " " + lastName;
  document.getElementById('postAddress').innerHTML = address;

  var age = document.getElementById('age').value;

  var phone = document.getElementById('phone').value;

  var numberArray = [];
  numberArray.push(age);
  numberArray.push(phone);
  console.log(numberArray);

  for(var i = 0;i < numberArray.length;i++ ){
    if(numberArray[i] <= 100){
      document.getElementById('postAge').innerHTML = "Age:" + " " + age;

    } else if (numberArray[i] > 100) {
      document.getElementById('postPhoneNumber').innerHTML = "Phone Number:" + " " + phone;
    }
  }


}