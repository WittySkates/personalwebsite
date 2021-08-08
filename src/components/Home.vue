<template>
  <div>
    <div class="animate__animated animate__backInDown" id="fader">
      <span>Navigate using the planets!</span>
    </div>

    <b-navbar toggleable="md" class="nav-bar" type="dark" sticky>
      <b-navbar-brand
        @click="scrollInto('About')"
        style="margin-left:10px;margin-bottom:2px;cursor:pointer"
      >
        &lt; CD /&gt;
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="scrollInto('NASA')">NASA</b-nav-item>
          <b-nav-item @click="scrollInto('Scanned')">Scanned</b-nav-item>
          <b-nav-item @click="scrollInto('RJF')">RJF</b-nav-item>
          <b-nav-item @click="scrollInto('Raytheon')">Raytheon</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav style="font-size: 17px;" class="ms-auto">
          <b-nav-item
            href="./Resume.pdf"
            target="blank"
            style="padding-right:15px"
            >Resume</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div id="stars">
      <div id="solarSketch">
        <div id="Planet4-orbit">
          <div
            id="Planet4"
            @click="scrollInto('Raytheon')"
            style="cursor: pointer;"
          ></div>
          <p
            id="Planet4-label"
            @click="scrollInto('Raytheon')"
            style="cursor: pointer;"
          >
            Raytheon
          </p>
        </div>

        <div id="Planet3-orbit">
          <div id="Planet3-2-orbit">
            <div id="Planet3-2"></div>
            <p id="Planet3-2-label"></p>
          </div>
          <div id="Planet3-1-orbit">
            <div id="Planet3-1"></div>
            <p id="Planet3-1-label"></p>
          </div>
          <div
            id="Planet3"
            @click="scrollInto('RJF')"
            style="cursor: pointer;"
          ></div>
          <p
            id="Planet3-label"
            @click="scrollInto('RJF')"
            style="cursor: pointer;"
          >
            RJF
          </p>
        </div>

        <div id="Planet2-orbit">
          <div
            id="Planet2"
            @click="scrollInto('Scanned')"
            style="cursor: pointer;"
          ></div>
          <p
            id="Planet2-label"
            @click="scrollInto('Scanned')"
            style="cursor: pointer;"
          >
            Scanned
          </p>
        </div>

        <div id="Planet1-orbit">
          <div
            id="Planet1"
            @click="scrollInto('NASA')"
            style="cursor: pointer;"
          ></div>
          <p
            id="Planet1-label"
            @click="scrollInto('NASA')"
            style="cursor: pointer;"
          >
            NASA
          </p>
        </div>

        <img
          id="sol"
          src="../assets/me.png"
          alt="Avatar"
          @click="scrollInto('About')"
          style="cursor: pointer;"
        />
      </div>
    </div>

    <div class="content">
      <div class="text" id="About">
        <h1>About Me</h1>
        <p class="desc">
          I am a senior at the University of Florida currently pursuing a degree
          in Computer Engineering with a focus on software. I enjoy learning new
          things and expanding my horizons in the engineering field. I have
          found a passion for software development and machine learning and want
          to apply my skills to find new and efficient solutions to current
          problems. I want to be a part of something bigger than myself and
          positively affect and inspire others. Creating has and always will be
          my passion, the feeling of building or designing something new is what
          drives me to move forward.
        </p>
        <div class="about">
          <div class="tech">C++</div>
          <div class="tech">C</div>
          <div class="tech">Java</div>
          <div class="tech">Vue</div>
          <div class="tech">React</div>
          <div class="tech">JavaScript</div>
          <div class="tech">Python</div>
          <div class="tech">HTML</div>
          <div class="tech">CSS</div>
          <div class="tech">VHDL</div>
          <div class="tech">Flutter</div>
          <div class="tech">SQL</div>
        </div>
      </div>

      <div class="center">
        <h1>2021</h1>
      </div>
      <div class="vl"></div>

      <!-- Desktop Rendering -->
      <div class="text desktop" id="Raytheon">
        <h1>Raytheon</h1>
        <h4>Integrated Product and Process Design</h4>
        <b-row>
          <b-col cols="8">
            <p class="desc">
              This project was sponsored by Raytheon Intelligence & Space. The
              goal was to replace the existing end of life GUI that relied on
              Adobe Flash, which was deprecated in December 2020 by developing a
              new front-end using a well-supported framework. The goal was to
              retain the functionality of the legacy GUI and improve on the
              design. The most important issue in the project was providing the
              functionality requested by the client in an intuitive and
              easy-to-use display. The team achieved this by developing the
              design in coordination with the liaison engineers and by
              incorporating extensive user experience testing throughout the
              development of the project. The largest risks involved data
              security and privacy. The application must be secure, so the team
              implemented best practices for security and work with the liaison
              engineers to ensure the application meet the security needs.
            </p>
          </b-col>
          <b-col cols="4">
            <div class="flexy">
              <div class="tech">Node</div>
              <div class="tech">PostgreSQL</div>
              <div class="tech">CSS</div>
              <div class="tech">HTML</div>
              <div class="tech">Vue</div>
              <div class="tech">JavaScript</div>
            </div>
          </b-col>
        </b-row>
      </div>

      <div class="text desktop" id="NASA">
        <h1>NASA</h1>
        <h4>Mission Concept Academy</h4>
        <b-row>
          <b-col cols="8">
            <p class="desc">
              The need to understand the surface and near subsurface of the moon
              is crucial for the advancements of future missions. Our mission
              was to develop a payload that can map surface water at a scale of
              a few kilometers for most of the Permanently Shadowed Regions
              (PSRs) at the lunar South Polar Region, and for at least one
              location in a PSR, the abundance of water ice in the top 1 meter
              of the regolith needs to be determined at a ~ +-1% accuracy, or
              better, at a spatial sampling of ~ 100m.
            </p>
          </b-col>
          <b-col cols="4">
            <div class="flexy">
              <div class="tech">CAD</div>
              <div class="tech">Python</div>
              <div class="tech">Siemens nx</div>
              <div class="tech">Arduino</div>
            </div>
          </b-col>
        </b-row>
      </div>

      <div class="text desktop" id="RJF">
        <h1>Raymond James</h1>
        <h4>Internship Summer 2021</h4>
        <b-row>
          <b-col cols="8">
            <p class="desc">
              My second summer internship with Raymond James. This timespan
              comprised of creating reporting analytics using active data,
              analyzing numerous data sources spanning multiple sectors of
              Raymond James, and utilizing the ServiceNow platform to develop
              tools for easy data access.
            </p>
          </b-col>
          <b-col cols="4">
            <div class="flexy">
              <div class="tech">ServiceNow</div>
              <div class="tech">Python</div>
              <div class="tech">SQL</div>
              <div class="tech">Tableau</div>
              <div class="tech">Scikit-learn</div>
            </div>
          </b-col>
        </b-row>

        <div class="center">
          <h1 style="margin-top:70px">2020</h1>
        </div>
        <div class="vl"></div>

        <h4>Internship Summer 2020</h4>
        <b-row>
          <b-col cols="8">
            <p class="desc">
              I worked for Raymond James through their Intern Development
              Program where I was placed on the team of Service Delivery and
              Support. During my time I utilized the ServiceNow platform to test
              and begin implement a Natural Language Understanding chatbot which
              was to assist internal IT issues that arose. This chatbot was
              implemented to speed up the time of ticker turn around and user
              ease.
            </p>
          </b-col>
          <b-col cols="4">
            <div class="flexy">
              <div class="tech">ServiceNow</div>
              <div class="tech">NLP</div>
              <div class="tech">NLU</div>
              <div class="tech">JavaScript</div>
            </div>
          </b-col>
        </b-row>
      </div>

      <div class="center desktop">
        <h1>2018</h1>
      </div>
      <div class="vl desktop"></div>

      <div class="text desktop" id="Scanned">
        <h1>Scanned</h1>
        <h4>Co-Founder</h4>
        <b-row>
          <b-col cols="8">
            <p class="desc">
              I was a Co-Founder of this mobile app built to circumvent the
              inefficiencies of attendance tracking at meetings and events.
              Developed with React Native for both IOS and Android, we won
              $10,000 and first place in the Next Generation Tech startup
              competition and were later accepted into the Gator Hatchery at the
              University of Florida. The app had users and sales in numerous
              states and countries before stopping development.
            </p>
          </b-col>
          <b-col cols="4">
            <div class="flexy">
              <div class="tech">JavaScript</div>
              <div class="tech">React Native</div>
              <div class="tech">Firebase</div>
              <div class="tech">React</div>
            </div>
          </b-col>
        </b-row>
      </div>

      <!-- Mobile Rendering -->

      <div class="text mobile" id="Raytheon-mobile">
        <h1>Raytheon</h1>
        <h4>Integrated Product and Process Design</h4>
        <p class="desc">
          This project was sponsored by Raytheon Intelligence & Space. The goal
          was to replace the existing end of life GUI that relied on Adobe
          Flash, which was deprecated in December 2020 by developing a new
          front-end using a well-supported framework. The goal was to retain the
          functionality of the legacy GUI and improve on the design. The most
          important issue in the project was providing the functionality
          requested by the client in an intuitive and easy-to-use display. The
          team achieved this by developing the design in coordination with the
          liaison engineers and by incorporating extensive user experience
          testing throughout the development of the project. The largest risks
          involved data security and privacy. The application must be secure, so
          the team implemented best practices for security and work with the
          liaison engineers to ensure the application meet the security needs.
        </p>
        <div class="flexy-mobile">
          <div class="tech">Node</div>
          <div class="tech">PostgreSQL</div>
          <div class="tech">CSS</div>
          <div class="tech">HTML</div>
          <div class="tech">Vue</div>
          <div class="tech">JavaScript</div>
        </div>
      </div>

      <div class="text mobile" id="NASA-mobile">
        <h1>NASA</h1>
        <h4>Mission Concept Academy</h4>
        <p class="desc">
          The need to understand the surface and near subsurface of the moon is
          crucial for the advancements of future missions. Our mission was to
          develop a payload that can map surface water at a scale of a few
          kilometers for most of the Permanently Shadowed Regions (PSRs) at the
          lunar South Polar Region, and for at least one location in a PSR, the
          abundance of water ice in the top 1 meter of the regolith needs to be
          determined at a ~ +-1% accuracy, or better, at a spatial sampling of ~
          100m.
        </p>
        <div class="flexy-mobile">
          <div class="tech">CAD</div>
          <div class="tech">Python</div>
          <div class="tech">Siemens nx</div>
          <div class="tech">Arduino</div>
        </div>
      </div>

      <div class="text mobile" id="RJF-mobile">
        <h1>Raymond James</h1>
        <h4>Internship Summer 2021</h4>

        <p class="desc">
          My second summer internship with Raymond James. This timespan
          comprised of creating reporting analytics using active data, analyzing
          numerous data sources spanning multiple sectors of Raymond James, and
          utilizing the ServiceNow platform to develop tools for easy data
          access.
        </p>
        <div class="flexy-mobile">
          <div class="tech">ServiceNow</div>
          <div class="tech">Python</div>
          <div class="tech">SQL</div>
          <div class="tech">Tableau</div>
          <div class="tech">Scikit-learn</div>
        </div>

        <div class="center">
          <h1 style="margin-top:70px">2020</h1>
        </div>
        <div class="vl"></div>

        <h4>Internship Summer 2020</h4>

        <p class="desc">
          I worked for Raymond James through their Intern Development Program
          where I was placed on the team of Service Delivery and Support. During
          my time I utilized the ServiceNow platform to test and begin implement
          a Natural Language Understanding chatbot which was to assist internal
          IT issues that arose. This chatbot was implemented to speed up the
          time of ticker turn around and user ease.
        </p>

        <div class="flexy-mobile">
          <div class="tech">ServiceNow</div>
          <div class="tech">NLP</div>
          <div class="tech">NLU</div>
          <div class="tech">JavaScript</div>
        </div>
      </div>

      <div class="center mobile">
        <h1>2018</h1>
      </div>
      <div class="vl mobile"></div>

      <div class="text mobile" id="Scanned-mobile">
        <h1>Scanned</h1>
        <h4>Co-Founder</h4>

        <p class="desc">
          I was a Co-Founder of this mobile app built to circumvent the
          inefficiencies of attendance tracking at meetings and events.
          Developed with React Native for both IOS and Android, we won $10,000
          and first place in the Next Generation Tech startup competition and
          were later accepted into the Gator Hatchery at the University of
          Florida. The app had users and sales in numerous states and countries
          before stopping development.
        </p>

        <div class="flexy-mobile">
          <div class="tech">JavaScript</div>
          <div class="tech">React Native</div>
          <div class="tech">Firebase</div>
          <div class="tech">React</div>
        </div>
      </div>

      <div class="vl desktop"></div>

      <div class="social-links desktop">
        <a href="https://www.facebook.com/WittySkates"
          ><i class="fab fa-facebook-f"></i
        ></a>
        <a href="https://www.linkedin.com/in/dupuisconnor/"
          ><i class="fab fa-linkedin-in"></i
        ></a>
        <a href="https://github.com/WittySkates"
          ><i class="fab fa-github"></i
        ></a>
        <a href="https://www.instagram.com/connor__dupuis/"
          ><i class="fab fa-instagram"></i
        ></a>
        <a href="https://twitter.com/dupuis_connor"
          ><i class="fab fa-twitter"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    scrollInto(id) {
      if (window.innerWidth > 768 || id === "About") {
        document.getElementById(id).scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        // console.log(id);
      } else {
        document.getElementById(`${id}-mobile`).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // console.log(`${id}-mobile`);
      }
    },
  },

  mounted() {
    setTimeout(function() {
      const element = document.getElementById("fader");
      element.classList.add("animate__fadeOut");
    }, 3000);
    setTimeout(function() {
      document
        .getElementById("fader")
        .setAttribute("style", "visibility: hidden; z-index: -1");
    }, 6000);
    let canvas = document.getElementById("stars");

    // console.log(document.getElementById("stars"));

    function createStar() {
      let star = document.createElement("span");
      star.className = "star";

      let width = canvas.scrollWidth,
        height = canvas.scrollHeight;

      star.style.left = Math.random() * width + "px";
      star.style.top = Math.random() * height + "px";

      star.style.width = star.style.height = 2 + Math.random() * 6 + "px";

      let time = 5 + Math.random() * 10;

      star.style.animation = "fade " + time + "s";

      canvas.appendChild(star);

      setTimeout(function() {
        canvas.removeChild(star);
      }, 1000 * time);
      return star;
    }

    for (var i = 0; i < 50; i++) createStar();

    setInterval(function() {
      for (var i = 0; i < 5; i++) createStar();
    }, 250);
  },
};
</script>

