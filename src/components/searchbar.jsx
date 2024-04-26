import React from "react";



function Searchbar(search){
return (
     <form>
    <div class ="search">
        <input style={{ width: '80%', height: '20px' }} type="text" placeholder="Search for your recent transactions"></input>
    </div>
    <div class ="othersearch" >
    <input style={{ width: '20%' , height: '20px' }}  class="date1" type="text" placeholder="Date" aria-label=".form-control-lg example"></input>
    <input style={{ width: '20%' , height: '20px' }} class="description1" type="text" placeholder="Description" aria-label="default input example"></input>
    <input style={{ width: '20%', height: '20px' }} class="category1" type="text" placeholder="Category" aria-label=".form-control-sm example"></input>
    <input style={{ width: '20%' , height: '20px' }} class="amount1" type="text" placeholder="Amount" aria-label=".form-control-sm example"></input>
    

    </div>
    </form>
    
)


}

export default Searchbar;