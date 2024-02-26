import React from 'react'
import Navbar1 from './Navbar1';
import './Home.css'
import './Navbar1.css'
import backgroundImage from '../images/background-img.jpg'

function Home() {
  return (
    <div className='home-container'>
      <div className='bg-img'>
        <img src={backgroundImage}></img>
      </div>
      <Navbar1 />
      <h1 className='mission'>ბაღის მისია</h1>
      <div className='text-container'>
        <div className='text-text-container'>
          <p className='text'>
          ბაგა-ბაღი ,,ბემბის" მისიაა აღსაზრდელს ხელი შეუწყოს განვითარებაში, სამყაროს შეცნობაში, ღირსეულ ადამიანად ჩამოყალიბებეაში, აზროვნებისა და მოტორიკის განვითარებაში, მიაჩვიოს წესების დაცვას, რაც წინაპირობაა შემდგომში კანონმორჩილ ადამიანად ჩამოყალიბებისა. ჩამოუყალიბოს ისეთი უნარ-ჩვევები როგორიცაა: ტოლერანტობა, ვალდებულების მაღალი შეგნება. ბაღი იზრუნებს აღსაზრდელს შეუქმნას უსაფრთხო გარემო და განვითარებისათვის საჭირო ყველა თანამედროვე პირობა, ასევე ბაღი იზრუნებს აღმზრდელების პროფესიულ განვითარებაზე და მათი საქმიანობის ხელშეწყობაზე.
          </p>
        </div>
      </div>
      <div className='contact-us'>
        <div>
          <h1 className='contact'>დაგვიკავშირდით:</h1>
        </div>
        <div>
          <h3 className='contact'>მისამართი:</h3>
          <p className='contact address'>ქ. თბილისი, დ/დიღომი III მ/რ. მირიან მეფის ქ. #69</p>
        </div>
        <div>
          <h3 className='contact'>ტელეფონი:</h3>
          <p className='contact address'>(+995) 598 23 37 00</p>
        </div>
        <div>
          <h3 className='contact'>ელ. ფოსტა:</h3>
          <p className='contact address'>bagabaghibembi@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
