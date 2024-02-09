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
function LeftScreenHeader(header) {
  return (
    <p className="left-screen-header">
      {header}
    </p>
  );
}

function LeftScreenContent(content) {
  return (
    <p className="left-screen-content">
      {content}
    </p>
  );
}

function LeftScreenContentDescription(contentDescription) {
  return (
    <p className="left-screen-content-description">
      {contentDescription}
    </p>
  );
}

function LeftScreenHeaderTitle(title) {
  return (
    <p className="left-screen-header-title">
      {title}
    </p>
  );
}

function LeftScreenHeaderQuote(quote) {
  return (
    <p className="left-screen-content-quote">
      {quote}
    </p>
  );
}

function LeftScreenHeaderListItem(listItem) {
  return (
    <li className="left-screen-content-description">
      {listItem}
    </li>
  );
}

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
          {LeftScreenHeader("Profile Summary")}
          {LeftScreenContent("Game Programmer and Full Stack Developer hybrid. Intrinsically finds value in creating codebases which balances between code readability and respecting the big O notation.")}
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
          {LeftScreenHeader("Employment History")}

          {LeftScreenHeaderTitle("Senior Game Programmer, Kotakoren Games Studio, Remote")}
          {LeftScreenHeaderQuote("APRIL 2022 - JUNE 2023")}

          <ul>
            {LeftScreenHeaderListItem("Developed sample projects and demos which accelerated and enabled the junior programmers' ability to visualize intermediate programming concepts.")}
            {LeftScreenHeaderListItem("Developed a set of assessment tests for the company which has helped to completely eliminate the potentiality of hiring under-qualified applicants.")}
            {LeftScreenHeaderListItem("Developed Unity custom editor tools to aid the art team with their assets' integration from their preferred 3D Modeling Software into the Unity Engine and macros to optimise their assets on import. Significantly reduced the time taken for them to set up each Look Dev scene for just an upfront cost of 1 to 2 weeks in tool research and development time.")}
            {LeftScreenHeaderListItem("Successfully brought the company project out from development limbo and produced a playable prototype.")}
          </ul>

          <br />

          {LeftScreenHeaderTitle("Senior Game Programmer, Soulofox Studio, Remote")}
          {LeftScreenHeaderQuote("FEBRUARY 2022 - MARCH 2022")}

          <ul>
            {LeftScreenHeaderListItem("Developed a minimalist yet reusable system which supports animations from different sprite engines (DragonBones, Spine) which significantly reduced the time it took to quickly test art assets from various outsourced teams in the Look Dev scene.")}
            {LeftScreenHeaderListItem("Assisted in researching for solutions to integrate the web camera into Unity's WebGL Platform.")}
          </ul>

          <br />

          {LeftScreenHeaderTitle("Junior Full Stack Developer Liquid Rock Games Studio, Remote")}
          {LeftScreenHeaderQuote("AUGUST 2017 - AUGUST 2019")}

          <ul>
            {LeftScreenHeaderListItem("Was part of the team which launched the e-hailing app in Malaysia, known as \"CarriageForHer\". Its development process has spearheaded my learning process on both how the technology stack in this field communicates with one another and Google Services' Integration into both React Native and Laravel Frameworks.")}
            {LeftScreenHeaderListItem("Was also a part of an unnamed e-commerce project. This gave me the opportunity to learn how to integrate third-party transaction services in the client app.")}
          </ul>

          <br />

          {LeftScreenHeaderTitle("Junior Game Programmer, Techninier Sdn Bhd, Q Sentral, 2A, Jalan Stesen Sentral 2, Kuala Lumpur Sentral, 50470 Kuala Lumpur (On-site)")}
          {LeftScreenHeaderQuote("AUGUST 2016 - JANUARY 2017")}

          <ul>
            {LeftScreenHeaderListItem("Successfully developed the company's unnamed prototype's (2D MOBA genre) core feature sets in 3 months (ahead of the original schedule of ~6 months).")}
            {LeftScreenHeaderListItem("Aided the game designer's game balancing process by creating easy-to-navigate-and-use (minimalist UI design and K.I.S.S approach) custom editor tools written in C# in the Unity Engine.")}
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
          {LeftScreenHeader("Internships/Trainings")}
          {LeftScreenHeaderTitle("Game Programmer at AppAsia Studio, E-5-4, 5th Floor, Megan Avenue 1, Jalan Tun Razak., Kuala Lumpur, Kuala Lumpur 50400, MY")}
          {LeftScreenHeaderQuote("MAY 2016 - AUGUST 2016")}

          <ul>
            {LeftScreenHeaderListItem("Worked mainly on mobile platform games using the Unity Engine.Was also involved in the post - production, especially the deployment process.")}
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
          {LeftScreenHeader("Education")}
          {LeftScreenHeaderTitle("Bachelor's Degree in Game Development (Programming), UOW Malaysia KDU University College, Jalan Kontraktor U1/14, Glenpark U1, 40150 Shah Alam, Selangor")}
          {LeftScreenHeaderQuote("APRIL 2013 - OCTOBER 2016")}
          {LeftScreenContentDescription("First Class")}

          <br />

          {LeftScreenHeaderTitle("Diploma of Education in Games Development, UOW Malaysia KDU Penang University College, 32, Jalan Anson, George Town, 10400 George Town, Pulau Pinang")}
          {LeftScreenHeaderQuote("JANUARY 2011 - APRIL 2013")}
          {LeftScreenContentDescription("Distinction")}
        </Col>
      </Row>
    </>
  );
}
// =====================================================
// Right Side of the Page
function RightScreenHeader(header) {
  return (
    <p className="right-screen-header">
      {header}
    </p>
  );
}

