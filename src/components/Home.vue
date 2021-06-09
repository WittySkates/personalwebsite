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

    <div id="solarSketch">	
      <div id="sol"><p id="sol-label"></p></div>
      


      <div id="Planet2-orbit">
        <div id="Planet2"></div>
        <p id="Planet2-label">Scanned</p>
      </div>

      <div id="Planet3-orbit">
        <div id="Planet3-1-orbit">
          <div id="Planet3-1"></div>
          <!-- <div id="Planet3-1-1"></div> -->
          <p id="Planet3-1-label"></p>
        </div>
        <div id="Planet3-2-orbit">
          <div id="Planet3-2"></div>
          <p id="Planet3-2-label"></p>
        </div>
        <div id="Planet3"></div>
        <p id="Planet3-label">RJF</p>
      </div>

      <div id="Planet4-orbit">
        <div id="Planet4"></div>
        <p id="Planet4-label">NASA</p>
      </div>

      <div id="Planet1-orbit">
        <div id="Planet1" @click="scrollInto('UF')" style="cursor: pointer;"></div>
        <p id="Planet1-label"  @click="scrollInto('UF')" style="cursor: pointer;">UF</p>
      </div>

    </div>
    <div class="breaker"></div>
    <div class="content">
      <div id="UF">
        <p>TESTING</p>
        <p>TESTING</p>
        <p>TESTING</p>
        <p>TESTING</p>
        <p>TESTING</p>
        <p>TESTING</p>
        <p>TESTING</p>
        <p>TESTING</p>
        <p>TESTING</p>
        <p>TESTING</p>
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
        behavior: 'smooth'
      });
    }

  }
}

</script>

<style>
/* body {
  width: 100%;
  height: 100%;
  background-color: #232741;
} */
a{
  text-decoration: none;
}
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
}
.nav-bar{
  height: 50px;
  background-color: #343a40;
}

/* Basic Layout Bigger Orbiter*/

#solarSketch {
  position: relative;
  top: 450px;
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
  margin-left: -10px;
  margin-top: -25px;
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
  margin-left: 6px;
  margin-top: -11px;
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
  margin-left: -10px;
  margin-top: -32px;
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

  -webkit-animation: spin-right 100s linear infinite;
  -moz-animation: spin-right 100s linear infinite;
  -ms-animation: spin-right 100s linear infinite;
  -o-animation: spin-right 100s linear infinite;
  animation: spin-right 100s linear infinite;
}

#Planet2-label {
  position: absolute;
  top:  0;
  left: 50%;
  /* width: 15px;
  height: 15px; */
  margin-left: 0px;
  margin-top: -5px;
  color: #232741;
  font-size: 15px;
  font-weight: bold;

  -webkit-animation: spin-left 100s linear infinite;
  -moz-animation: spin-left 100s linear infinite;
  -ms-animation: spin-left 100s linear infinite;
  -o-animation: spin-left 100s linear infinite;
  animation: spin-left 100s linear infinite;
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
#Planet3-1-1 {
  width: 8px;
  height: 8px;
  margin-left: 89px;
  margin-top: 50px;
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

  -webkit-animation: spin-right 200s linear infinite;
  -moz-animation: spin-right 200s linear infinite;
  -ms-animation: spin-right 200s linear infinite;
  -o-animation: spin-right 200s linear infinite;
  animation: spin-right 200s linear infinite;
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

  -webkit-animation: spin-left 200s linear infinite;
  -moz-animation: spin-left 200s linear infinite;
  -ms-animation: spin-left 200s linear infinite;
  -o-animation: spin-left 200s linear infinite;
  animation: spin-left 200s linear infinite; 
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
  margin-left: -10px;
  margin-top: -30px;
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
  
  
  -webkit-animation: spin-right 150s linear infinite;
  -moz-animation: spin-right 150s linear infinite;
  -ms-animation: spin-right 150s linear infinite;
  -o-animation: spin-right 150s linear infinite;
  animation: spin-right 150s linear infinite;
}

#Planet4-label {
  position: absolute;
  top:  0;
  left: 50%;
  /* width: 15px;
  height: 15px; */
  margin-left: 0px;
  margin-top: -12px;
  color: #232741;
  font-size: 15px;
  font-weight: bold;

  -webkit-animation: spin-left 150s linear infinite;
  -moz-animation: spin-left 150s linear infinite;
  -ms-animation: spin-left 150s linear infinite;
  -o-animation: spin-left 150s linear infinite;
  animation: spin-left 150s linear infinite;
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
