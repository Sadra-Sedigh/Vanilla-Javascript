const LinkEvent1 = document.getElementById("Scroll1")
const LinkEvent2 = document.getElementById("Scroll2")
const LinkEvent3 = document.getElementById("Scroll3")
const LinkEvent4 = document.getElementById("Scroll4")
const LinkEvent5 = document.getElementById("Scroll5")


// Select the ingredient checkboxes
const checkboxes = document.querySelectorAll('#menu input[type="checkbox"]');

// Initialize the selected ingredients array
let selectedIngredients = [];

// Update the selected ingredients and total price on checkbox change
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const ingredient = this.value;
    const price = parseFloat(this.parentElement.querySelector('.price').innerText.substring(2));
    
    if (this.checked) {
      selectedIngredients.push(ingredient);
      totalPrice += price;
    } else {
      const index = selectedIngredients.indexOf(ingredient);
      if (index > -1) {
        selectedIngredients.splice(index, 1);
        totalPrice -= price;
      }
    }
    
    updateSelectedIngredients();
    updateTotalPrice();
  });
});

// Update the selected ingredients list
function updateSelectedIngredients() {
  const selectedIngredientsList = document.getElementById('selectedIngredients');
  selectedIngredientsList.innerHTML = '';
  
  selectedIngredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.innerText = ingredient;
    selectedIngredientsList.appendChild(li);
  });
}

// Update the total price
function updateTotalPrice() {
  const totalPriceElement = document.getElementById('totalPrice');
  totalPriceElement.innerText = '$' + totalPrice.toFixed(2);
}

// Initialize the total price
let totalPrice = 0.00;

// Update the initial total price
updateTotalPrice();







function scrollToElements(){
    
    document.getElementById("info-container").scrollIntoView()

}
function scrollToElements2(){
    
    
    document.querySelector(".Products").scrollIntoView()
  
}
function scrollToElements3(){
    
  
    document.querySelector(".workingforus").scrollIntoView()
   
}
function scrollToElements4(){
    
   
    document.querySelector(".filler-page").scrollIntoView()
   
}
function scrollToElement5(){
    
   
    document.querySelector(".footer-container").scrollIntoView()
}



LinkEvent1.addEventListener("click",scrollToElements)
LinkEvent2.addEventListener("click",scrollToElements2)
LinkEvent3.addEventListener("click",scrollToElements3)
LinkEvent4.addEventListener("click",scrollToElements4)
LinkEvent5.addEventListener("click",scrollToElement5)



