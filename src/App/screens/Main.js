import React, {useState,useEffect} from 'react';
import '../../App.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Main() {
    let [nameInput,setNameInput] = useState();
    let [items,setItems] = useState([]);
    let [loading,setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
        document.title = `You clicked ${nameInput} times`;
    });
    function unsetItem(key) {
        delete items[key];
        setItems(items);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 d-none d-md-block"></div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <div className="d-block mx-auto">
                                <div className="headerSection">
                                    <h2 className="text-xlarge">قرئه کشی</h2>
                                    <p>صندوق چهارده معصوم</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-4">
                                    <div className="bot">
                                        <FontAwesomeIcon className="d-block mx-auto" icon="play"/>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="lotteryStart">
                                        <p>
                                            <b>شروع</b> قرئه کشی
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
                                <div className="textBtn" onClick={()=>{items.push(nameInput);setItems(items,function () {
                                    setLoading(true)
                                });}}>
                                    <FontAwesomeIcon icon="check"/>
                                </div>
                            </div>
                            <div className="col-5">
                                <input type="text" placeholder="نام فرد" onChange={(text)=>{setNameInput(text.target.value.toString())}} className="input"/>
                            </div>
                            <div className="col d-none d-md-block"></div>
                        </div>
                    </div>
                    <div className="d-block mx-auto">
                        <div className="row">
                            <div className="col d-none d-md-block"></div>
                            <div className="col-6">
                                <div className="items d-block mx-auto">
                                    {items.map((arr,index)=>{
                                        return (
                                            <div className="item">
                                                <div className="row">
                                                    <div className="col">
                                                        <span>#{index}</span>
                                                    </div>
                                                    <div className="col-7">
                                                        <h6>{arr}</h6>
                                                    </div>
                                                    <div className="col">
                                                        <a className="text-danger m-2" onClick={()=>{unsetItem(index)}}>
                                                            <FontAwesomeIcon icon="trash-alt"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
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
                <Link className={"linksBottom"} to={"/about"}>درباره 14</Link>
                <Link className={"linksBottom"} to={"/about"}>درباره 14</Link>
                <Link className={"linksBottom"} to={"/about"}>درباره 14</Link>
                <Link className={"linksBottom"} to={"/about"}>درباره 14</Link>
            </div>
        </div>
    );
}

export default Main;
