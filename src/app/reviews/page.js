import data from '../../../src/data.json'
import { FaRegUserCircle } from "react-icons/fa";

export default function Reviews() {
    let reviews = data["reviews"];
    reviews = reviews.map((e) => {
        return <div className='reviews'>
            <FaRegUserCircle className='reviewer_profile' />
            <div className='reviewer'>
                <div className='reviewerData'></div>
                <h2>{e.name} {Array.from({ length: 5 }, (_, index) => e.star >= index + 1 ? <span>&#9733;</span> : <span>&#9734;</span>)}</h2>
                <h4>{e.review}</h4>
            </div>
        </div>
    })

    return (
        <div>
            {reviews}
        </div>
    )
}