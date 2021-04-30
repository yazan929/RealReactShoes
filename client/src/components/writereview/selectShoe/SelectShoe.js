import React, { useEffect, useState } from "react";
import "./SelectShoe.css";
import { fetchPosts } from "../../../api/index";

  const SelectShoe = () => {
    let [shoes, setShoes] = useState([]);

    useEffect(async () => {
        var fetchedShoes = await fetchPosts();
        setShoes(fetchedShoes.data);
        
    }, []);

    return shoes.length === 0 || !shoes ? (
<select className="Input" id="test">
        <option value="Not available">No Shoes available</option>
        </select>
        ) : (
<div className="select-container">
            <select className="Input" id="test" >
              {shoes.map((option) => (
                <option value={option.name}>{option.name}</option>
              ))}
            </select>
          </div>
    );
};


  export default SelectShoe;