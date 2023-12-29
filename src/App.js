// App.js
import React, { useState, useEffect } from 'react';
import FileImport from './Components/FileImport';
import DisplayOptions from './Components/DisplayOptions';
import DataTable from './Components/DataTable';
import './App.css';
//import Card from './Components/Card';

function App() {
  const [jsonData, setJsonData] = useState([]);
  const [displayOptions, setDisplayOptions] = useState([]);
  return (
    <div className="app-container">
      <h1>React Cards Example</h1>
      {/* <div className="card-container1">
        <Card className="c1"  title="step 1" content="select file">
         
          </Card> 
        <Card className="c2" title="Card 2" content="Content for Card 2" />
      </div>
       */}
      {/* <div className="bottom-card">
        <Card title="Card 3" content="Content for Card 3" />
      </div> */}
    
      <div className='card c1'>
        <p>Step 1 :</p>
        <p>Select file :</p>
        <input type='file'></input>
        <p>Supported file(s): .csv , .json</p>
      </div>
      
      <div className='card c2'>
         <p>Step 2 :</p>
         <label for='file1'> file type: </label>
         <input type='number' placeholder='csv' id='file1' inputmode='number'></input>
         <br/>
         <label for='file2'> Character Encoding: </label>
         <input type='number' palceholder ='UTF-8' id='file2' inputmode='text'></input>
         <br/>
         <label for='file3'> Delimiter: </label>
         <input type='number' placeholder ='' id='file3' inputmode='text'></input>

         <label for='file'> Has header: </label>
         <input type='checkbox' id= 'file4'></input>
         </div>
        
      <div className='card c3'>
         <p><input type='checkbox' id= 'file4'></input>Step 3:</p>
         <p> Display Handling</p>
         <p> select the fields to be displayed</p>

         <p><label for='file5'>Available Fields</label></p>
         <textarea id='file5' rows='8' cols='4'></textarea>
         

         <p><label for='file6'>Fields to be distributed</label></p>
         <textarea id='file6' rows='13' cols='8'>
            product id
            title
            subcategory
            price
            popularity
            Description 
            Rating
            UTM source
            UTM Mode

         </textarea>
         
      </div>
    </div>
  );

  useEffect(() => {
    // Fetch JSON data from the provided API
    const fetchData = async () => {
      try {
        const response = await fetch("https://s3.amazonaws.com/open-to-cors/assignment.json");
        const data = await response.json();
        setJsonData(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFileUpload = (data) => {
    setJsonData(data);
  };

  const handleDisplayOptionsChange = (options) => {
    setDisplayOptions(options);
  };

  return (
    <div className="app-container">
      <h1>Product Information</h1>
      <div className="import-section">
        <FileImport onFileUpload={handleFileUpload} />
      </div>
      <div className="display-section">
        {jsonData.length > 0 && (
          <>
            <DisplayOptions
              availableFields={Object.keys(jsonData[0])}
              selectedFields={displayOptions}
              onDisplayOptionsChange={handleDisplayOptionsChange}
            />
            <DataTable data={jsonData} displayOptions={displayOptions} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
