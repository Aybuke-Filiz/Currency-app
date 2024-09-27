
function Currency() {
  return (
    <div className="currency-div">
        <input type="number" className="amount"/>
        <select className="from currency-option">
            <option>USD</option>
            <option>EUR</option>
            <option>TL</option>
        </select>

    </div>
  )
}

export default Currency