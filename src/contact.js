import map from "./assets/onePieceMap.png";

export const contact = () => {
    const mainDiv  = document.createElement('div');

    const h0 = document.createElement('h1');
    h0.textContent = "Get in touch with the Baratie crew!"
    
    const h1 = document.createElement('h2');
    h1.textContent = "location"
    const p1 = document.createElement('p');
    p1.textContent = "Floating restaurant anchored in the Sambas region of the East Blue, near the Baratie Sea Route."

    const h2 = document.createElement('h2');
    h2.textContent = "Contact"
    const p2 = document.createElement('p');
    p2.style.whiteSpace = 'pre-line';
    p2.textContent = `Email: baratie@eastblue.sea
    Snail frequency: +EB-0001-BARATIE`

    const h3 = document.createElement('h2');
    h3.textContent = "Hours"
    const p3 = document.createElement('p');
    p3.style.whiteSpace = 'pre-line';
    p3.textContent = `Open daily: 11:00–23:00 (East Blue Standard Time).
    Closed on days with severe Grand Line storms`;


    mainDiv.appendChild(h0);
    mainDiv.appendChild(h1);
    mainDiv.appendChild(p1);
    mainDiv.appendChild(h2);
    mainDiv.appendChild(p2);
    mainDiv.appendChild(h3);
    mainDiv.appendChild(p3);

    const mapImage = document.createElement('img');
    mapImage.src = map;
    mainDiv.appendChild(mapImage);



    return mainDiv;
};