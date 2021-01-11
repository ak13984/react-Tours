import './App.css';
import React, { useState, useEffect } from "react";
import Loading from './Loading'
const url = "https://course-api.com/react-tours-project";

const App=()=>{

const [data,setData]=useState([]);
const [dataPresent,setDataPresent]=useState(false);
const [dataEmpty,setDataEmpty]=useState(false);


async function getData(){
   fetch(url)
  .then((res) => res.json())
  .then((data) =>{
    setData(data);
    setDataPresent(true);
  console.log(data.length);
  })
  .catch((error) => console.log(error));
}

useEffect(()=>{
   getData();
},[])

const handleBtnClick=(id)=>{
  setData(
    data.filter((tour)=>tour.id!==id)
  )
  
  if(data.length===1){
    console.log("32");
    setDataEmpty(true);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

if(!dataPresent){
  return <Loading/>
}else{
return (
  <>
  <main>
    <h1
      className="font-weight"
      style={{ textDecoration: "underline", textAlign: "center" }}
    >
      Our Tours
    </h1>
    {dataEmpty && (
      <div style={{alignItems:'center', display:'flex', flexDirection:'column'}}>
        <h2>
          Oops..., there are no other tours
        </h2>
        <button className="btn btn-primary" onClick={()=>window.location.reload()}>
          Refresh
        </button>
      </div>
    )}
    <div
      className="col"
      style={{ alignItems: "center", display: "flex", flexDirection: "column" }}
    >
      {data.map((tour) => {
        return (
          <div className="card col-lg-5 col-sm-5" id="tourCard">
            <img
              src={tour.image}
              style={{ maxWidth: "100%" }}
              className="card-img-top"
              alt=""
            />
            <header id="imgHeader">
              <h2 style={{ color: "grey" }}>{tour.name}</h2>
              <h4>
                <span className="badge badge-primary">{"$" + tour.price}</span>
              </h4>
            </header>
            <p style={{ margin: "1rem" }}>{tour.info}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => handleBtnClick(tour.id)}
              >
                Not interested
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </main>
  </>
);

}

}

export default App;
