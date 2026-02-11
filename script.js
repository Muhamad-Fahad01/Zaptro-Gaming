const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(function(button){
    button.addEventListener("click", function(event){
        event.preventDefault();

        // Bootstrap modal open
        const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
        orderModal.show();
    });
});