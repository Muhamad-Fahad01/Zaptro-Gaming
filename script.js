document.addEventListener("DOMContentLoaded", function(){

    const orderButtons = document.querySelectorAll(".order-btn");

    orderButtons.forEach(function(button){
        button.addEventListener("click", function(event){
            event.preventDefault();

            const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
            orderModal.show();
        });
    });

});