<style>
#fader {
  z-index: 5;
  position: absolute;
  color: white;
  top: 10%;
  height: 10vh;
  background-color: #343a40ee;
  margin-left: 40%;
  margin-right: 40%;
  width: 20%;
  text-align: center;
  border-radius: 20px;
}

#fader span {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

a {
  text-decoration: none;
}
.desc {
  font-size: 18px;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.nav-item.nav-item.nav-item a {
  color: rgb(240, 240, 240);
}
#stars {
  background: #232741;
  width: 100%;
  height: 95vh;
  min-height: 875px;
}
.nav-flex {
  display: flex;
  gap: 20px;
  font-size: 17px;
}
.star {
  animation: fade 10s;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
}

.breaker {
  background-color: #232741;
  padding-top: 500px;
  padding-bottom: 500px;
}

.content {
  height: 100%;
  position: relative;
  color: rgb(240, 240, 240);
  background-color: #343a40;
  padding-bottom: 10px;
  padding-top: 80px;
}

.text {
  margin-right: 20%;
  margin-left: 20%;
  text-align: justify;
  text-justify: inter-word;
  margin-bottom: 70px;
}

.vl {
  border-left: 1px solid white;
  height: 350px;
  position: relative;
  margin-left: 50%;
  margin-top: 90px;
  margin-bottom: 90px;
}

