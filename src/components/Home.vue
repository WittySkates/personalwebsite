<template>
  <div>
    <!-- <b-navbar class="nav-bar" type="dark">
      <b-navbar-brand href="/wittyskates.github.io/home" style="margin-left:10px;margin-bottom:2px" > &lt; CD /&gt; </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="#">Github</b-nav-item>
        <b-nav-item href="/wittyskates.github.io/">About</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ms-auto">
        <b-nav-item href="#" style="padding-right:10px">Resume</b-nav-item>
      </b-navbar-nav>
    </b-navbar> -->
    <div id="stars">
      <div id="solarSketch">	    
        <div id="Planet4-orbit">
          <div id="Planet4" @click="scrollInto('NASA')" style="cursor: pointer;"></div>
          <p id="Planet4-label" @click="scrollInto('NASA')" style="cursor: pointer;">NASA</p>
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
          <div id="Planet3" @click="scrollInto('UF')" style="cursor: pointer;"></div>
          <p id="Planet3-label" @click="scrollInto('RJF')" style="cursor: pointer;">RJF</p>
        </div>

        <div id="Planet2-orbit">
          <div id="Planet2"  @click="scrollInto('Scanned')" style="cursor: pointer;"></div>
          <p id="Planet2-label"  @click="scrollInto('Scanned')" style="cursor: pointer;">Scanned</p>
        </div>

        <div id="Planet1-orbit">
          <div id="Planet1" @click="scrollInto('UF')" style="cursor: pointer;"></div>
          <p id="Planet1-label"  @click="scrollInto('UF')" style="cursor: pointer;">UF</p>
        </div>

        <div id="sol" @click="scrollInto('About')" style="cursor: pointer;"><p id="sol-label"></p></div>
      </div>
    </div>

    <!-- <div class="breaker"></div> -->
    
    <div class="content">
      <div class="text" id="About">
        <h1>About Me</h1>
        <p>
          I am a senior at the University of Florida currently pursuing a degree in Computer Engineering with a focus on software. 
          I enjoy learning new things and expanding my horizons in the engineering field. I have found a passion for software development 
          and machine learning and want to apply my skills to find new and efficient solutions to current problems.
          I want to be a part of something bigger than myself and positively affect and inspire others. Creating has and always will 
          be my passion, the feeling of building or designing something new is what drives me to move forward.
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
        </div>
      </div>

      <div class="center">
        <h1>2021</h1>
      </div>
      <div class="vl"></div>

      <div class="text" id="UF">
        <h1>University of Florida</h1>
          <h4>Overview</h4>
        <b-row>
          <b-col cols="7">
            <p>
              The need to understand the surface and near subsurface of the moon is crucial for the advancements of future missions.
              Our mission was to develop a payload that can map surface water at a scale of a few kilometers for most of the Permanently Shadowed Regions (PSRs)
              at the lunar South Polar Region, and for at least one location in a PSR, the abundance of water ice in the top 1 meter of the regolith needs to be 
              determined at a ~ +-1% accuracy, or better, at a spatial sampling of ~ 100m.
            </p>
          </b-col>
          <b-col cols="5">
            <div class="flexy">
              <div class="tech">Data Science</div>
              <div class="tech">Algorithms</div>
              <div class="tech">Digital Logic</div>
              <div class="tech">Digital Design</div>
              <div class="tech">Databases</div>
              <div class="tech">Machine Learning</div>
              <div class="tech">Software Engineering</div>
            </div>
          </b-col>
        </b-row>
        <br>
        <h4>Raytheon (IPPD)</h4>
        <b-row>
          <b-col cols="7">
            <p>
              The need to understand the surface and near subsurface of the moon is crucial for the advancements of future missions.
              Our mission was to develop a payload that can map surface water at a scale of a few kilometers for most of the Permanently Shadowed Regions (PSRs)
              at the lunar South Polar Region, and for at least one location in a PSR, the abundance of water ice in the top 1 meter of the regolith needs to be 
              determined at a ~ +-1% accuracy, or better, at a spatial sampling of ~ 100m.
            </p>
          </b-col>
          <b-col cols="5">
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

      <!-- <div class="vl"><h1 id="date">2021</h1></div> -->

      <div class="text" id="NASA">
        <h1>NASA</h1>
        <h4>Mission Concept Academy</h4>
        <b-row>
          <b-col cols="7">
            <p>
              The need to understand the surface and near subsurface of the moon is crucial for the advancements of future missions.
              Our mission was to develop a payload that can map surface water at a scale of a few kilometers for most of the Permanently Shadowed Regions (PSRs)
              at the lunar South Polar Region, and for at least one location in a PSR, the abundance of water ice in the top 1 meter of the regolith needs to be 
              determined at a ~ +-1% accuracy, or better, at a spatial sampling of ~ 100m.
            </p>
          </b-col>
          <b-col cols="5">
            <div class="flexy">
              <div class="tech">CAD</div>
              <div class="tech">Python</div>
              <div class="tech">Siemens nx</div>
              <div class="tech">Arduino</div>
            </div>
          </b-col>
        </b-row>
      </div>

      <!-- <div class="vl"><h1 id="date">2021</h1></div> -->

      <div class="text" id="RJF">
        <h1>Raymond James</h1>
        <h4>Internship Summer 2021</h4>
        <b-row>
          <b-col cols="7">
            <p>
              • Utilized the ServiceNow platform to create reporting analytics using active data in the system.
              <br>
              • Analyzed numerous data sources spanning multiple sectors of Raymond James to discover issues or new relations.
              <br>
              • Worked with the ServiceNow platform which spans most of the Raymond James IT system.
            </p>
          </b-col>
          <b-col cols="5">
            <div class="flexy">
              <div class="tech">ServiceNow</div>
              <div class="tech">Python</div>
              <div class="tech">SQL</div>
              <div class="tech">scikit-learn</div>
            </div>
          </b-col>
        </b-row>

      <div class="center">
        <h1 style="margin-top:50px">2020</h1>
      </div>
      <div class="vl"></div>

        <h4>Internship Summer 2020</h4>
        <b-row>
          <b-col cols="7">
            <p>
              • Employed the ServiceNow platform to test and implement a Natural Language Understanding chatbot which was to assist internal IT issues that arose.
              <br>

              • Worked with the ServiceNow platform which spans most of the Raymond James IT system.
              <br>
              • Utilized JS to access and manage data and documents that were piped into the chatbot.
            </p>
          </b-col>
          <b-col cols="5">
            <div class="flexy">
              <div class="tech">ServiceNow</div>
              <div class="tech">NLP</div>
              <div class="tech">NLU</div>
              <div class="tech">JavaScript</div>
            </div>
          </b-col>
        </b-row>
      </div>

      <div class="center">
        <h1>2018</h1>
      </div>
      <div class="vl"></div>

      <div class="text" id="Scanned">
        <h1>Scanned</h1>
        <b-row>
          <b-col cols="7">
          <p>
            A mobile app attendance tracking system with which won 1st place and $10,000 in the Next Generation Tech Competition in Pinellas County.
            <br>
            • Head of UI and UX development.
            <br>
            • Project won first place and $10,000 in a technology startup in Pinellas County.
            <br>
            • Project was accepted into the Gator Hatchery where we continued to develop our idea and business plan.
          </p>
          </b-col>
          <b-col cols="5">
            <div class="flexy">
              <div class="tech">JavaScript</div>
              <div class="tech">React Native</div>
              <div class="tech">Firebase</div>
              <div class="tech">React</div>
            </div>
          </b-col>
        </b-row>
      </div>

      <div class="vl"></div>

      <div class="social-links">
        <a href="https://www.facebook.com/WittySkates"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.linkedin.com/in/dupuisconnor/"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/WittySkates"><i class="fab fa-github"></i></a>
        <a href="https://www.instagram.com/connor__dupuis/"><i class="fab fa-instagram"></i></a>
        <a href="https://twitter.com/dupuis_connor"><i class="fab fa-twitter"></i></a>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {

    scrollInto(id){
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        // inline: 'end',
      });
      console.log(id);
    }
  },

  mounted(){
    let canvas = document.getElementById('stars');

    console.log(document.getElementById('stars'));

    function createStar() {
      let star = document.createElement('span');
      star.className = 'star';
      
      let width = canvas.scrollWidth,
          height = canvas.scrollHeight;
      
      star.style.left = Math.random() * width + 'px';
      star.style.top = Math.random() * height + 'px';
      
      star.style.width = star.style.height = 2 + Math.random() * 6 + 'px';
      
      let time = 5 + Math.random() * 10;
      
      star.style.animation = 'fade ' + time + 's'
      
      canvas.appendChild(star);
      
      setTimeout(function () {
        canvas.removeChild(star);
      }, 1000 * time);
      return star;
}

for (var i = 0; i < 50; i++) createStar();

setInterval(function () {
  for (var i = 0; i < 5; i++) createStar();
}, 250);
  }
  
}

