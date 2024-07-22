import React from 'react'
import { useState } from 'react'


export default function DailyIntake() {
    const [food, setFood] = useState('');
    const [calories, setCalories] = useState('');
    const [proteins, setProteins] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fats, setFats] = useState('');
    const [items,setItems]=useState([]);

    let index=0;
    
  
    const addItem = (e) => {
      e.preventDefault();
      setItems([...items,{food,calories,proteins,carbs,fats}]);
      if (food && calories && proteins && carbs && fats) {

        setFood('');
        setCalories('');
        setProteins('');
        setCarbs('');
        setFats('');
 
      }
    };
    const deleteItem=(index)=>{
        const newitems = items.filter((_, i) => i !== index);
        setItems(newitems);

    };

    let totalCalories = 0;
    let totalProteins = 0;
    let totalCarbs = 0;
    let totalFats = 0;

  return (
    <div className='daily-intake'>
        <div className='container my-4 '>
            <h2 className='text-center headingsty' >Enter your Calorie intake for the day: </h2>
                <form>
                    <div className="row  d-flex justify-content-center mt-4">
                        <div className=" form-group col-lg-4 col-lg-offset-4 "> 
                            <label className='headingsty' forHtml="floatingInput" >Food Item</label>
                            <input type="text" className="form-control" id="floatingInput" value={food} onChange={(e)=>setFood(e.target.value)}/>
                           
                        </div>
                    
                        <div className="form-group col-lg-4 col-lg-offset-4">
                            <label className='headingsty' forHtml="floatingInput">Calories</label>
                            <input type="text" className="form-control" id="floatingInput" value={calories} onChange={(e)=>setCalories(e.target.value)}/>
                            
                        </div>
                    </div>
                    <div className='container my-3' >
                        <div className='row'>
                        <div className=" form-group col-md-4" >
                            <label className='headingsty' forHtml="floatingInput"> Proteins(g)</label>
                            <input type="text" className="form-control" id="floatingInput" value={proteins} onChange={(e)=>setProteins(e.target.value)}/>
                            
                        </div>

                        <div className="form-group col-md-4">
                             <label className='headingsty' forHtml="floatingInput"> Carbs(g)</label>
                            <input type="text" className="form-control" id="floatingInput" value={carbs} onChange={(e)=>setCarbs(e.target.value)}/>
                           
                        </div>
                    
                    
                        <div className="form-group col-md-4">
                            <label className='headingsty' forHtml="floatingInput"> Fat(g)</label>
                                <input type="text" className="form-control" id="floatingInput" value={fats} onChange={(e)=>setFats(e.target.value)}/>
                        </div>
                        </div>
                    </div>
                    <div className='container my-3'>
                        <div className='row '>
                        <div className=' d-flex justify-content-center gap-5 '>       
                            <button className="btn btn-success ps-5 pe-5" onClick={addItem} type="button">Add Item</button>
                        </div>
                        </div>
                    </div>
                
        </form>
        <div className=''>
          {items.length > 0 && (
            <div className="item-list-container">
              {items.map((item, index) => {
                totalCalories += parseFloat(item.calories);
                totalProteins += parseFloat(item.proteins);
                totalCarbs += parseFloat(item.carbs);
                totalFats += parseFloat(item.fats);
                return (
                  <div className='text-center' key={index}>
                    <p>
                      {index + 1}. {item.food} - Calories: {item.calories}kcal, Proteins: {item.proteins}g, Carbs: {item.carbs}g, Fats: {item.fats}g
                      <button className="btn btn-danger ms-5 " onClick={() => deleteItem(index)}>Delete</button>
                    </p>
                  </div>
                );
              })}
            </div>
          )}
          {items.length > 0 && (
            <div>
              <h4 className='text-center headingsty my-5 mb-2'>Count of your daily intake:</h4>
              <div className='results'>
                <p>Total Calories: {totalCalories} kcal, Total Proteins: {totalProteins} g, Total Carbs: {totalCarbs} g, Total Fats: {totalFats} g</p>
              </div>
            </div>
          )}
          {items.length === 0 && <p className="text-center">No items added.</p>}
        </div>
      </div>
    </div>
  );
}