.center {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 16px;
  right: 0px;
  text-align: center;
  margin-top: 150px;
  letter-spacing: 20px;
}

#contact {
  text-align: left;
  margin-left: -125px;
  padding-top: 160px;
  letter-spacing: 15px;
}

.flexy {
  display: flex;
  /* -webkit-flex-direction: row-reverse;
  flex-direction: row-reverse; */
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  /* justify-content:flex-start; */
}
.flexy-mobile {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

/* .flexy > div{
  text-align:center;s
  margin:5px;
} */

.tech {
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2);
  background-color: #343a40;
}

.about {
  display: flex;
  flex-wrap: wrap;
  /* padding-bottom: 20px; */
  padding-top: 30px;
  justify-content: center;
  gap: 10px;
}

/* .about > div{
  text-align:center;
  margin:5px;
} */

.nav-bar {
  z-index: 3;
  height: 5vh;
  min-height: 30px;
  background-color: #232741;
}

/* Socials */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

.social-links {
  display: flex;
  padding-bottom: 50px;
  justify-content: center;
}

.social-links a {
  height: 80px;
  width: 80px;
  text-align: center;
  text-decoration: none;
  color: white;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.1);
  margin: 0 30px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  transition: transform 0.5s;
}

.social-links a .fab {
  font-size: 30px;
  line-height: 80px;
  position: relative;
  z-index: 10;
  transition: color 0.5s;
}