function RightScreenContent(content) {
  return (
    <p className="right-screen-content">
      {content}
    </p>
  );
}

function RightScreenContentLink(href, link) {
  return (
    <p className="right-screen-content">
      <a href={href} className="right-screen-content-link">
        {link}
      </a>
    </p>
  );
}

function ContactDetails() {
  return (
    <>
      <Row className="right-screen-group">
        <Col>
          {RightScreenHeader("Details")}
          {RightScreenContent("Bayan Lepas, Penang")}
          {RightScreenContent("Malaysia")}
          {RightScreenContent("+(60)17-5845732")}
          {RightScreenContentLink("mailto:leowkeantat@gmail.com", "leowkeantat@gmail.com")}
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
          {RightScreenHeader("Links")}
          {RightScreenContentLink("https://www.linkedin.com/in/kazcade/", "LinkedIn")}
          {RightScreenContentLink("https://projectkazcade.itch.io/", "Itch IO")}
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
          {RightScreenHeader("Skills")}
          {RightScreenContent("Unity Game Engine")}
          {RightScreenContent("Unreal Engine (Blueprint)")}

          <br />

          {RightScreenContent("Perforce P4V Client")}
          {RightScreenContent("GIT/SVN")}

          <br />

          {RightScreenContent("Visual Studios (Code/2019)")}
          {RightScreenContent("Laravel Framework")}
          {RightScreenContent("React Native")}
          {RightScreenContent("NPM (Windows) / Homebrew (Mac)")}

          <br />

          {RightScreenContent("C#")}
          {RightScreenContent("C++")}
          {RightScreenContent("PHP")}
          {RightScreenContent("JavaScript")}
          {RightScreenContent("Java")}
          {RightScreenContent("MySQL")}
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
          {RightScreenHeader("Hobbies")}

          {RightScreenContent("Video Games")}
          {RightScreenContent("NERF Sports")}
          {RightScreenContent("Tabletop Games")}
          {RightScreenContent("Reading about Psychology")}
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
          {RightScreenHeader("Languages")}

          {RightScreenContent("English")}
          {RightScreenContent("Malay")}
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
