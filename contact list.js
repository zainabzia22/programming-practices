// Array of Objects
let contacts = [
    { id: 1, name: "Ali", phone: "03001234567" },
    { id: 2, name: "Sara", phone: "03111234567" },
    { id: 3, name: "Ahmed", phone: "03221234567" }
];

// Display Contacts (Loop)
console.log("All Contacts:");
contacts.forEach(contact => {
    console.log(contact.id, contact.name, contact.phone);
});

// Add Contact
contacts.push({
    id: 4,
    name: "Ayesha",
    phone: "03331234567"
});

// Search Contact (filter)
let search = contacts.filter(contact => contact.name === "Sara");
console.log("\nSearch Result:");
console.log(search);

// Update Contact (map)
contacts = contacts.map(contact => {
    if (contact.id === 2) {
        return { ...contact, phone: "03110000000" };
    }
    return contact;
});

// Delete Contact (filter)
contacts = contacts.filter(contact => contact.id !== 1);

console.log("\nUpdated Contact List:");
contacts.forEach(contact => {
    console.log(contact);
});