import React, { Component } from "react";
import Resume from "../../Whittle, Bruce - CV 2019.pdf";

export default class Home extends Component {
  render() {
    return (
      <div className="main-window">
        <div className="button-hero">
          <a className="button" href={Resume} target="_blank">
            RESUME
          </a>
          <p>
            Click the button above for a copy of my resume.
            <br />
            Scroll down for the same information in a nicer form.
          </p>
        </div>
        <div className="home-window">
          <div className="sideBar sideBar__left">
            <div className="content__sideBar sideBar__style-one">
              <h3>Presentations</h3>
              <p>
                Whittle, Bruce (1990) Calcium in the pre-colostral secretions of
                pregnant ewes as an indicator of impending parturition. Paper
                presented at Missouri Academy of Science and American Society of
                Animal Science.
              </p>
            </div>

            <div className="content__sideBar sideBar__style-three">
              <h3>Research Skills</h3>
              <ul>
                <li>Atomic Absorption Spectrophotometry</li>
                <li>Research Animal Care</li>
              </ul>
            </div>

            <div className="content__sideBar sideBar__style-one">
              <h3>Education</h3>
              <ul className="multi">
                <h4>1994 | D.V.M.</h4>
                <ul className="inset">
                  <li>University of Missouri College of Veterinary Medicine</li>
                  <li>Columbia, MO</li>
                </ul>
              </ul>
              <ul className="multi">
                <h4>1987 - 1990 | Undergraduate</h4>
                <ul className="inset">
                  <li>Northeast Missouri State University</li>
                  <li>Kirksville, MO</li>
                </ul>
              </ul>
              <ul>
                <h4>1983 - 1987 | High School</h4>
                <ul className="inset">
                  <li>Diamond High School</li>
                  <li>Diamond, MO</li>
                  <li>Valedictorian</li>
                </ul>
              </ul>
            </div>
          </div>

          <div className="main-content">
            <div className="content__article">
              <h1>The Making of Dr. Whittle</h1>
              <p>
                Dr. Bruce Whittle is a graduate of the University of Missouri
                College of Veterinary Medicine. Upon graduation, he and his
                wife, Dr. Gayla Whittle, opened Honey Creek Veterinary Hospital
                in Trenton, Missouri. He developed an interest in equine
                dentistry early in his career. Dr. Whittle has taught thirty
                dentistry workshops on behalf of the American Association of
                Equine Practitioners at veterinary schools throughout the United
                States since 2009. He enjoys being able to share his passion for
                dentistry with the next generation of veterinarians. He also
                helped found and teaches at an equine dentistry seminar and wet
                lab for the Missouri VMA. He has worked on scope of practice
                issues, including equine dentistry, through the MVMA as well as
                the AAEP where he currently serves as the chair of the Welfare
                and Public Policy Advisory Council.
              </p>
            </div>
          </div>

          <div className="sideBar sideBar__right">
            <div className="content__sideBar sideBar__style-two">
              <h2>Skills / Interests</h2>
              <ul className="multi">
                <h3>General Equine Medicine and Surgery</h3>
                <h4>Primary areas of interest include:</h4>
                <ul className="inset">
                  <li>Dentistry</li>
                  <li>Parasite Control and Preventative Medicine</li>
                  <li>Wound Management</li>
                  <li>Foot Care</li>
                  <li>Neonatal Medicine</li>
                </ul>
              </ul>
              <ul className="multi">
                <h3>General Bovine Medicine and Surgery</h3>
                <h4>Primary areas of interest include:</h4>
                <ul className="inset">
                  <li>Heifer Development</li>
                  <li>Preventative Medicine Programs</li>
                  <li>Neonatal Medicine</li>
                  <li>Lameness</li>
                </ul>
              </ul>
              <ul className="multi">
                <h3>General Food Animal Practice</h3>
                <ul className="inset">
                  <li>Sheep</li>
                  <li>Goats</li>
                  <li>Cervidae</li>
                  <li>Swine</li>
                </ul>
              </ul>
              <ul className="multi">
                <h3>Small Animal Dentistry</h3>
                <ul className="inset">
                  <li>Canine</li>
                  <li>Feline</li>
                </ul>
              </ul>
              <ul className="multi">
                <h3>Client Education</h3>
                <ul className="inset">
                  <li>Equine Dentistry</li>
                  <li>
                    General Equine Medical Care (4H, Saddle Clubs, Universities)
                  </li>
                </ul>
              </ul>
              <ul className="multi">
                <h3>Pre-Veterinary Student Mentorship</h3>
                <ul className="inset">
                  <li>
                    Introducing students from junior high through college to
                    large animal medicine
                  </li>
                </ul>
              </ul>
              <ul>
                <h3>Veterinary Student Preceptorships</h3>
                <ul className="inset">
                  <li>
                    Participant in the University of Missouri - College of
                    Veterinary Medicine graded preceptorship program
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
