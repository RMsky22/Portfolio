// Card.jsx

const Card = ({ title, description, image, buttons }) => {
  return (
    <div className="card">
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        
        {buttons && buttons.length > 0 && (
          <div className="card-actions">
            {buttons.map((button, index) => (
              <button key={index} className={`card-btn ${button.variant}`} onClick={button.onClick}>
                {button.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;