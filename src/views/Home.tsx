import Board from "components/Board";
import PageHeader from "components/PageHeader";
import Resizer from "components/Resizer";
import SideBar from "components/SideBar";
import { useState } from "react";


const Home = () => {
    const [expanded, setExpanded] = useState(true)
    return (
        <div className="h-screen">
            <PageHeader />
            <div className="absolute pt-14 h-full">
                <SideBar expanded={expanded} />
                <Resizer expanded={expanded} toggle={() => setExpanded(!expanded)} />
            </div>
            <div className={`pt-14 transition-spacing duration-300 ${expanded ? 'pl-60' : 'pl-5'}`}>
                <div className="px-10 pt-6">
                    <Board />
                </div>
            </div>
        </div>
    );
};

export default Home;
