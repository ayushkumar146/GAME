import React from 'react';
import './Todo.css';
import { useReducer } from 'react';
import { useState } from 'react';
import './Animals - Maroon 5_320- [PagalWorld.NL].mp3';
const Todo = () => {
  const i=0,ii=0;
  const [play,pause]=useState(0);
  const [audioo,noaudio]=useState(false);
  const [winner,newwinner]=useState(1);
  const[j,k]=useState(0);
  const[jj,kk]=useState(0); 
  const[y,n]=useState(0);
  const[yy,nn]=useState(0);
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
       
      setTimeout(()=>{n(1)},2000);
      
     
 }
 const rready=()=>{
       
  setTimeout(()=>{nn(1)},2000);
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
  const song=()=>{
    pause(1);
    noaudio(false);
  }
  const songg=()=>{
    noaudio(true);
    pause(0);
  }
  return (
    <div className="c1">

      <div className="c2">
        <h1 className="ori">ORION'S GAME</h1>
      </div>
      <div className="c3">
        <div className="c31">
          <div className="c31a">{flag===0?(<button onClick={()=>{click()}}className='nm'>ENTER</button>):(null)}{
             flag===0?(
            <input type='text' placeholder='write you name' onChange={(e)=>{change(e.target.value)}}></input>):(<h1 className='c31aa'>{dname}</h1>) }</div>
        
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


          <div className="c33"><div>{play===0?(<button className='img' onClick={()=>{song()}}></button>):(<button className='img1' onClick={()=>{songg()}}></button>)}</div>
          <div className="aud"><audio src="./Animals - Maroon 5_320- [PagalWorld.NL].mp3" controls={audioo} className='noa'></audio></div>
          </div>


        <div className="c32">
          <div className="c32a">{flagg===0?(<button onClick={()=>{cclick()}}className='nm'>ENTER</button>):(null)}{
             flagg===0?(
            <input type='text' placeholder='write you name' className='nm1' onChange={(e)=>{cchange(e.target.value)}}></input>):(<h1 className='c32aa'>{ddname}</h1>) }</div>
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
  )
}

export default Todo;
