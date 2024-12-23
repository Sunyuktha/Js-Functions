
// Function to show the selected array method details
function showArrayDetails(method) {
    // Hide all array-detail elements
    const details = document.querySelectorAll('.array-detail');
    details.forEach(detail => {
        detail.style.display = 'none';
    });

    // Show the modal
    const modal = document.getElementById('array-modal');
    modal.style.display = 'block';

    // Show the selected method detail
    const selectedDetail = document.getElementById(method);
    if (selectedDetail) {
        selectedDetail.style.display = 'block';
    }
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('array-modal');
    modal.style.display = 'none';
}

// Function to show an example for each array method
function showExample(example) {
    alert(example);
}