.social-links a::after {
  content: "";
  width: 100%;
  height: 100%;
  top: -90px;
  left: 0;
  background: #232741;
  /* background: linear-gradient(-45deg, #ed1c94, #ffec17); */
  position: absolute;
  transition: 0.5s;
}

.social-links a:hover::after {
  top: 0;
}

.social-links a:hover .fab {
  color: #fff;
}

.social-links a:hover {
  transform: translateY(-10px);
}

/* Basic Layout Bigger Orbiter*/

#solarSketch {
  position: relative;
  top: 50%;
  /* margin-top: 450px; */
  left: 0%;
  background-color: #232741;
}

/*Sol Group*/

#sol {
  position: absolute;
  top: 59%;
  left: 50%;

  background: #232741;
  height: 180px;
  width: 180px;
  margin-top: -90px;
  margin-left: -90px;

  border-color: white;
  border-width: 10px;
  border-style: solid;
  border-radius: 50%;
  z-index: 0;
}

#sol-label {
  position: absolute;
  top: 0;
  left: 50%;
  width: 15px;
  height: 15px;
  margin-left: -60px;
  margin-top: -12px;
  color: white;
  font-size: 12px;
}

/* Planet 1 Group*/
#Planet1 {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50px;
  height: 50px;
  margin-left: 102px;
  margin-top: 100px;
  background: white;
  border-color: white;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
}

