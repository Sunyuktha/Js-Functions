function showStringDetails(method) {
    
    document.getElementById('string-modal').style.display = 'block';

    ['length', 'slice', 'toUpperCase', 'toLowerCase', 'concat', 'replace', 'trim'].forEach(id => {
        document.getElementById(id).style.display = 'none';
    });

    document.getElementById(method).style.display = 'block';
}

function closeModal() {
    document.getElementById('string-modal').style.display = 'none';
}

function showLengthExamples() {
    alert("Example:\n'Hello'.length returns 5");
}

function showSliceExamples() {
    alert("Example:\n'Hello, World!'.slice(0, 5) returns 'Hello'");
}

function showToUpperCaseExamples() {
    alert("Example:\n'hello'.toUpperCase() returns 'HELLO'");
}

function showToLowerCaseExamples() {
    alert("Example:\n'HELLO'.toLowerCase() returns 'hello'");
}

function showConcatExamples() {
    alert("Example:\n'Hello'.concat(' ', 'World') returns 'Hello World'");
}

function showReplaceExamples() {
    alert("Example:\n'Hello, World!'.replace('World', 'JavaScript') returns 'Hello, JavaScript!'");
}

function showTrimExamples() {
    alert("Example:\n'   Hello   '.trim() returns 'Hello'");
}
