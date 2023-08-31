import React from "react";

import { ResizeObserver } from '@juggle/resize-observer';

const cardsContainer: any = typeof document !== 'undefined' && document.querySelector(".cards")!;
const cardsContainerInner = typeof document !== 'undefined' && document.querySelector(".cards__inner")!;
const cards: Array<HTMLDivElement> | any = typeof document !== 'undefined' && Array.from(document.querySelectorAll(".card"))!;
const overlay: any = typeof document !== 'undefined' && document.querySelector(".overlay")!;

console.log(cards);

const applyOverlayMask = (e: any) => {
    const overlayEl = e.currentTarget;
    const x = e.pageX - cardsContainer!.offsetLeft;
    const y = e.pageY - cardsContainer!.offsetTop;

    overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
};

const createOverlayCta = (overlayCard: any, ctaEl: any) => {
    const overlayCta = document.createElement("div");
    overlayCta.classList.add("cta");
    overlayCta.textContent = ctaEl.textContent;
    overlayCta.setAttribute("aria-hidden", 'true');
    overlayCard.append(overlayCta);
};

const observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
        const cardIndex = cards.indexOf(entry.target);
        let width = entry.borderBoxSize[0].inlineSize;
        let height = entry.borderBoxSize[0].blockSize;

        if (cardIndex >= 0) {
            const overlayChild = overlay.children[cardIndex] as HTMLElement;
            overlayChild.style.width = `${width}px`;
            overlayChild.style.height = `${height}px`;
        }
    });
});

const initOverlayCard = (cardEl: any) => {
    const overlayCard = document.createElement("div");
    overlayCard.classList.add("card");
    createOverlayCta(overlayCard, cardEl.lastElementChild);
    overlay.append(overlayCard);
    observer.observe(cardEl);
};

try {
    cards.forEach(initOverlayCard);
} catch(e) {
    console.log(e);
}
typeof document !== 'undefined' && document.body.addEventListener("pointermove", applyOverlayMask);


const TestCard = () => {
    return (
        <div className="main flow">
            <h1 className="main__heading">Pricing</h1>
            <div className="main__cards cards">
                <div className="cards__inner">
                    <div className="cards__card card">
                        <h2 className="card__heading">Basic</h2>
                        <p className="card__price">$9.99</p>
                        <ul role="list" className="card__bullets flow">
                            <li>Access to standard workouts and nutrition plans</li>
                            <li>Email support</li>
                        </ul>
                        <a href="#basic" className="card__cta cta">Get Started</a>
                    </div>

                    <div className="cards__card card">
                        <h2 className="card__heading">Pro</h2>
                        <p className="card__price">$19.99</p>
                        <ul role="list" className="card__bullets flow">
                            <li>Access to advanced workouts and nutrition plans</li>
                            <li>Priority Email support</li>
                            <li>Exclusive access to live Q&A sessions</li>
                        </ul>
                        <a href="#pro" className="card__cta cta">Upgrade to Pro</a>
                    </div>

                    <div className="cards__card card">
                        <h2 className="card__heading">Ultimate</h2>
                        <p className="card__price">$29.99</p>
                        <ul role="list" className="card__bullets flow">
                            <li>Access to all premium workouts and nutrition plans</li>
                            <li>24/7 Priority support</li>
                            <li>1-on-1 virtual coaching session every month</li>
                            <li>Exclusive content and early access to new features</li>
                        </ul>
                        <a href="#ultimate" className="card__cta cta">Go Ultimate</a>
                    </div>
                </div>

                <div className="overlay cards__inner"></div>
            </div>
        </div>
    )
}

export default TestCard;