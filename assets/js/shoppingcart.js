document.addEventListener("DOMContentLoaded", function () {
    updateTotal();

    // Hämta alla antal-inputs och lägg till event listener
    document.querySelectorAll('.cart-item input[type="number"]').forEach(input => {
        input.addEventListener('change', updateTotal);
    });

    // Hämta alla "Ta bort"-knappar och lägg till event listener
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', function () {
            this.parentElement.remove();
            updateTotal();
        });
    });
});

// Funktion för att uppdatera totalpris
function updateTotal() {
    let total = 0;

    document.querySelectorAll('.cart-item').forEach(item => {
        let priceText = item.querySelector('.item-info p').textContent;
        let price = parseInt(priceText.replace(/\D/g, '')); // Extrahera siffror
        let quantity = item.querySelector('input[type="number"]').value;

        total += price * quantity;
    });

    document.getElementById('total-price').textContent = total + " kr";
}
