<template>
  <div>
    <div class="animate__animated animate__backInDown" id="fader">
      <span>Navigate using the planets!</span>
    </div>

    <div id="stars">
      <b-navbar toggleable="md" class="nav-bar" type="dark">
        <b-navbar-brand
          @click="scrollInto('About')"
          style="margin-left:10px;margin-bottom:2px;cursor:pointer"
        >
          &lt; CD /&gt;
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- <b-navbar-nav>
          <b-nav-item @click="scrollInto('NASA')">Experience</b-nav-item>
          <b-nav-item @click="scrollInto('Scanned')">Projects</b-nav-item>
          <b-nav-item @click="scrollInto('RJF')">Research</b-nav-item>
          <b-nav-item @click="scrollInto('Raytheon')">Contact</b-nav-item>
        </b-navbar-nav> -->
          <b-navbar-nav style="font-size: 17px;" class="ms-auto">
            <b-nav-item href="./Resume.pdf" target="blank" style="padding-right:15px"
              >Resume</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div id="solarSketch">
        <div id="Planet4-orbit">
          <div id="Planet4" @click="scrollInto('tabs', 4)" style="cursor: pointer;"></div>
          <p id="Planet4-label" @click="scrollInto('tabs', 4)" style="cursor: pointer;">
            Contact
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
          <div id="Planet3" @click="scrollInto('tabs', 3)" style="cursor: pointer;"></div>
          <p id="Planet3-label" @click="scrollInto('tabs', 3)" style="cursor: pointer;">
            Research
          </p>
        </div>

        <div id="Planet2-orbit">
          <div id="Planet2" @click="scrollInto('tabs', 2)" style="cursor: pointer;"></div>
          <p id="Planet2-label" @click="scrollInto('tabs', 2)" style="cursor: pointer;">
            Projects
          </p>
        </div>

        <div id="Planet1-orbit">
          <div id="Planet1" @click="scrollInto('tabs', 1)" style="cursor: pointer;"></div>
          <p id="Planet1-label" @click="scrollInto('tabs', 1)" style="cursor: pointer;">
            Experience
          </p>
        </div>

        <img
          id="sol"
          src="../assets/me.jpeg"
          alt="Avatar"
          @click="scrollInto('About')"
          style="cursor: pointer;"
        />
      </div>
    </div>
    <div class="background-wrapper">
      <div class="content-wrapper">
        <div class="about-wrapper">
          <div id="About">
            <h1>About Me</h1>
            <p class="desc">
              I am a recent Computer Engineering graduate from the University of Florida with a
              focus on software. I enjoy learning new things and expanding my horizons in the
              engineering field. I have found a passion for software development and machine
              learning and want to apply my skills to find new and efficient solutions to current
              problems. I want to be a part of something bigger than myself and positively affect
              and inspire others. Creating has and always will be my passion, the feeling of
              building or designing something new is what drives me to move forward.
            </p>
            <div class="about tech">
              <div>C++</div>
              <div>C</div>
              <!-- <div>Java</div> -->
              <div>Vue</div>
              <div>React</div>
              <div>JavaScript</div>
              <div>Python</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>VHDL</div>
              <!-- <div>Flutter</div> -->
              <div>SQL</div>
            </div>
          </div>
        </div>
        <div class="tabs flexy" id="tabs">
          <a @click="activetab = 1" v-bind:class="[activetab === 1 ? 'active' : '']" id="Experience"
            >Experience</a
          >
          <a @click="activetab = 2" v-bind:class="[activetab === 2 ? 'active' : '']" id="Projects"
            >Projects</a
          >
          <a @click="activetab = 3" v-bind:class="[activetab === 3 ? 'active' : '']" id="Research"
            >Research</a
          >
          <a @click="activetab = 4" v-bind:class="[activetab === 4 ? 'active' : '']" id="Contact"
            >Contact</a
          >
        </div>
        <div class="tab-wrapper">
          <div class="tabs-content">
            <div v-if="activetab == 1"><Experience /></div>
            <div v-if="activetab == 2"><Projects /></div>
            <div v-if="activetab == 3"><Research /></div>
            <div v-if="activetab == 4"><Contact /></div>
          </div>

          <!-- <div class="vl desktop"></div> -->
          <div class="social-links desktop">
            <a href="https://www.facebook.com/WittySkates"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/in/dupuisconnor/"
              ><i class="fab fa-linkedin-in"></i
            ></a>
            <a href="https://github.com/WittySkates"><i class="fab fa-github"></i></a>
            <a href="https://www.instagram.com/connor__dupuis/"><i class="fab fa-instagram"></i></a>
            <a href="https://twitter.com/dupuis_connor"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Experience from "./Experience.vue";
