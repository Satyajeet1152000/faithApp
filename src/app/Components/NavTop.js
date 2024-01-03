
export default function NavTop(props) {
    const {banner, instructorName, courseTitle} = props
    return (
        <div className='navTop'>
            <img src={banner} />
            <div className="bannerInfo">
                <h3>{instructorName}</h3>
                <h1>{courseTitle}</h1>
            </div>
        </div>
    );
}