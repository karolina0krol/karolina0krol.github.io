
//     (function() {
//       emailjs.init("YOUR_PUBLIC_KEY"); // wklej swój public key z EmailJS
//     })();

//     const radios = document.querySelectorAll('input[name="shipping"]');
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     const totalElement = document.getElementById('total');
//     const hiddenItems = document.getElementById('selected_items');
//     const hiddenTotal = document.getElementById('total_value');

//     function updateTotal() {
//       let total = 0;
//       let selected = [];
//       let highestGroup = 0;

//       checkboxes.forEach(cb => {
//         if (cb.checked) {
//           selected.push(cb.value);
//           total += parseFloat(cb.dataset.value);
//           highestGroup = Math.max(highestGroup, parseInt(cb.dataset.group));
//           if (cb.value.includes("25")) total += 25;
//           if (cb.value.includes("35")) total += 35;
//           if (cb.value.includes("60")) total += 60;
//           if (cb.value.includes("100")) total += 100;
//           if (cb.value.includes("150")) total += 150;
//           if (cb.value.includes("350")) total += 350-35;
//         }
//       });

//       let shippingCost = 0;
//   if(highestGroup === 1) shippingCost = 12;
//   if(highestGroup === 2) shippingCost = 17;
//   if(highestGroup === 3) shippingCost = 19;

//   radios.forEach(r => {
//     if (r.checked) {
//       selected.push(r.value); // dodajemy do listy wybranych
//       total += parseFloat(r.dataset.value); // dodajemy wartość wysyłki
//     }
//   });

//   total += shippingCost;

      
  
//       selected.push("Wysyłka: " + shippingCost + " PLN");
//       totalElement.textContent = "Total: " + total + " pln";
//       hiddenItems.value = selected.join(", ");
//       hiddenTotal.value = total + " pln";
//     }

//     checkboxes.forEach(cb => cb.addEventListener("change", updateTotal));
//     radios.forEach(r => r.addEventListener("change", updateTotal));

//     updateTotal();

//     // Obsługa wysyłki formularza
//     document.getElementById("orderForm").addEventListener("submit", function(e) {
//       e.preventDefault();

//       emailjs.sendForm("service_bh70s1h", "YOUR_TEMPLATE_ID", this)
//         .then(() => {
//           alert("Message sent!");
//           this.reset();
//           updateTotal();
//         }, (err) => {
//           alert("Błąd: " + JSON.stringify(err));
//         });
//     });











(function() {
  emailjs.init("ZQJmi-dTf0HDCEHMc"); 
})();

const radios = document.querySelectorAll('input[name="shipping"]');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalElement = document.getElementById('total');
const hiddenItems = document.getElementById('selected_items');
const hiddenTotal = document.getElementById('total_value');
const hiddenShipping = document.getElementById('shipping_cost');

function updateTotal() {
  let total = 0;
  let selected = [];
  let highestGroup = 0;


  checkboxes.forEach(cb => {
    if(cb.checked) {
      selected.push(cb.value);
      total += parseFloat(cb.dataset.value); 
      highestGroup = Math.max(highestGroup, parseInt(cb.dataset.group));
    }
  });

  let shippingCost = 0;
const selectedShipping = document.querySelector('input[name="shipping"]:checked');
if (selectedShipping) {
  if (selectedShipping.value === "Poland_1") {
    if (highestGroup === 1) shippingCost = 10;
    if (highestGroup === 2) shippingCost = 15;
    if (highestGroup === 3) shippingCost = 20;
  }
    if (selectedShipping.value === "Poland_2") {
    if (highestGroup === 1) shippingCost = 12;
    if (highestGroup === 2) shippingCost = 17;
    if (highestGroup === 3) shippingCost = 19;
  }
  if (selectedShipping.value === "International") {
    if (highestGroup === 1) shippingCost = 30; // 10 + 20
    if (highestGroup === 2) shippingCost = 40; // 15 + 25
    if (highestGroup === 3) shippingCost = 50; // 20 + 30
  }
}
  
  total += shippingCost;

  selected.push("Wysyłka: " + shippingCost + " PLN");

  totalElement.textContent =  total + " pln";
  hiddenItems.value = selected.join(", ");
  hiddenTotal.value = total + " PLN";
}

checkboxes.forEach(cb => cb.addEventListener("change", updateTotal));
radios.forEach(r => r.addEventListener("change", updateTotal));

updateTotal();


document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_bh70s1h", "template_qd4eg5n", this)
    .then(() => {
      alert("Message sent!");
      this.reset();
      updateTotal();
    }, (err) => {
      alert("Błąd: " + JSON.stringify(err));
    });
});



