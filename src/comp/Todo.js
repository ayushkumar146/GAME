import React from 'react';
import './Todo.css';
import { useReducer } from 'react';
import { useState,useEffect } from 'react';
import Song from './Song.mp3';
const Todo = () => {
  const i=0,ii=0;
  const [play,pause]=useState(0);
  let srcc="./Song.mp3";
  const [audioo,noaudio]=useState(0);
  const[audio,naudio]=useState(null);
  function playy(e){
  
    if((e%2)===0){
 const temp= new Audio(Song);
 naudio(temp);
temp.play();
      noaudio(e);
      pause(1);
    }
    else{
      audio.pause();
      audio.currentTime=0;
       
      noaudio(e+1);
      pause(0);
    }
  }
  


  const [winner,newwinner]=useState(1);
  const[j,k]=useState(0);
  const[jj,kk]=useState(0); 
  const[y,n]=useState(0);
  const[yy,nn]=useState(0);
  // const song=()=>{
  //   pause(true);
  // }
  // const songg=()=>{
  //   pause(false);
  // }
  const reducer=(state,action)=>{
    if(action.type==="inc"){
      k(state+1);
      return state+1;
    }
    else{
      k(state);
      n(0);
      newwinner(1);
      return state=0;
    }
  }
  
  const rreducer=(statee,aaction)=>{
    if(aaction.type==='iinc'){
      kk(statee+1);
      return statee+1;
    }
    else{
      kk(statee);
      nn(0);
      newwinner(1);
      return statee=0;
    }
  }
  const[flag,lag]=useState(0);
  const[flagg,lagg]=useState(0);
  const[state,dispatch]=useReducer(reducer,i);
  const [statee,dispatchh]=useReducer(rreducer,ii);

  
  const [dname,uname]=useState('');
  const [ddname,uuname]=useState('');
  
  const [w,nw]=useState(null);
  
 const ready=()=>{
       
      setTimeout(()=>{n(1)},11000);
      
     
 }
 const rready=()=>{
       
  setTimeout(()=>{nn(1)},11000);
  // setTimeout(()=>{kk(statee)},2001)
  // console.log(jj);
}
//  console.log(j);
//  console.log(jj);
  function change(e){
    if(e!=null){
        uname(e);    
    } 
    else{
      uname("USER1");
    }
  }
  function cchange(e){
    if(e!=null){
        uuname(e);    
    } 
    else{
      uuname("USER2");
    }
  }
  function yes(){
    n(0);
    nw('');
  }
  function yyes(){
    nn(0);
    nw('');
  }
  function click(){
    lag(1);
  }
  function cclick(){
    lagg(1);
  }
if(y===1 && yy===1 && winner===1 ){
  // console.log("yes");
  if(j>jj){
    nw(` is ${dname}`);
  }
  else if(j===jj){
nw(" is none of them");
  }
  else{
    nw(` is ${ddname}`);
  }
  newwinner(0);
}

  return (
    <div className="c0">
      <div className="c00">
        <div className="c01"><h1 className="c01a">INSTRUCTIONS</h1></div>
        <div className="c023">
        <div className="c02">
          <div className="c021">
          <p className='hello'> Every player has 10 seconds to complete his game , after 10 seconds the click button will automatically get vanished.If both players have completed their game then final winner will be announced</p></div>
          <div className="c022">
          <ol className>
            <li className="c04"> FILL UP THE INPUT BOX WITH YOUR NAME AND THEN PRESS ENTER</li>
            <br />
            <li className="c04"> CLICK THE READY BUTTON IN ORDER TO START YOUR TURN</li>
            <br />
            <li className="c04"> AFTER CLICKING THE READY BUTTON YOU WILL HAVE ONLY 10 SECOND TO COMPLETE YOU TURN</li>
            <br />
            <li className="c04"> ANY PLAYER CAN START FIRST</li>
            <br />
            
            <li className="c04"> IF YOU PRESS RESET BUTTON THEN YOUR SCORE WILL GET REFRESH  </li>
            <br />
            <li className="c04"> AT THE END WHEN BOTH THE PLAYERS HAVE COMPLETED THEIR TURN THEN RESULT WILL BE ANNOUNCED </li>
            <br />
            <li className="c04"> THERE IS ONE BUTTON IN THE MIDDLE TO PLAY THE SONG </li>
            
          </ol>
          </div>
        </div>
        <div className="c024">
          <div className="c024a"></div>
        </div>
        </div>
      </div>
    <div className="c1">
      <div className="c2">
        <h1 className="ori">ORION'S GAME</h1>
      </div>
      <div className="c3">
        <div className="c31">
          <div className="c31a">{flag===0?(<button onClick={()=>{click()}}className='nm'>ENTER</button>):(null)}{
             flag===0?(
            <input type='text' placeholder='  write you name' onChange={(e)=>{change(e.target.value)}}className='abc'></input>):(<h1 className='c31aa'>{dname}</h1>) }</div>
        
          <div className="c31b">
            <div className="c31ba">{state}</div>
          </div>
          <div className="c31c">
            <div className="c31cc"><button onClick={()=>{ready()}}className='c31bcc'>READY</button></div>
            <div className="c31ca">{y==0?(<button onClick={()=>dispatch({type:"inc"})}className='c31bcc'>CLICK</button>):(null)}</div>
            <div className="c31cb"><button onClick={()=>{dispatch({type:"reset"});
          yes()}}className='c31bcc'>RESET</button></div>
          </div>
        </div>


          <div className="c33">{play===1?(<button className='img' onClick={()=>{playy(audioo+1)}}></button>):(<button className='img1' onClick={()=>{playy(audioo)}}></button>)}
         
          </div>


        <div className="c32">
          <div className="c32a">{flagg===0?(<button onClick={()=>{cclick()}}className='nm'>ENTER</button>):(null)}{
             flagg===0?(
            <input type='text' placeholder='   write you name' className='nm1' onChange={(e)=>{cchange(e.target.value)}}></input>):(<h1 className='c32aa'>{ddname}</h1>) }</div>
          <div className="c32b">
          <div className="c32ba">{statee}</div>
          </div>
          <div className="c32c">
          <div className="c32cc"><button onClick={()=>{rready()}} className='c31bcc'>READY</button></div>
            <div className="c32ca">{yy==0?(<button onClick={()=>dispatchh({type:"iinc"})}className='c31bcc'>CLICK</button>):(null)}</div>
            <div className="c32cb"><button className='c31bcc' onClick={()=>{dispatchh({type:"reset"});
          yyes()}}>RESET</button></div>
          </div>
        </div>
      </div>
      <div className="c4">
        <div className='c41'><h1 className='c41a'>The winner {w}</h1></div>

      </div>
    </div>
    <div className="c333">
    <div className="cme">
    <div className="cnme"><h2>CONTACT ME</h2></div>
    <div className="sizw">
     <div className="forms">
        <div className="icons">
           <a href="https://www.instagram.com/" target='blank'> <div className="insta"></div></a>
           <a href="https://www.linkedin.com/in/ayush-das-17772322a/" target='blank'><div className="ln"></div></a>
           <a href="https://github.com/ayushkumar146" target='blank'><div className="gtb"></div></a> 
        </div>
        <div className="email">
            <div className="email1">
            <h2 classname="emk">
    <strong>
      <u />
    </strong>
  </h2>
  <form action="mailto:ayush.kumardas146@gmail.com" method="post">
    <label htmlfor="" classname="ye" />
    <input type="text" placeholder="  ENTER YOUR NAME" classname="ye" />
    <br />
    <label htmlfor="" classname="" />
    <input type="email" placeholder="  ENTER YOUR EMAIL" classname="ye" />
    <br />
    <label htmlfor="" classname="no">
      <h4>GENDER :</h4>
    </label>
    <br />
    <h3 classname="yes">Male</h3>
    <input type="radio" name="mygender" classname="yes" />
    <br />
    <h3 classname="yes">Female</h3> <input type="radio" name="mygender" id="" />
    <br />
    <h3 classname="yes">None</h3> <input type="radio" name="mygender" id="" />
    <br /><br />
    <label htmlfor="" classname="yes">
      <h4>Rate my CV :</h4>
    </label>
    <input type="range" classname="no" />
    <br /><br />
    <label htmlfor="" classname="yes" />
    <br />
    <textarea
      name="mytext"
      id=""
      cols={50}
      rows={10}
      classname="yet"
      
      placeholder="Any suggestions please :"
      defaultValue={""}
    />
    <br />
    <br />
    <br />
    <input type="Submit" defaultValue="SUBMIT" classname="uio" />
    <br />
    <input type="Reset" defaultValue="RESET " classname="uio" />
  </form>
      </div>
      </div>
        </div>
     </div>
  </div>
    </div>
    </div>
  )
}

export default Todo;
