import data from '../../../src/data.json'

export default function Instructor(){
    const instructor=data["instructor_nav"];
    return (
        <div className='instructor' dangerouslySetInnerHTML={{ __html: instructor }} />
    )
}