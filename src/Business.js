import React from "react";

class Business extends React.Component{


    constructor(){

        super();
        this.state={
            count:0
        }
    }

    Increment =()=> {
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }

    Decrement=()=>{
        this.setState(
            {
                count:this.state.count-1
            }
        )
    }



    render(){
        return(
            <>
            
            <center>
                <h1>Interactive counter</h1>
                <h2>Count : {this.state.count}</h2>

                <br />
                <br />
                <br />

                <div>

                    <button onClick={this.Increment}>INCREMENT</button>
                    <button onClick={this.Decrement}>DECREMENT</button>


                </div>

            </center>
            
            </>
        );
    }

}

export default Business;