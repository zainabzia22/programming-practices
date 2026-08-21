// storage.js

export function savePassword(password) {
    try {
        let passwords = JSON.parse(localStorage.getItem("passwords")) || [];

        passwords.push(password);

        localStorage.setItem("passwords", JSON.stringify(passwords));
    } catch (error) {
        console.error("Error saving password:", error.message);
    }
}

export function getPasswords() {
    try {
        return JSON.parse(localStorage.getItem("passwords")) || [];
    } catch (error) {
        console.error("Error reading passwords:", error.message);
        return [];
    }
}
