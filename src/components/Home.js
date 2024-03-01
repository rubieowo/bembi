import React from 'react'
import Navbar1 from './Navbar1';
import './Home.css'
import './Navbar1.css'
import backgroundImage from '../images/background-img.jpg'
import abc from '../images/abc.png'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import book from '../images/book.png'
import happy from '../images/happy.png'
import lightbulb from '../images/lightbulb.png'


function Home() {
  return (
    <div className='home-container'>
      <div className='bg-img'>
        <img src={backgroundImage}></img>
      </div>
      <Navbar1 />
      <h1 className='mission'>საუკეთესო ბაღი თქვენი <span className='kids'>ბავშვებისთვის!</span></h1>
      <div className='list-container'>
        <ul className='list'>
          ჩვენი მისია:
          <li className='list-object'>
            ბავშვს შეუწყოს ხელი აღზრდაში
          </li>
          <li className='list-object'>
            შეიცნოს ბავშვმა ყველაფერი სამყაროს შესახებ
          </li>
          <li className='list-object'>
            ბავშვმა გაატაროს დრო უსაფრთხო გარემოში
          </li>
          <li className='list-object'>
            ჰქონდეს ბავშვს ყველა თანამედროვე პირობა
          </li>
        </ul>
        <div className='button-container'>
          <Link to={"/Contact"}><Button variant="warning" className='button'>მოგვწერეთ Mail-ზე</Button>{' '}</Link>
        </div>
      </div>
      <div className='about-us'>
        <div className='card'>
          <div className='image-container'>
            <img src={abc}></img>
          </div>
          <p className='card-text'>საუკეთესო მასწავლებლები</p>
        </div>
        <div className='card'>
          <div className='image-container'>
            <img src={book}></img>
          </div>
          <p className='card-text'>სრულად აღჭურვილი</p>
        </div>
        <div className='card'>
          <div className='image-container'>
            <img src={happy}></img>
          </div>
          <p className='card-text'>სახალისო გარემო</p>
        </div>
        <div className='card'>
          <div className='image-container'>
            <img src={lightbulb}></img>
          </div>
          <p className='card-text'>ინტელექტუალური განვითარება</p>
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
