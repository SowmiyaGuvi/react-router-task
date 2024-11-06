import image from './assets/image.png';
function Footer() {
  return (
    <>
    <footer className="py-5 bg-dark">
        <div className="container">
        <img src={image} className="img-fluid" alt="Guvi-blog-logo" />
        <br/>
        <br/>
        <p className="m-0 text-left text-white">GUVI – India’s Pioneering Vernacular EdTech, incubated by IIT-M, IIM-A, and a prestigious part of the <br/>HCL group. Empowering over 2.5 million global learners with top-tier educational solutions through a <br/>vernacular approach, we have revolutionized global tech education with strategic partnerships,<br/> including 'Google for Education' AICTE, AWS, Google Cloud, IIT-M Pravartak, UiPath, and NASSCOM.<br/> GUVI is your trusted guide to inclusive and accredited learning experiences.</p>
        </div>
    </footer>
    </>
  )
}

export default Footer