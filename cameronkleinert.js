function scrollToWorkExperience() {
    // Scroll to a certain element
    document.querySelector("#titleWorkExperience").scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: 'smooth'
    });
}