import { useState } from 'react';
import { faqs } from '../data/content';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-accordion">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.q}>
            <h3>
              <button
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                {item.q}
                <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
            </h3>
            <div className="faq-panel" id={`faq-panel-${i}`} role="region" hidden={!isOpen}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;
