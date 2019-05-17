import React, {useState,useEffect} from 'react';
import '../../App.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import winnerImg from '../assets/images/winner.webp'
function Main() {
    let local = localStorage.getItem('list');
    let [nameInput,setNameInput] = useState('');
    let [listItems, setListItems] = useState(local?JSON.parse(local):[]);
    let [loading,setLoading] = useState(true);
    let [lotted,setLotted] = useState(false);
    let [winner,setWinner] = useState(null);

    useEffect(() => {
        console.log(listItems)
        if (listItems){
            localStorage.setItem('list',JSON.stringify(listItems))
        }
    });
    function unsetItem (index) {
        delete listItems[index];
        setListItems(listItems);
    }

    function lottery() {
        let number = Math.floor((Math.random() * listItems.length) + 1);
        setLotted(true);
        setWinner(number-1);
        console.log(number-1);
    }

    return (
        <div className="container">
            {!lotted?null
                :<div className="row">
                    <div className="col">
                        <div className="winner d-block mx-auto">
                            <div className="close" onClick={()=>{
                                setWinner(0); setLotted(false);
                            }}>
                                <FontAwesomeIcon icon="window-close"/>
                            </div>
                            <img src={winnerImg} className=" winnerImg" alt=""/>
                            <h3 className="text-muted">برنده قرعه کشی</h3>
                            <h1 className="text-red">{winner?listItems[winner]:null}</h1>
                        </div>
                    </div>
                </div>}
            <div className={lotted?"row blured":"row"}>
                <div className="col-3 d-none d-md-block"></div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <div className="d-block mx-auto">
                                <div className="headerSection">
                                    <h2 className="text-xlarge">قرعه کشی</h2>
                                    <p>صندوق چهارده معصوم</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-4">
                                    <div className="bot" onClick={lottery}>
                                        <FontAwesomeIcon className="d-block mx-auto" icon="play"/>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="lotteryStart">
                                        <p>
                                            <b>شروع</b> قرعه کشی
                                        </p>
                                        <p>
                                            بزن بریم...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-block mx-auto">
                        <div className="row">
                            <div className="col d-none d-md-block"></div>
                            <div className="col-1">
                                <div className="textBtn" onClick={()=>{listItems.push(nameInput);setListItems(listItems);setLoading(true);
                                    setNameInput("");}}>
                                    <FontAwesomeIcon icon="check"/>
                                </div>
                            </div>
                            <div className="col-5">
                                <input type="text" placeholder="نام فرد" value={nameInput} onChange={(text)=>{setNameInput(text.target.value.toString());console.log(nameInput)}} className="input"/>
                            </div>
                            <div className="col d-none d-md-block"></div>
                        </div>
                    </div>
                    <div className="d-block mx-auto">
                        <div className="row">
                            <div className="col d-none d-md-block"></div>
                            <div className="col-6">
                                <div className="items d-block mx-auto">
                                    {listItems.map((arr,index)=>{
                                        return arr!=null? (
                                            <div className="item" key={index}>
                                                <div className="row">
                                                    <div className="col">
                                                        <span>#{index}</span>
                                                    </div>
                                                    <div className="col-7">
                                                        <h6>{arr}</h6>
                                                    </div>
                                                    <div className="col">
                                                        <a className="text-danger m-2 pointer" key={index} onClick={(key)=>{listItems.splice(index,1);
                                                            console.log(listItems);setListItems(listItems);console.log(listItems)}}>
                                                            <FontAwesomeIcon icon="trash-alt"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ):null
                                    })}
                                </div>
                            </div>
                            <div className="col d-none d-md-block"></div>
                        </div>
                    </div>

                </div>
                <div className="col-3 d-none d-md-block"></div>
            </div>
            <div className="links">
                <p>Developed By <b>LoverDeveloper</b></p>
            </div>
        </div>
    );
}

export default Main;
