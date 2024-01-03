import getSymbolFromCurrency from 'currency-symbol-map'
import { PiChats } from "react-icons/pi";
import { CiStreamOn } from "react-icons/ci";
import { MdOutlineOndemandVideo } from "react-icons/md";

export default function CourseSaleInfo(props) {
    const {fees, currency, inclusion, } = props;
    return (
        <div className="courseSaleInfo">
            <h2>Course fees</h2>
            <p>{getSymbolFromCurrency(currency)} {fees}</p>
            <div className='inclusions'>
            <h2>What's included:</h2>
                {inclusion.on_demand_videos ? <h4><span><MdOutlineOndemandVideo /></span>{inclusion.on_demand_videos} on-demand videos</h4> : ""}
                {inclusion.live_qa_sessions ? <h4><span><CiStreamOn /></span>{inclusion.live_stream_session} live stream sessions</h4> : ""}
                {inclusion.live_qa_sessions ? <h4><span><PiChats /></span>{inclusion.live_qa_sessions} Live Q&A sessions with Nityanand Charan Das</h4> : ""}
                {inclusion.whatsapp_community ? <h4><span><PiChats /></span>{inclusion.whatsapp_community} An active whatsapp community</h4> : ""}
            </div>
            <button>Register today</button>
        </div>
    );
}