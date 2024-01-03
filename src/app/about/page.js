import data from '../../../src/data.json'

export default function About() {
  const about = data["course"].about.html_content + data["course"].what_to_expect.html_content + data["course"].key_topics.html_content;
    return <div className='about' dangerouslySetInnerHTML={{ __html: about }} />
  }