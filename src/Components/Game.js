import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'

let tur = true;
let gamerunning=false;
let botplaying=false;
const playbot=()=>{
    gamerunning=true;
    botplaying=true;
}
const checkwinner =()=>{
    let winners=[[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9],[1,5,9], [3,5,7]]
    for(let i = 0; i < winners.length; i++){
       let id1 = "r"+winners[i][0]
       let id2 = "r"+winners[i][1]
       let id3 = "r"+winners[i][2]

        if( document.getElementById(id1).value !== "" && document.getElementById(id1).value === document.getElementById(id2).value && document.getElementById(id3).value === document.getElementById(id1).value){
            alert("VINNER!")
            if(document.getElementById(id1).value==="X")alert("Player 1 wins")
            else if(document.getElementById(id1).value ==="O") alert("Player 2 wins")
            clear()
            return true;
        }
    }
    return false;
}
let start=()=>{
    gamerunning=true;
}
let clear=()=>{
   window.location.reload()
}
const botmove=()=>{
    while(true) {
        let number = Math.floor(Math.random() * 10)
        let id = "r" + number
        if(document.getElementById(id).value === ""){
            document.getElementById(id).value= "O"
            tur = true;
            checkwinner()
            return
        }
    }
}
let turn=(number) =>{
    if(!gamerunning){
        alert("Game not running, please start")
        return
    }
    let ut = "r" + number + ""
    if(document.getElementById(ut).value === "" ){
        if(tur){
            document.getElementById(ut).value="X"
            tur=false;
            checkwinner()
            if(botplaying){botmove()}
        }
        else{
            document.getElementById(ut).value="O"
            tur=true;
            checkwinner()
        }
    }
}

export const Game = () =>{
    return(

      <Row style={{backgroundColor: "lightblue"}}>
          <button onClick={clear}>Clear</button>
          <input type={"text"} id={"test"}/>
          <Col sm={4}></Col>
          <Col sm={1} style={{height: "100px", border: "solid"}} onClick={() => turn(1)}><input type={'text'} id={"r1"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none"}} readOnly={true}/></Col>
          <Col sm={1} style={{ height: "100px", border: "solid"}} onClick={() => turn(2)}> <input type={'text'} id={"r2"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none"}} readOnly={true}/></Col>
          <Col sm={1} style={{ height: "100px", border: "solid"}}  onClick={() => turn(3)}> <input type={'text'} id={"r3"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none"}} readOnly={true}/></Col>
          <Col sm={5}></Col>
          <Col sm={4}></Col>
          <Col sm={1} style={{height: "100px", border: "solid"}} onClick={() => turn(4)}> <input type={'text'} id={"r4"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none"}} readOnly={true}/></Col>
          <Col sm={1} style={{ height: "100px", border: "solid"}} onClick={() => turn(5)}> <input type={'text'} id={"r5"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none"}} readOnly={true}/></Col>
          <Col sm={1} style={{height: "100px", border: "solid"}} onClick={()=> turn(6)}> <input type={'text'} id={"r6"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none"}} readOnly={true}/></Col>
          <Col sm={5}></Col>
          <Col sm={4}></Col>
          <Col sm={1} style={{ height: "100px", border: "solid"}} onClick={() => turn(7)}><input type={'text'} id={"r7"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none"}} readOnly={true}/></Col>
          <Col sm={1} style={{ height: "100px", border: "solid"}} onClick={() => turn(8)}><input type={'text'} id={"r8"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none"}} readOnly={true}/></Col>
          <Col sm={1} style={{ height: "100px", border: "solid"}} onClick={()=> turn(9)}><input type={'text'} id={"r9"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none"}} readOnly={true}/> </Col>
          <Col sm={5}></Col>
          <Col sm={3}></Col>
          <Col sm={3}><button onClick={start}>Start game</button></Col>
          <Col sm={3}><button onClick={playbot}> Play vs bot</button> </Col>
      </Row>
    );
}