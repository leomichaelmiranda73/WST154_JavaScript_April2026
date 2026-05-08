function generateStory(e) {
    e.preventDefault();

    let personName = document.getElementById('personName').value;
    let place = document.getElementById('place').value;
    let companion = document.getElementById('companion').value;
    let timeOfDay = document.getElementById('timeOfDay').value;
    let weather = document.getElementById('weather').value;
    let itemCount = document.getElementById('itemCount').value;
    let item = document.getElementById('item').value;
    let silverAmount = parseInt(document.getElementById('silverAmount').value);
    let magicType = document.getElementById('magicType').value;
    let familyMember = document.getElementById('familyMember').value;

    // BOOLEAN CONDITIONS
    let hasEnoughSilver = silverAmount >= 10;
    let isStormy = weather.toLowerCase() === "stormy";
    let hasCompanion = companion.trim() !== "";

    let story = `On a ${timeOfDay} ${weather} day, ${personName} arrived in ${place}`;

    // Companion condition
    if (hasCompanion) {
        story += ` with ${companion}. `;
    } else {
        story += ` alone. `;
    }

    story += `Carrying ${itemCount} ${item}, ${personName} searched for a ${magicType} book to save a beloved ${familyMember}. `;

    // Weather condition
    if (isStormy) {
        story += `A violent storm made the journey dangerous, forcing ${personName} to take shelter. `;
    } else {
        story += `The journey was calm and smooth. `;
    }

    // Money condition
    if (hasEnoughSilver) {
        story += `${personName} had enough silver to buy the magical book and quickly saved the ${familyMember}. `;
    } else {
        story += `${personName} did not have enough silver and had to complete a task to earn the book. `;
        story += `After effort, the ${familyMember} was finally saved. `;
    }

    story += `From that day on, ${personName} became known in ${place} for bravery and ${magicType}.`;

    document.getElementById('story').innerText = story;
}

// CONNECT FORM EVENT
document.getElementById('storyForm').addEventListener('submit', generateStory);