#Planet1-orbit {
  position: absolute;
  top: 50%;
  left: 50%;

  width: 260px;
  height: 260px;
  margin-top: -130px;
  margin-left: -130px;

  border-width: 1.8px;
  border-style: dashed;
  border-color: white;
  border-radius: 50%;

  -webkit-animation: spin-left 20s linear infinite;
  -moz-animation: spin-left 20s linear infinite;
  -ms-animation: spin-left 20s linear infinite;
  -o-animation: spin-left 20s linear infinite;
  animation: spin-left 20s linear infinite;
}

#Planet1-label {
  position: absolute;
  top: 0;
  left: 50%;
  /* width: 15px;
  height: 15px; */
  margin-left: 107px;
  margin-top: 114px;
  color: #232741;
  font-size: 15px;
  font-weight: bold;

  -webkit-animation: spin-right 20s linear infinite;
  -moz-animation: spin-right 20s linear infinite;
  -ms-animation: spin-right 20s linear infinite;
  -o-animation: spin-right 20s linear infinite;
  animation: spin-right 20s linear infinite;
}

/*Planet 2 Group*/

#Planet2 {
  position: absolute;
  top: 0;
  left: 50%;
  width: 80px;
  height: 80px;
  margin-left: -100px;
  margin-top: 365px;
  background: white;
  border-color: white;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
}

