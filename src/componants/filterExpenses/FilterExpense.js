import "./FilterExpense.css"
const FilterExpense = (props)=>{
  const selectedYearChange =  (event) =>{
    props.onSelectedChange(event.target.value)
    console.log(event.target.value);

  }
  return(
    <div className="filter">
        <div>
            <select value={props.selectedValue} onChange={selectedYearChange} className="filter-select">
                <option value={"2023"}>2023</option>
                <option value={"2022"}>2022</option>
                <option value={"2021"}>2021</option>
                <option value={"2020"}>2020</option>
                
            </select>
        </div>
    </div>
  )
}

export default FilterExpense;