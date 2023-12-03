document.addEventListener('DOMContentLoaded', function() {
    // Get the toast element
    var toastElement = document.getElementById('liveToast');

    // Create a new Bootstrap Toast instance
    var toast = new bootstrap.Toast(toastElement);

    // Show the toast
    toast.show();
  });