#Planet2-orbit {
  position: absolute;
  top: 50%;
  left: 50%;

  width: 420px;
  height: 420px;
  margin-top: -210px;
  margin-left: -210px;

  border-width: 2.2px;
  border-style: dashed;
  border-color: white;
  border-radius: 80%;

  -webkit-animation: spin-right 60s linear infinite;
  -moz-animation: spin-right 60s linear infinite;
  -ms-animation: spin-right 60s linear infinite;
  -o-animation: spin-right 60s linear infinite;
  animation: spin-right 60s linear infinite;
}

#Planet2-label {
  position: absolute;
  top: 0;
  left: 50%;
  /* width: 15px;
  height: 15px; */
  margin-left: -90px;
  margin-top: 394px;
  color: #232741;
  font-size: 15px;
  font-weight: bold;

  -webkit-animation: spin-left 60s linear infinite;
  -moz-animation: spin-left 60s linear infinite;
  -ms-animation: spin-left 60s linear infinite;
  -o-animation: spin-left 60s linear infinite;
  animation: spin-left 60s linear infinite;
}

/*Planet 3 Group*/

#Planet3 {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50px;
  height: 50px;
  margin-left: -25px;
  margin-top: -28px;
  background: white;
  border-color: white;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
}

#Planet3-1 {
  width: 8px;
  height: 8px;
  margin-left: 5px;
  margin-top: 10px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 64px white;
}

#Planet3-2 {
  width: 10px;
  height: 10px;
  margin-left: 8px;
  margin-top: 16px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 64px white;
}

#Planet3-orbit {
  position: absolute;
  top: 50%;
  left: 50%;

  width: 600px;
  height: 600px;
  margin-top: -300px;
  margin-left: -300px;

  border-width: 3px;
  border-style: dashed;
  border-color: white;
  border-radius: 50%;

  -webkit-animation: spin-right 120s linear infinite;
  -moz-animation: spin-right 120s linear infinite;
  -ms-animation: spin-right 120s linear infinite;
  -o-animation: spin-right 120s linear infinite;
  animation: spin-right 120s linear infinite;
}

#Planet3-1-orbit {
  position: absolute;
  top: 0;
  left: 50%;
  width: 80px;
  height: 80px;
  margin-left: -40px;
  margin-top: -42px;

  border: 1px dashed white;
  border-radius: 50%;

  -webkit-animation: spin-left 10s linear infinite;
  -moz-animation: spin-left 10s linear infinite;
  -ms-animation: spin-left 10s linear infinite;
  -o-animation: spin-left 10s linear infinite;
  animation: spin-left 10s linear infinite;
}

#Planet3-2-orbit {
  position: absolute;
  top: 0;
  left: 50%;
  width: 120px;
  height: 120px;
  margin-left: -60px;
  margin-top: -62px;

  border: 1px dashed white;
  border-radius: 50%;

  -webkit-animation: spin-right 20s linear infinite;
  -moz-animation: spin-right 20s linear infinite;
  -ms-animation: spin-right 20s linear infinite;
  -o-animation: spin-right 20s linear infinite;
  animation: spin-right 20s linear infinite;
}