</script>

<style>

/* html, body {
  overflow-x: hidden;
} */

a{
  text-decoration: none;
}

h1{
  /* text-align: center; */
}

p{
  padding-bottom: 0px;
  margin-bottom: 0px;
}

/* Starry Night */

@keyframes fade {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

#stars {
  background: #232741;
  width: 100%;
  height: 100vh;
  min-height: 900px;
}

.star {
  animation: fade 10s;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);;
  position: absolute;
}

/* h1 {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 0; right: 0;
  transform: translateY(-50%);
  color: white;
  text-align: center;
  font-size: 100px;
  font-family: 'Montserrat', sans-serif;
} */

.breaker{
  background-color: #232741;
  padding-top: 500px;
  padding-bottom: 500px;
}

.content{
  height: 100%;
  position: relative;
  color: white;
  background-color: #343a40;
  padding-bottom: 10px ;
  padding-top: 80px;
}

.text{
  margin-right: 20%;
  margin-left: 20%;
  text-align: justify;
  text-justify: inter-word;
  margin-bottom: 50px;
}

.vl {
  border-left: 1px solid white;
  height: 400px;
  position: relative;
  margin-left: 50%;
  margin-top: 90px;
  margin-bottom: 90px;
}

.center{
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 16px;
  right: 0px;
  text-align: center;
  margin-top: 200px;
  letter-spacing: 20px;
}

