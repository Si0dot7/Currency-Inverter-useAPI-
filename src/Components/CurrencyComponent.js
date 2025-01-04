import './CurrencyComponent.css'

const CurrencyComponent=()=>{
    return(
        <div className = 'currency'>
            <select>
                <option value='THB'>THB</option>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
            </select>
            <input type = 'number'/>
        </div>
    );
}

export default CurrencyComponent