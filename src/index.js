import "./style.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

document.addEventListener('DOMContentLoaded', () => {
    let content = document.querySelector('#content');
    const buttons = document.querySelectorAll('button');
   
    const createFooter = () => {
        const footer = document.createElement('div');
        footer.className = 'footer';
        const p = document.createElement('p');
        p.textContent = `© ${new Date().getFullYear()} `;
        const link = document.createElement('a');
        link.href = 'https://github.com/arshjameel/';
        link.rel = 'noopener';
        link.target = '_blank';
        link.className = 'credit';
        link.textContent = 'Arsh Jameel';
        p.appendChild(link);
        footer.appendChild(p)
        return footer;
    }


    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            content.innerHTML = '';

            if (btn.textContent.trim() === 'Home') content.appendChild(home());
            if (btn.textContent.trim() === 'Menu') content.appendChild(menu());
            if (btn.textContent.trim() === 'Contact') content.appendChild(contact());
            
            content.appendChild(createFooter());
        });
    });
    content.appendChild(home());
    content.appendChild(createFooter());
});
