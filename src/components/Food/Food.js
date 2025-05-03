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
    };

    return (
    <div>
        <h3>{props.item.Display_Name}</h3>
        
        <p>{formatAmount(props.item.Portion_Amount)} {props.item.Portion_Display_Name}</p>
        <p>{Math.round(props.item.Calories)} calories</p>
    </div>
    )
}


export default Food
