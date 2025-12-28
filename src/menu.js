import roast from "./assets/roastDish.png";
import platter from "./assets/sizzlePlatter.png";
import curry from "./assets/specialCurry.png";

export const menu = () => {
    const mainDiv  = document.createElement('div');
    
    const descDiv = document.createElement('div');
    const p1 = document.createElement('p');
    p1.style.whiteSpace = 'pre-line'
    p1.textContent = `Baratie’s menu offers hearty sailor’s fare and refined pirate cuisine inspired by adventures across the East Blue and Grand Line. From rich captain’s roasts to sizzling platters and sea‑spice curries, every dish is designed to refuel hungry crews and delight nobles brave enough to dine on the open sea.
    ~~~~~~~~~~~~~~~~~~~~~~~~~
    
    `;   
    
    const dish1 = document.createElement('div');
    const image1 = document.createElement('img');
    image1.src = roast;   
    const p2 = document.createElement('p');
    p2.textContent = "Slow-braised captain’s cut drenched in a deep red wine and sea-stock demi-glace, served with rosemary potatoes, seared seasonal veggies, and a Baratie spice rub worthy of the Grand Line.";
  
    const dish2 = document.createElement('div');
    const image2 = document.createElement('img');
    image2.src = platter;  
    const p3 = document.createElement('p');
    p3.textContent = "Char-grilled sirloin over a bed of fluffy rice, topped with sweet bell pepper rings and Baratie’s secret herb butter, served with golden corn and garden greens for hungry pirates fresh off the waves.";

    const dish3 = document.createElement('div');
    const image3 = document.createElement('img');
    image3.src = curry;  
    const p4 = document.createElement('p');
    p4.style.whiteSpace = 'pre-line';
    p4.textContent = `Baratie's special, a Creamy East Blue curry sailing around an island of steamed rice, crowned with crispy “sea bird” drumettes and fresh vegetables.
    
    `;
    
    descDiv.appendChild(p1);
    
    dish1.appendChild(image1);
    dish1.appendChild(p2);
    
    dish2.appendChild(image2);
    dish2.appendChild(p3);
    
    dish3.appendChild(image3);
    dish3.appendChild(p4);
    
    mainDiv.appendChild(descDiv);
    mainDiv.appendChild(dish1);
    mainDiv.appendChild(dish2);
    mainDiv.appendChild(dish3);
    
    return mainDiv;
};