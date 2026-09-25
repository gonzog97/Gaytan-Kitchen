import { menuIcon } from "./Icons";

// Renders one <details> accordion section from a lib/menuData.js entry.
// Pure server component — the original site used native <details>/<summary>
// specifically so this needed no client-side JS, and that's still true here.
export default function MenuAccordion({ section }) {
  const Icon = menuIcon[section.icon];

  return (
    <details className="menu-accordion" open={section.defaultOpen || undefined}>
      <summary>
        <div className="card-icon">
          <Icon />
        </div>
        <span className="accordion-heading">
          <h3>{section.name}</h3>
          <span className="price-tag">{section.priceTag}</span>
        </span>
        <span className="accordion-caret" aria-hidden="true">
          &#9662;
        </span>
      </summary>
      <div className="menu-items">
        {section.description && <p>{section.description}</p>}

        {section.groups?.map((group) => (
          <div key={group.label}>
            <p className="menu-group-label">{group.label}</p>
            {group.note && <p className="menu-note">{group.note}</p>}
            {group.items.map((item) =>
              item.compact ? (
                <div className="menu-item menu-item-compact" key={item.name}>
                  <span>{item.name}</span>
                  <span className="menu-item-price">{item.price}</span>
                </div>
              ) : (
                <div className="menu-item" key={item.name}>
                  <div className="menu-item-head">
                    <h4>{item.name}</h4>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  {item.description && <p>{item.description}</p>}
                </div>
              )
            )}
          </div>
        ))}

        {section.callout && (
          <div className="menu-callout">
            <p className="menu-group-label" style={{ marginTop: 0 }}>
              {section.callout.title}
            </p>
            <ul>
              {section.callout.items.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </details>
  );
}
