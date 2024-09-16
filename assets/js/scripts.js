async function getHouseholdLink() {
    const email = document.getElementById("emailInput").value;
    const response = await fetch(`/get-household-update?email=${email}`);
    const data = await response.text();
    document.getElementById("output").innerText = data;
}
async function getWatchCode() {
    const email = document.getElementById("emailInput").value;
    const response = await fetch(`/get-temporary-code?email=${email}`);
    const data = await response.text();
    document.getElementById("output").innerText = data;
}
async function getResetPasswordLink() {
    const email = document.getElementById("emailInput").value;
    const response = await fetch(`/get-reset-password-link?email=${email}`);
    const data = await response.text();
    document.getElementById("output").innerText = data;
}