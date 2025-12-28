import baratie from "./assets/baratie.png";

export const home = () => {
    const mainDiv = document.createElement('div');

    const imageDiv  = document.createElement('div');
    const baratieImage = document.createElement('img');
    baratieImage.className = "baratie-image";
    baratieImage.src = baratie;
    imageDiv.appendChild(baratieImage);
    mainDiv.appendChild(imageDiv);
    
    const paraDiv = document.createElement('div');
    paraDiv.className = 'para-div';
    const p1 = document.createElement('p');
    p1.className = 'welcome-text';
    const p2 = document.createElement('p');
    p2.className = 'description';
    p2.style.whiteSpace = 'pre-line'

    p1.textContent = 'Welcome to Baratie!';
    p2.textContent = `Baratie is the only floating restaurant in the Sambas region of the mighty East Blue. With top class chefs and over nine years of experience in the industry, no one does it better than us!
        
    Whether you are an ambitious pirate in search of the infamous One Piece, or if you are simply spending your holidays on the sea, Baratie will offer you with an experience you can never forget!`
    paraDiv.appendChild(p1);
    paraDiv.appendChild(p2);
    mainDiv.appendChild(paraDiv);

    return mainDiv;
};