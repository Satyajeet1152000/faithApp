import { SocialIcon } from 'react-social-icons'

export default function AboutInstructor(props) {
  const { profile_url, about, social_medias } = props;
  return (
    <>
      <div className='aboutInstructor'>
        <h2>About the Instrictor</h2>
        <div className='abtIns'>
          <img src={profile_url} alt="" />
          <div className="info" dangerouslySetInnerHTML={{ __html: about }}></div>
        </div>
      </div>
      <div className='socialMedias'>
        {
          Object.entries(social_medias).map(([key, value]) => (
            value ? <h4><SocialIcon network={key} style={{ width: '24px', height: '24px' }} />{key.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase())}</h4> : ''
          ))
        }
      </div>
    </>
  )
}