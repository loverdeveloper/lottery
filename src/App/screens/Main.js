import React, {useState,useEffect} from 'react';
import '../../App.scss';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import winnerImg from '../assets/images/winner.webp'
import sign from '../assets/images/signature.png'
function Main() {
    let local = localStorage.getItem('list');
    let [nameInput,setNameInput] = useState('');
    let [listItems, setListItems] = useState(local?JSON.parse(local):[]);
    let [loading,setLoading] = useState(true);
    let [lotted,setLotted] = useState(false);
    let [winner,setWinner] = useState(null);
    let [justFun,setJustFun] = useState(null);

    useEffect(() => {
        if (listItems){
            localStorage.setItem('list',JSON.stringify(listItems))
        }
    });
    function unsetItem (index) {
        delete listItems[index];
        setListItems(listItems);
    }
    function shuffle() {
        let currentIndex = listItems.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = listItems[currentIndex];
            listItems[currentIndex] = listItems[randomIndex];
            listItems[randomIndex] = temporaryValue;
        }

        setListItems(listItems);
        setListItems(listItems);
        setJustFun(Math.random());
        return 0;
    }

    function getRandomInt(max) {
        let number = Math.floor(Math.random() * Math.floor(max));
        if(number < 0){
            console.error("Negative number");
            getRandomInt(max);
        }
        return number;
    }

    function lottery() {
        let number = +getRandomInt(listItems.length);
        setLotted(true);    
        setWinner(number);
    }

    function addMember(){
        if (nameInput){
            listItems.push(nameInput);setListItems(listItems);setLoading(true);
            setNameInput("");
        }
    }

    return (
        <>
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
                            <h3 className="text-muted">#{winner>-1?[winner]:null}</h3>
                            <h1 className="text-red">{winner>-1?listItems[winner]:null}</h1>
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
                                    <div className="bot" style={{"animation":"btnSpin 4s"}} onClick={lottery}>
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
                            <div className="col-1 col-sm-2">
                                <div className="textBtn" onClick={addMember}>
                                    <FontAwesomeIcon icon="check"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-10">
                                <input type="text" placeholder="نام فرد" value={nameInput} onChange={(text)=>{setNameInput(text.target.value.toString());}} className="input"/>
                            </div>
                            <div className="col d-none d-md-block"></div>
                        </div>
                    </div>
                    <div className="d-block mx-auto">
                        <div className="row">
                            <div className="col d-none d-md-block"></div>
                            <div className="col-lg-6 col-sm-12">
                                <div  onClick={shuffle} className="text-muted p-3 pointer">
                                    <p className="float-right noSelect"> بهم ریختن اسامی لیست 😃</p>
                                    <FontAwesomeIcon icon="sync-alt"/>
                                </div>
                                <div className="items d-block mx-auto">
                                    {listItems.map((arr,index)=>{
                                        return arr!=null? (
                                            <div className="item" key={index}>
                                                <div className="l-row">
                                                    <div className="l-id">
                                                        <span>#{index}</span>
                                                    </div>
                                                    <div className="l-text">
                                                        <h6>{arr}</h6>
                                                    </div>
                                                    <div className="l-con">
                                                        <a className="text-danger m-2 pointer" key={index} onClick={(key)=>{listItems.splice(index,1);
                                                            setListItems(listItems);setJustFun(Math.random())}}>
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
        </div>
        <div className="links">
                                    <img src={sign} className="lover-sign"/>
                <p>Developed By <b>@LoverDeveloper
                    <br/>
                    Available in <a href="http://github.com/loverdeveloper/lottery"><FontAwesomeIcon icon={['fab', 'github']}/> github.com/loverdeveloper/lottery</a>
                </b></p>
            </div>
        </>
    );
}

export default Main;
