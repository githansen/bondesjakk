import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'

let tur = true;
let gamerunning=false;

const checkwinner =()=>{
    let winners=[[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9],[1,5,9], [3,5,7]]
    let fullt = true;
    for(let i = 0; i < winners.length; i++){
       let id1 = "r"+winners[i][0]
       let id2 = "r"+winners[i][1]
       let id3 = "r"+winners[i][2]
        if(document.getElementById(id1).value ==="" || document.getElementById(id2).value==="" || document.getElementById(id3).value===""){
            fullt = false;
        }
        if( document.getElementById(id1).value !== "" && document.getElementById(id1).value === document.getElementById(id2).value && document.getElementById(id3).value === document.getElementById(id1).value){
            if(document.getElementById(id1).value==="X") {
                document.getElementById("resultat").innerHTML="<p style='font-size: 50px; color: red'>Spiller 1 vinner </p>"
            }
            else if(document.getElementById(id1).value ==="O") {
                document.getElementById("resultat").innerHTML="<p  style='font-size: 50px; color: red'>Spiller 2 vinner</p>"
            }
            gamerunning = false
            tur=true
            return true;
        }
    }
    if(fullt){
        alert("Det ble uavgjort")
    }
    return false;
}
let start=()=>{
    clear()
    gamerunning=true;
    document.getElementById("resultat").innerHTML="<p style='color: black; font-size:50px;'>Spiller 1 sin tur</p>"
}
let clear=()=>{
    document.getElementById("resultat").innerHTML=""

    tur=true
   for(let i = 1; i < 10; i++){
       let id = "r" + i
       document.getElementById(id).value=""
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
            document.getElementById("resultat").innerHTML="<p style='color: black; font-size:50px;'>Spiller 2 sin tur</p>"
            checkwinner()

        }
        else{
            document.getElementById(ut).value="O"
            tur=true;
            document.getElementById("resultat").innerHTML="<p style='color: black; font-size:50px;'>Spiller 1 sin tur</p>"
            checkwinner()
        }
    }
}

export const Game = () =>{
    return(

      <div>
          <Row style={{backgroundColor: "lightblue"}}>
          <Col sm={4} style={{backgroundColor: "white"}}>
              <div id={'resultat'}>

              </div>
          </Col>
          <Col sm={1} xs={4}  style={{height: "100px", border: "solid"}} onClick={() => turn(1)}><input type={'text'} id={"r1"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none", textAlign: 'center'}} readOnly={true}/></Col>
          <Col sm={1} xs={4} style={{ height: "100px", border: "solid"}} onClick={() => turn(2)}> <input type={'text'} id={"r2"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none", textAlign: 'center'}} readOnly={true}/></Col>
          <Col sm={1} xs={4} style={{ height: "100px", border: "solid"}}  onClick={() => turn(3)}> <input type={'text'} id={"r3"} style={{ height: "100%", width: "100%", border: "none", textAlign: 'center', backgroundColor: 'lightblue'}} readOnly={true}/></Col>
          <Col sm={5} style={{backgroundColor: "white"}}></Col>
          </Row>
          <Row style={{backgroundColor: "lightblue"}}>
          <Col sm={4} style={{backgroundColor: "white"}}></Col>
          <Col sm={1} xs={4} style={{height: "100px", border: "solid"}} onClick={() => turn(4)}> <input type={'text'} id={"r4"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none", textAlign: 'center'}} readOnly={true}/></Col>
          <Col sm={1}  xs={4} style={{ height: "100px", border: "solid"}} onClick={() => turn(5)}> <input type={'text'} id={"r5"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none", textAlign: 'center'}} readOnly={true}/></Col>
          <Col sm={1} xs={4} style={{height: "100px", border: "solid"}} onClick={()=> turn(6)}> <input type={'text'} id={"r6"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none", textAlign: 'center'}} readOnly={true}/></Col>
          <Col sm={5} style={{backgroundColor: "white"}}> </Col>
          </Row>
          <Row style={{backgroundColor: "lightblue"}}>
          <Col sm={4} style={{backgroundColor: "white"}}></Col>
          <Col sm={1} xs={4} style={{ height: "100px", border: "solid"}} onClick={() => turn(7)}><input type={'text'} id={"r7"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none", textAlign: 'center'}} readOnly={true}/></Col>
          <Col sm={1} xs={4} style={{ height: "100px", border: "solid"}} onClick={() => turn(8)}><input type={'text'} id={"r8"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none", textAlign: 'center'}} readOnly={true}/></Col>
          <Col sm={1} xs={4} style={{ height: "100px", border: "solid"}} onClick={()=> turn(9)}><input type={'text'} id={"r9"} style={{backgroundColor: "lightblue", height: "100%", width: "100%", border: "none", textAlign: 'center'}} readOnly={true}/> </Col>
          <Col sm={5} style={{backgroundColor: "white"}}></Col>
          </Row>
          <Row style={{margin: "50px"}}></Row>
          <Row>
          <Col sm={3} xs={0} lg={4} md={3}></Col>
          <Col sm={2} xs={4} lg={1} md={2}><button className={'btn btn-primary'} onClick={start}>Start spill</button></Col>
          <Col sm={2} xs={4} lg={1} md={2}> </Col>
              <Col sm={2} xs={4} lg={1} md={2}><button className={'btn btn-primary'} onClick={clear}>Reset</button> </Col>
          </Row>
      </div>
    );
}