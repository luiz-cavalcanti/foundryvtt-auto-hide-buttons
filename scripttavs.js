Hooks.on('ready', () => {
    if (!game.user.isGM) {
        const style = document.createElement("style");
        style.innerHTML = `
            /* Ocultar botões "Return to Setup" e "Back to The Forge" para jogadores */
            button:contains("RETURN TO SETUP"),
            button:contains("BACK TO THE FORGE") {
                display: none;
            }
        `;
        document.head.appendChild(style);
    }
});
