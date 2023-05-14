function submitData() {
    var nameInput = document.getElementById("name");
    var valueInput = document.getElementById("value");
    var outputDiv = document.getElementById("output");
    
    var name = nameInput.value;
    var value = valueInput.value;
    
    outputDiv.innerHTML = "Hello " + name + ", you entered the value " + value;
  }