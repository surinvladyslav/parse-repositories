import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Container from '../container/index';
import { SaveCard } from "../card";
import { useContext } from "../../context/context";

import './index.scss';


function Header() {
    const { selectiveRepositories, theme, repositories, dispatch} = useContext();
    return (
        <header>
            <Container>
                <nav className="navbar navbar-light fixed-top">
                    <div className="container-fluid">
                        {repositories.length !== 0 &&
                            <div className="list-length">
                                <p>Repositories</p>
                                <span>{repositories.length}</span>
                            </div>
                        }
                        <button className="navbar-toggler p-0 border-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" className="octicon octicon-three-bars">
                                <path fillRule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path>
                            </svg>
                        </button>
                        <div className="offcanvas offcanvas-end w-100" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <Container>
                                    <div className="offcanvas-header-inner">
                                        <button type="button" className="navbar-toggler close" data-bs-dismiss="offcanvas" aria-label="Close">
                                            <svg aria-hidden="true" height="30" viewBox="0 0 16 16" version="1.1" width="30" data-view-component="true" className="octicon octicon-x">
                                                <path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </Container>
                            </div>
                            <Container>
                                <div className="offcanvas-body">
                                    <Tabs>
                                        <TabList>
                                            <Tab>
                                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="rep">
                                                    <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                                                </svg>
                                                <span>{selectiveRepositories.length} </span>
                                                Saved repositories
                                            </Tab>
                                            <Tab>
                                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-paintbrush">
                                                    <path fillRule="evenodd" d="M11.134 1.535C9.722 2.562 8.16 4.057 6.889 5.312 5.8 6.387 5.041 7.401 4.575 8.294a3.745 3.745 0 00-3.227 1.054c-.43.431-.69 1.066-.86 1.657a11.982 11.982 0 00-.358 1.914A21.263 21.263 0 000 15.203v.054l.75-.007-.007.75h.054a14.404 14.404 0 00.654-.012 21.243 21.243 0 001.63-.118c.62-.07 1.3-.18 1.914-.357.592-.17 1.226-.43 1.657-.861a3.745 3.745 0 001.055-3.217c.908-.461 1.942-1.216 3.04-2.3 1.279-1.262 2.764-2.825 3.775-4.249.501-.706.923-1.428 1.125-2.096.2-.659.235-1.469-.368-2.07-.606-.607-1.42-.55-2.069-.34-.66.213-1.376.646-2.076 1.155zm-3.95 8.48a3.76 3.76 0 00-1.19-1.192 9.758 9.758 0 011.161-1.607l1.658 1.658a9.853 9.853 0 01-1.63 1.142zM.742 16l.007-.75-.75.008A.75.75 0 00.743 16zM12.016 2.749c-1.224.89-2.605 2.189-3.822 3.384l1.718 1.718c1.21-1.205 2.51-2.597 3.387-3.833.47-.662.78-1.227.912-1.662.134-.444.032-.551.009-.575h-.001V1.78c-.014-.014-.112-.113-.548.027-.432.14-.995.462-1.655.942zM1.62 13.089a19.56 19.56 0 00-.104 1.395 19.55 19.55 0 001.396-.104 10.528 10.528 0 001.668-.309c.526-.151.856-.325 1.011-.48a2.25 2.25 0 00-3.182-3.182c-.155.155-.329.485-.48 1.01a10.515 10.515 0 00-.309 1.67z"></path>
                                                </svg>
                                                Appearance
                                            </Tab>
                                        </TabList>
                                        <TabPanel>
                                            {
                                                selectiveRepositories.length !== 0 ?
                                                selectiveRepositories.map((id,i) => (
                                                    <SaveCard id={id} key={i} />
                                                )): 
                                                <p className="save-rep">No saved...</p>
                                            } 
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="theme">
                                                <h3 className="theme-title">Theme preferences</h3>
                                                <h4 className="theme-subtitle">Theme preferences</h4>
                                                <select 
                                                    className="theme-select mr-2" 
                                                    onChange={e => {dispatch({type: 'THEME', payload: e.target.value})}} 
                                                    aria-labelledby="theme-mode-heading" 
                                                    value={theme}
                                                    >
                                                    <option value="light">Light default</option>
                                                    <option value="dark">Dark default</option>
                                                </select>
                                            </div>
                                        </TabPanel>
                                    </Tabs> 
                                </div>
                            </Container>
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Header;