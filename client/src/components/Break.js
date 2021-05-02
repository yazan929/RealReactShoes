import React from "react";
import ShoeList from "./ShoeList";
import "./Break.css";
class Break extends React.Component {
    render() {
        return (
            <div >
            <div className="FullBreak">
                {/* <div> */}
                    <div className="break">
                        <div className="leftside">
                            <div className="welcome">Welcome to Yazan929</div>
                            <div></div>
                            <div className="shoeshop">ShoeShop</div>

                            <div><br/></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <a>Where you can get all the nice shoes</a>
                        </div>

                        <img src="photos/breakShoe.png" alt="new" />
                    {/* </div> */}
                </div>
            </div>
            <ShoeList />
            </div>
        );
    }
}

export default Break;
