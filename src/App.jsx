// =====================================================
// Bootstrap Dependencies (Core CSS)
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap Dependencies (React Components)
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// =====================================================
// Custom Script Dependencies
import './App.css'
// =====================================================
// Custom Asset Imports
import profile from "./assets/profile.jpg";
// =====================================================
// Left Side of the Page
function Title() {
  return (
    <>
      <Row className="left-screen-group pt-5">
        <Col className="d-flex flex-column align-items-center">
          <img src={profile} alt="Profile Picture" className={"rounded-circle portrait"} />
          <p className="header">
            Leow Kean Tat (Alias: Kaz)
          </p>
        </Col>
      </Row>
    </>
  );
}

function ProfileSummary() {
  return (
    <>
      <Row className="left-screen-group">
        <Col>
          <p className="left-screen-header">
            Profile Summary
          </p>
          <p className="left-screen-content">
            Game Programmer and Full Stack Developer hybrid. Intrinsically finds value in creating codebases which balances between code readability and respecting the big O notation.
          </p>
        </Col>
      </Row>
    </>
  );
}

function EmploymentHistory() {
  return (
    <>
      <Row className="left-screen-group">
        <Col>
          <p className="left-screen-header">
            Employment History
          </p>
          <p className="left-screen-header-title">
            Senior Game Programmer, Kotakoren Games Studio, Remote
          </p>
          <p className="left-screen-content-quote">
            APRIL 2022 - JUNE 2023
          </p>

          <ul>
            <li className="left-screen-content-description">
              Developed sample projects and demos which accelerated and enabled the junior programmers' ability to visualize intermediate programming concepts.
            </li>
            <li className="left-screen-content-description">
              Developed a set of assessment tests for the company which has helped to completely eliminate the potentiality of hiring under-qualified applicants.
            </li>
            <li className="left-screen-content-description">
              Developed Unity custom editor tools to aid the art team with their assets' integration from their preferred 3D Modeling Software into the Unity Engine and macros to optimise their assets on import. Significantly reduced the time taken for them to set up each Look Dev scene for just an upfront cost of 1 to 2 weeks in tool research and development time.
            </li>
            <li className="left-screen-content-description">
              Successfully brought the company project out from development limbo and produced a playable prototype.
            </li>
          </ul>

          <br />

          <p className="left-screen-header-title">
            Senior Game Programmer, Soulofox Studio, Remote
          </p>
          <p className="left-screen-content-quote">
            FEBRUARY 2022 - MARCH 2022
          </p>

          <ul>
            <li className="left-screen-content-description">
              Developed a minimalist yet reusable system which supports animations from different sprite engines (DragonBones, Spine) which significantly reduced the time it took to quickly test art assets from various outsourced teams in the Look Dev scene.
            </li>
            <li className="left-screen-content-description">
              Assisted in researching for solutions to integrate the web camera into Unity's WebGL Platform.
            </li>
          </ul>

          <br />

          <p className="left-screen-header-title">
            Junior Full Stack Developer Liquid Rock Games Studio, Remote
          </p>
          <p className="left-screen-content-quote">AUGUST 2017 - AUGUST 2019</p>

          <ul>
            <li className="left-screen-content-description">
              Was part of the team which launched the e-hailing app in Malaysia, known as "CarriageForHer". Its development process has spearheaded my learning process on both how the technology stack in this field communicates with one another and Google Services' Integration into both React Native and Laravel Frameworks.
            </li>
            <li className="left-screen-content-description">
              Was also a part of an unnamed e-commerce project. This gave me the opportunity to learn how to integrate third-party transaction services in the client app.
            </li>
          </ul>

          <br />

          <p className="left-screen-header-title">
            Junior Game Programmer, Techninier Sdn Bhd, Q Sentral, 2A, Jalan Stesen Sentral 2, Kuala Lumpur Sentral, 50470 Kuala Lumpur (On-site)
          </p>
          <p className="left-screen-content-quote">
            AUGUST 2016 - JANUARY 2017
          </p>

          <ul>
            <li className="left-screen-content-description">
              Successfully developed the company's unnamed prototype's (2D MOBA genre) core feature sets in 3 months (ahead of the original schedule of ~6 months).
            </li>
            <li className="left-screen-content-description">
              Aided the game designer's game balancing process by creating easy-to-navigate-and-use (minimalist UI design and K.I.S.S approach) custom editor tools written in C# in the Unity Engine.
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
}

function TrainingHistory() {
  return (
    <>
      <Row className="left-screen-group">
        <Col>
          <p className="left-screen-header">
            Internships/Trainings
          </p>
          <p className="left-screen-header-title">
            Game Programmer at AppAsia Studio, E-5-4, 5th Floor, Megan Avenue 1, Jalan Tun Razak., Kuala Lumpur, Kuala Lumpur 50400, MY
          </p>
          <p className="left-screen-content-quote">
            MAY 2016 - AUGUST 2016
          </p>

          <ul>
            <li className="left-screen-content-description">
              Worked mainly on mobile platform games using
              the Unity Engine. Was also involved in the post-production, especially the deployment process.
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
}

function EducationHistory() {
  return (
    <>
      <Row className="left-screen-group">
        <Col>
          <p className="left-screen-header">
            Education
          </p>
          <p className="left-screen-header-title">
            Bachelor's Degree in Game Development (Programming), UOW Malaysia KDU University College, Jalan Kontraktor U1/14, Glenpark U1, 40150 Shah Alam, Selangor
          </p>
          <p className="left-screen-content-quote">
            APRIL 2013 - OCTOBER 2016
          </p>
          <p className="left-screen-content-description">
            First Class
          </p>

          <br />

          <p className="left-screen-header-title">
            Diploma of Education in Games Development, UOW Malaysia KDU Penang University College, 32, Jalan Anson, George Town, 10400 George Town, Pulau Pinang
          </p>
          <p className="left-screen-content-quote">
            JANUARY 2011 - APRIL 2013
          </p>
          <p className="left-screen-content-description">
            Distinction
          </p>
        </Col>
      </Row>
    </>
  );
}
// =====================================================
// Right Side of the Page
function ContactDetails() {
  return (
    <>
      <Row className="right-screen-group">
        <Col>
          <p className="right-screen-header">
            Details
          </p>

          <p className="right-screen-content">
            Bayan Lepas, Penang
          </p>
          <p className="right-screen-content">
            Malaysia
          </p>
          <p className="right-screen-content">
            +(60)17-5845732
          </p>
          <a href={"mailto:leowkeantat@gmail.com"} className="right-screen-content">
            leowkeantat@gmail.com
          </a>
        </Col>
      </Row>
    </>
  );
}

function Links() {
  return (
    <>
      <Row className="right-screen-group">
        <Col>
          <p className="right-screen-header">
            Links
          </p>

          <p className="right-screen-content">
            <a href={"https://www.linkedin.com/in/kazcade/"} target={"_blank"} rel="noopener noreferrer" className="right-screen-content-link">
              LinkedIn
            </a>
          </p>
          <p className="right-screen-content">
            <a href={"https://projectkazcade.itch.io/"} target={"_blank"} rel="noopener noreferrer" className="right-screen-content-link">
              Itch IO
            </a>
          </p>
        </Col>
      </Row>
    </>
  );
}

function Skills() {
  return (
    <>
      <Row className="right-screen-group">
        <Col>
          <p className="right-screen-header">
            Skills
          </p>

          <p className="right-screen-content">
            Unity Game Engine
          </p>
          <p className="right-screen-content">
            Unreal Engine (Blueprint)
          </p>

          <br />

          <p className="right-screen-content">
            Perforce P4V Client
          </p>
          <p className="right-screen-content">
            GIT/SVN
          </p>

          <br />

          <p className="right-screen-content">
            Visual Studios (Code/2019)
          </p>
          <p className="right-screen-content">
            Laravel Framework
          </p>
          <p className="right-screen-content">
            React Native
          </p>
          <p className="right-screen-content">
            NPM (Windows) / Homebrew (Mac)
          </p>

          <br />

          <p className="right-screen-content">
            C#
          </p>
          <p className="right-screen-content">
            C++
          </p>
          <p className="right-screen-content">
            PHP
          </p>
          <p className="right-screen-content">
            JavaScript
          </p>
          <p className="right-screen-content">
            Java
          </p>
          <p className="right-screen-content">
            MySQL
          </p>
        </Col>
      </Row>
    </>
  );
}

function Hobbies() {
  return (
    <>
      <Row className="right-screen-group">
        <Col>
          <h2 className="right-screen-header">
            Hobbies
          </h2>

          <p className="right-screen-content">
            Video Games
          </p>
          <p className="right-screen-content">
            NERF Sports
          </p>
          <p className="right-screen-content">
            Tabletop games
          </p>
          <p className="right-screen-content">
            Reading about psychology
          </p>
        </Col>
      </Row>
    </>
  );
}

function Languages() {
  return (
    <>
      <Row className="right-screen-group">
        <Col>
          <p className="right-screen-header">
            Languages
          </p>

          <p className="right-screen-content">
            English
          </p>

          <p className="right-screen-content">
            Malay
          </p>
        </Col>
      </Row>
    </>
  );
}
// =====================================================
function App() {
  return (
    <>
      <div className={"split-screen"}>
        {/* ===================== */}
        {/* Left Side of the Page */}
        <Container fluid className={"left-screen"}>
          {/* Title (Name + Profile Picture) */}
          <Title />
          {/* Profile Summary */}
          <ProfileSummary />
          {/* Employment History */}
          <EmploymentHistory />
          {/* Internships/Trainings */}
          <TrainingHistory />
          {/* Education */}
          <EducationHistory />
        </Container>
        {/* ===================== */}
        {/* Right Side of the Page */}
        <Container fluid className={"right-screen"}>
          {/* Details */}
          <ContactDetails />
          {/* Links */}
          <Links />
          {/* Skills */}
          <Skills />
          {/* Hobbies */}
          <Hobbies />
          {/* Languages */}
          <Languages />
        </Container >
        {/* ===================== */}
      </div >
    </>
  )
}

export default App