#contact{
  text-align: left;
  margin-left: -125px;
  padding-top: 160px;
  letter-spacing: 15px;
}

.flexy{
  display: flex;
  -webkit-flex-direction: row-reverse; 
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 10px;
  justify-content:space-between;

}

/* .flexy > div{
  text-align:center;s
  margin:5px; 
} */

.tech{
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.20);
  background-color: #343a40;

}

.about{
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

.nav-bar{
  height: 50px;
  background-color: #343a40;
}

/* Socials */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.social-links {
  display: flex;
  padding-bottom: 50px;
  /* padding-top: 50px; */
  justify-content: center;
}

.social-links a {
  width: 80px;
  height: 80px;
  text-align: center;
  text-decoration: none;
  color: white;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.10);
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
  content: '';
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
  background-color: #232741 ;
}


/*Sol Group*/

#sol {
  position: absolute;
  top: 59%;
  left: 50%;

  background: white;
  height: 150px;
  width: 150px;
  margin-top: -75px; 
  margin-left: -75px;

  border-color: white;
  border-width: 10px;
  border-style: solid;
  border-radius: 50%;   
}

#sol-label {
  position: absolute;
  top:  0;
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
  top:  0;
  left: 50%;
  width: 50px;
  height: 50px;
  margin-left: 97px;
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

  width: 250px;
  height: 250px;
  margin-top: -125px;
  margin-left: -125px;

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
  top:  0;
  left: 50%;
  /* width: 15px;
  height: 15px; */
  margin-left: 113px;
  margin-top: 113px;
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
  top:  0;
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
  top:  0;
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
  top:  0;
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

  border-width:3px;
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
  top:  0;
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
  top:  0;
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
  top:  0;
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
  top:  0;
  left: 50%;
  width: 15px;
  height: 15px;
  margin-left: -54px;
  margin-top: -2px;
  color: white;
  font-size: 11px;

  -webkit-animation: spin-right 5.12820512820512820512820s linear infinite;
  -moz-animation: spin-right 5.12820512820512820512820s linear infinite;
  -ms-animation: spin-right 5.12820512820512820512820s linear infinite;
  -o-animation: spin-right 5.12820512820512820512820s linear infinite;
  animation: spin-right 5.12820512820512820512820s linear infinite;
}

#Planet3-2-label {
  position: absolute;
  top:  0;
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
  top:  0;
  left: 50%;
  width: 60px;
  height: 60px;
  margin-left: -310px;
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
  
  width: 800px;
  height: 800px;
  margin-top: -400px;
  margin-left: -400px;
  
  border-width:4px;
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
  top:  0;
  left: 50%;
  /* width: 15px;
  height: 15px; */
  margin-left: -302px;
  margin-top: 104px;
  color: #232741;
  font-size: 15px;
  font-weight: bold;

  -webkit-animation: spin-left 200s linear infinite;
  -moz-animation: spin-left 200s linear infinite;
  -ms-animation: spin-left 200s linear infinite;
  -o-animation: spin-left 200s linear infinite;
  animation: spin-left 200s linear infinite;
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
