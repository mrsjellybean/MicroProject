import React from 'react';
import './App.css';

  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
function ApiFunction(){
    return(<div >
        <div className='container'>
            <h1>Hi, let's find something special for you!</h1>
            <img id="image" href="https://toppng.com/kawaii-cute-edit-editing-overlay-png-dog-draw-kawaii-cute-animals-drawi-PNG-free-PNG-Images_165900"  alt="cute dog"></img>
<iframe  title="Map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130266.39963777206!2d17.841970950468095!3d59.32606681370397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2z0KHRgtC-0LrQs9C-0LvRjNC8!5e0!3m2!1suk!2sse!4v1669627154815!5m2!1suk!2sse" width="600" height="450" allowfullscreen="" loading="lazy" id="map"referrerpolicy="no-referrer-when-downgrade"></iframe>
<form id="form" role="search">
  <input type="search" id="query" name="q"
   placeholder="Search..."
   aria-label="Search through site content"/>
  <button className="button"><svg className="svg" viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg></button>
</form>
</div></div>)}


    
    async function placeSearch() {
          try {
               const searchParams = new URLSearchParams({
                 query: 'coffee',
              near: 'Seattle, WA',
                  open_now: 'true',
                  sort: 'DISTANCE'
                });
               const results = await fetch(
                  `https://api.foursquare.com/v3/places/search?${searchParams}`,
           {
               method: 'GET',
               headers: {
                     Accept: 'application/json',
                     Authorization: 'YOUR ACCESS TOKEN',
                    }
                  }
              );
                const data = await results.json();
               return data;
            } catch (err) {
              console.error(err);
           }
}
 
export default ApiFunction;