#Planet3-label {
  position: absolute;
  top: 0;
  left: 50%;
  /* width: 15px;
  height: 15px; */
  margin-left: -12px;
  margin-top: -13px;
  color: #232741;
  font-size: 15px;
  font-weight: bold;

  -webkit-animation: spin-left 120s linear infinite;
  -moz-animation: spin-left 120s linear infinite;
  -ms-animation: spin-left 120s linear infinite;
  -o-animation: spin-left 120s linear infinite;
  animation: spin-left 120s linear infinite;
}

/*The Animation time for moon labels is calculated by using harmonic sums. See Readme.md*/

#Planet3-1-label {
  position: absolute;
  top: 0;
  left: 50%;
  width: 15px;
  height: 15px;
  margin-left: -54px;
  margin-top: -2px;
  color: white;
  font-size: 11px;

  -webkit-animation: spin-right 5.1282051282051282051282s linear infinite;
  -moz-animation: spin-right 5.1282051282051282051282s linear infinite;
  -ms-animation: spin-right 5.1282051282051282051282s linear infinite;
  -o-animation: spin-right 5.1282051282051282051282s linear infinite;
  animation: spin-right 5.1282051282051282051282s linear infinite;
}

#Planet3-2-label {
  position: absolute;
  top: 0;
  left: 50%;
  width: 15px;
  height: 15px;
  margin-left: -78px;
  margin-top: 2px;
  color: white;
  font-size: 11px;

  -webkit-animation: spin-left 18.1818181818181818s linear infinite;
  -moz-animation: spin-left 18.1818181818181818s linear infinite;
  -ms-animation: spin-left 18.1818181818181818s linear infinite;
  -o-animation: spin-left 18.1818181818181818s linear infinite;
  animation: spin-left 18.1818181818181818s linear infinite;
}

/*Planet 4 Group*/

#Planet4 {
  position: absolute;
  top: 0;
  left: 50%;
  width: 75px;
  height: 75px;
  margin-left: -323px;
  margin-top: 85px;
  background: white;
  border-color: white;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
}

#Planet4-orbit {
  position: absolute;
  top: 50%;
  left: 50%;

  width: 820px;
  height: 820px;
  margin-top: -410px;
  margin-left: -410px;

  border-width: 4px;
  border-style: dashed;
  border-color: white;
  border-radius: 50%;

  -webkit-animation: spin-right 200s linear infinite;
  -moz-animation: spin-right 200s linear infinite;
  -ms-animation: spin-right 200s linear infinite;
  -o-animation: spin-right 200s linear infinite;
  animation: spin-right 200s linear infinite;
}

#Planet4-label {
  position: absolute;
  top: 0;
  left: 50%;
  /* width: 15px;
  height: 15px; */
  margin-left: -319px;
  margin-top: 111px;
  color: #232741;
  font-size: 15px;
  font-weight: bold;

  -webkit-animation: spin-left 200s linear infinite;
  -moz-animation: spin-left 200s linear infinite;
  -ms-animation: spin-left 200s linear infinite;
  -o-animation: spin-left 200s linear infinite;
  animation: spin-left 200s linear infinite;
}

/* Desktop CSS */
@media only screen and (min-width: 768px) {
  .mobile {
    display: none;
  }
  .desktop {
    display: inherit;
  }
}

/* Mobile CSS */
@media only screen and (max-width: 768px) {
  #stars,
  #fader,
  .desktop {
    display: none;
  }

  .nav-bar {
    height: inherit;
  }

  .mobile {
    display: inherit;
  }

  #Raytheon-mobile,
  #NASA-mobile,
  #Scanned-mobile,
  #RJF-mobile {
    scroll-margin-top: 400px;
  }
}

/*Defining the rotational keyframe at-rules*/

@-webkit-keyframes spin-right {
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spin-right {
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes spin-left {
  100% {
    -webkit-transform: rotate(-360deg);
    -moz-transform: rotate(-360deg);
    -ms-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

@keyframes spin-left {
  100% {
    -webkit-transform: rotate(-360deg);
    -moz-transform: rotate(-360deg);
    -ms-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
</style>
