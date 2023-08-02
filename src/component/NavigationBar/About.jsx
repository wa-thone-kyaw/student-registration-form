import { Navigationbar } from "./NavigationBar";

//import civil from './public/civil.jpg';
export const About = () => {
  return (
    <div>
      <Navigationbar />
      <h1>Welcome to Technological University Meiktila!</h1>
      <div class="wrapper">
        <p>
          {" "}
          Founded in 2007, the Technological University, Meikhtila is a
          non-profit public higher education institution located in the small
          city of Meiktila (population range of 50,000-249,999 inhabitants),
          Mandalay. Officially recognized by the Ministry of Education (Science
          and Technology) of Myanmar, Technological University, Meikhtila (TU
          Meikhtila) is a coeducational Burmese higher education institution.
          Technological University, Meikhtila (TU Meikhtila) offers courses and
          programs leading to officially recognized higher education degrees
          such as bachelor's degrees in several areas of study. See the uniRank
          degree levels and areas of study table below for further details. TU
          Meikhtila also provides several academic and non-academic facilities
          and services to students including a library, as well as
          administrative services.Our Universtiy have five majors: Civil
          Engineering, Electrical Enegineering, Electrical Power
          Enegineering,Mechanical Engineering and Informateion Technology.
        </p>
      </div>

      <div class="all">
        <div>
          <h3>Civil Engineering</h3>
          <img src="./civil.jpg" alt="Civil" />

          <p>
            {" "}
            Civil engineers design, construct, manage and maintain the
            infrastructure of modern society. Roads, railways, tunnels,
            buildings, bridges, airports, mines, dams, ports and harbours, water
            supply and sewerage systems and flood mitigation works are all
            shaped by civil engineers.Civil engineering is based on Maths,
            Mechanics and Physics but it’s also about creative problem-solving.
            While normally associated with the world’s largest buildings, civil
            engineers must also effectively adapt the infrastructure to complex
            challenges such as climate change or natural disasters. effectively
            adapt the infrastructure to complex challenges such as climate
            change or natural disasters. effectively adapt the infrastructure to
            complex challenges such as climate change or natural disasters.
          </p>
        </div>
        <div>
          <h3>Electronic Engineering</h3>
          <img src="./ec.jpg" alt="EC" />

          <p>
            {" "}
            Electronic engineers use components such as batteries, capacitors,
            conductors, coils, diodes, inductors, magnets, resistors, switches
            and transistors in their designs.Electrical engineers increasingly
            use computer aided design (CAD) systems to design schematics and
            circuit layouts. Computer simulations are also used to run virtual
            tests on how devices and systems will function and computer
            technologies are also used to model circuits, processers or entire
            grids, improve drafting times, print circuit board layouts and
            device blueprints, as well as allowing designs to be modified and
            rapid prototyping to take place.
          </p>
        </div>
        <div>
          <h3>Electrical Power Engineering</h3>
          <img src="./ep.jpeg" alt="EP" />
          <p>
            {" "}
            An electrical power engineer is responsible for power system
            management. As an electrical power engineer, your job is to ensure
            the efficient functionality of the electrical power grid. Your
            duties include designing components for the grid, such as
            generators, transformers, circuit breakers, and transmission lines.
            You ensure that power stations distribute power to customers
            efficiently, and manage different types of power systems, such as
            alternating and direct current. A career as an electrical power
            engineer requires formal qualifications and education: at least a
            bachelor’s degree in electrical engineering, state licensure, and
            experience with power systems.
          </p>
        </div>
        <div>
          <h3>Mechanical Engineering</h3>
          <img src="./mech.jpg" alt="MP" />
          <p>
            {" "}
            Mechanical engineering is the application of the principles and
            problem-solving techniques of engineering from design to
            manufacturing to the marketplace for any object. Mechanical
            engineers analyze their work using the principles of motion, energy,
            and force—ensuring that designs function safely, efficiently, and
            reliably, all at a competitive cost.Mechanical engineers make a
            difference. That's because mechanical engineering careers center on
            creating technologies to meet human needs. Virtually every product
            or service in modern life has probably been touched in some way by a
            mechanical engineer to help humankind.
          </p>
        </div>

        <div>
          <h3>Information Technology</h3>
          <img src="./it.png" alt="IT" />
          <p>
            {" "}
            Information technology (IT) is the use of computer systems or
            devices to access information. Information technology is responsible
            for such a large portion of our workforce, business operations and
            personal access to information that it comprises much of our daily
            activities. Whether you are storing, retrieving, accessing or
            manipulating information, IT greatly impacts our everyday
            lives.Information technology is used by everyone from enterprise
            companies all the way down to one-person businesses and local
            operations. Global companies use it to manage data and innovate
            their processes. Even flea market sellers use smartphone credit card
            readers to collect payments and street performers give out a Venmo
            name to gather donations. If you use a spreadsheet to catalogue
            which Christmas presents you bought, you’re using information
            technology.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
