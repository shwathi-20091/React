

function App() {
    const message=()=>{
        alert("submitted successfully");
    }
  return (
    <div className="App">
         <div className="form">
                   <p>fill the form</p>
              <div className="formarea">
              <form className="f">
                <label>
                    Name:
                    <input type="text" name="name" placeholder="enter your name here "/>
                </label>
                <br></br>
                <label>
                    Age:
                    <input type="number" name="age" />
                </label>
                <br></br>
                <label>     
                    hobbies:
                <select>
                    <option value="playing">playing</option>
                    <option value="drawing">drawing</option>
                    <option selected value="singing">singing</option>
                    <option value="dancing">dancing</option>
                </select>
                </label>
                <br></br>

                    <input type="submit" value="Submit" onClick={message}/>
</form>

         </div>
         </div>

         

    </div>
  );
}

export default App;
