import './Food.css';

const Food = (props) => {
    const formatAmount = (num) => {
        let newNum = '';
        if (num[0] === '.') {
            if (num[1] === '2') {
                return '1/4';
            } else {
                return '1/2';
            };
        } else {
            for (let i = 0; i < num.length; i++) {
                if (num[i] === '.') {
                    return newNum;
                } else {
                    newNum += num[i];
                }
            }
        }
        return newNum;
    };

    return (
        <div className="food-item">
            <h3 className="food-name">{props.item.Display_Name}</h3>
            <div className="food-details">
                <p className="food-portion">
                    {formatAmount(props.item.Portion_Amount)} {props.item.Portion_Display_Name}
                </p>
                <p className="food-calories">
                    {Math.round(props.item.Calories)} calories
                </p>
            </div>
            
            {props.showRemoveButton && (
                <button 
                    className="remove-food-btn" 
                    onClick={() => props.onRemove(props.item)}
                    aria-label="Remove food"
                >
                    Remove
                </button>
            )}
        </div>
    );
};

export default Food;