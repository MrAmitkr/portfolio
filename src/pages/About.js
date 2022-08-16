import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hii Everyone, It's me <span>Amit Kr. Sharma</span>
              </p>
              <h2 className="about__heading">Front-end Web developer</h2>
              <div className="about__info">
                <PText>
                  I'm a developer with a passion for web development. I also
                  have practical expertise with numerous other programming
                  languages, including HTML, CSS, JavaScript, and REACT. I
                  consider myself to be a team player that is self-motivated,
                  enjoys taking on big challenges along the way. I've always
                  been curious to learn more about various tools and strategies
                  to to to to improve my knowledge & skills.
                  <br /> <br />
                  In my first year of college, I began developing websites. With
                  the help of my mentors and seniors, I created the front ends
                  of multiple websites. interacted with many experts in their
                  field of interest and gained experience handling everyone's
                  expectations
                  <br />
                  <br />
                  Helped my senior colleagues create website designs and turn
                  those designs into interactive web features. observed more
                  experienced members in action and polished code to enhance the
                  usability and performance of websites. Making the world an
                  even better place is my goal. just about e Every aspect of
                  life is improving.
                </PText>
              </div>
              <Button btnText="Checkout my CV here" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="Bachelors"
                items={[
                  'Indian Institue of Information Technology (Information Technology)',
                ]}
              />
              <br />
              <AboutInfoItem
                title="Masters"
                items={[
                  'Indian Institue of Information Technology (Master Of Business Administration)',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="Office"
                items={['MS OFFICE(Word, Power Point, Excel)']}
              />
              <AboutInfoItem
                title="Design"
                items={[
                  'Photoshop',
                  'Illustration',
                  'Premiere Pro',
                  'Toon-Boon Harmony',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2018-2019"
                items={['Head of Content writing at UTHAAN']}
              />
              <br />
              <AboutInfoItem
                title="2019-2021"
                items={['Front-end Developer and content manager at AASF']}
              />
              <br />
              <br />
              <AboutInfoItem
                title="2020 "
                items={['Worked as a Web Developer in a event called Aurora']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
