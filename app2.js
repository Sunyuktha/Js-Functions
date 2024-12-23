function showArithmeticExamples() {
    alert(
        "Arithmetic Examples:\n" +
        "1 + 2 = " + (1 + 2) + "\n" +
        "10 - 5 = " + (10 - 5) + "\n" +
        "4 * 3 = " + (4 * 3) + "\n" +
        "20 / 4 = " + (20 / 4)
    );
}

function showRelationalExamples() {
    alert(
        "Relational Examples:\n" +
        "5 > 3: " + (5 > 3) + "\n" +
        "10 < 7: " + (10 < 7) + "\n" +
        "8 == 8: " + (8 == 8) + "\n" +
        "9 != 6: " + (9 != 6)
    );
}

function showLogicalExamples() {
    alert(
        "Logical Examples:\n" +
        "true && false: " + (true && false) + "\n" +
        "true || false: " + (true || false) + "\n" +
        "!true: " + (!true)
    );
}

function showAssignmentExamples() {
    let x = 10;
    x += 5;
    x *= 2;
    alert(
        "Assignment Examples:\n" +
        "x = 10\n" +
        "x += 5 -> x = " + x / 2 + "\n" +
        "x *= 2 -> x = " + x
    );
}

function showOperatorDetails(operatorType) {
    // Show modal
    const modal = document.getElementById('operator-modal');
    modal.style.display = 'block';

    // Hide all operator details
    const operatorDetails = document.querySelectorAll('.operator-detail');
    operatorDetails.forEach(detail => detail.style.display = 'none');

    // Display the selected operator details
    const selectedDetail = document.getElementById(operatorType);
    if (selectedDetail) {
        selectedDetail.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('operator-modal');
    modal.style.display = 'none';
}