import Projects from "./Projects.vue";
import Research from "./Research.vue";
import Contact from "./Contact.vue";

export default {
  name: "Home",
  data: function() {
    return {
      activetab: 1
    };
  },
  components: {
    Experience,
    Projects,
    Research,
    Contact
  },
  methods: {
    scrollInto(id, tab) {
      if (id != "About") {
        this.activetab = tab;
      }
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  },

  mounted() {
    setTimeout(function() {
      const element = document.getElementById("fader");
      element.classList.add("animate__fadeOut");
    }, 3000);
    setTimeout(function() {
      document.getElementById("fader").setAttribute("style", "visibility: hidden; z-index: -1");
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
  }
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
  height: 100vh;
  min-height: 875px;
}

.star {
  animation: fade 10s;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
}

.text {
  text-align: justify;
  text-justify: inter-word;
  margin-bottom: 70px;
}
.text > h4 {
  margin-right: 35%;
}

.background-wrapper {
  background-color: #232741;
}

.content-wrapper {
  height: 100%;
  position: relative;
  color: rgb(240, 240, 240);
  /* background-color: #343a40; */
  padding-bottom: 80px;
  /* padding-left: 25px;
  padding-right: 25px; */
  margin-right: 12%;
  margin-left: 12%;
  border-radius: 10px;
}

.about-wrapper {
  height: 100%;
  position: relative;
  color: rgb(240, 240, 240);
  background-color: #343a40;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 50px;
  padding-top: 50px;
  margin-bottom: 15px;
  border-radius: 10px;
  text-align: justify;
  text-justify: inter-word;
}

/* .tabs {
  margin-top: 15px;
} */

.tab-wrapper {
  height: 100%;
  position: relative;
  color: rgb(240, 240, 240);
  background-color: #343a40;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
  padding-bottom: 10px;
  border-radius: 0 0 10px 10px;
}

/* tabs css*/

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  /* background-color: #851a1a; */
  border-radius: 10px 10px 0 0;
  font-weight: bold;
  color: rgb(240, 240, 240);
  font-size: 18px;
}

/* Change background color of tabs on hover */
.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

/* Styling for active tab */
.tabs a.active {
  background-color: #343a40;
  color: rgb(240, 240, 240);
  cursor: default;
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

.tech > div {
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
  background-color: transparent;
  position: relative;
}

/* Socials */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

.social-links {
  display: flex;
  padding-top: 10px;
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
  top: 45vh;
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
  height: 160px;
  width: 160px;
  margin-top: -80px;
  margin-left: -80px;

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
  width: 80px;
  height: 80px;
  margin-left: 92px;
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

  width: 276px;
  height: 276px;
  margin-top: -138px;
  margin-left: -138px;

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
  margin-left: 97px;
  margin-top: 129px;
  color: #232741;
  font-size: 14px;
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
  width: 60px;
  height: 60px;
  margin-left: -100px;
  margin-top: 372px;
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
  margin-left: -99px;
  margin-top: 391px;
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
  width: 70px;
  height: 70px;
  margin-left: -35px;
  margin-top: -37px;
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
  width: 90px;
  height: 90px;
  margin-left: -45px;
  margin-top: -47px;

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
  margin-left: -30px;
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
  margin-left: -328px;
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
  #About,
  #RJF {
    scroll-margin-top: 65px;
  }
}
.tabs {
  scroll-margin-top: 15px;
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

  #About {
    scroll-margin-top: 280px;
  }
  #Scanned-mobile {
    margin-bottom: 150px;
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
