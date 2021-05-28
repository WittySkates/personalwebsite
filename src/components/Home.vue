<template>
  <div class="hello">

    <div id="particles-js"></div>
    
    <div id="Skills" class="animate__animated">
    </div>

    <div id="NASA" class="animate__animated">
      NASA
      <button type="button" @click="toggleSelection('NASA')">Click</button>
    </div>

    <div id="Raymond James" class="animate__animated">
      Raymond
      <button type="button" @click="toggleSelection('Raymond James')">Click</button>
    </div>

    <!-- <b-jumbotron  class="animate__animated custom-scroller item-styling" id="Scanned">
      <template #header>
          <b-row >
          <b-col cols="auto">Scanned</b-col>
          <b-col cols="auto" class="ms-auto"> 
            <b-button @click="toggleSelection('Scanned')">Close</b-button>
          </b-col>
        </b-row>
      </template>
      <template #lead>
        <b-button pill class="color-scheme" style="margin-right:10px" variant="outline-primary">React Native</b-button>
        <b-button pill class="color-scheme" style="margin-right:10px" variant="outline-primary">JavaScript</b-button>
        <b-button pill class="color-scheme" style="margin-right:10px" variant="outline-primary">React Native</b-button>          
      </template>
      <p>
        I was a Co-Founder of this mobile app built to circumvent the inefficiencies of attendance tracking at meetings and 
        events. Developed with React Native for both IOS and Android, we won $10,000 in the Next Generation Tech startup 
        competition and were later accepted into the Gator Hatchery at the University of Florida. The app had users and sales in 
        numerous states and countries before stopping development.
        <br>
        • Head of UI and UX development.
        <br>
        • This project won first place and $10,000 in a technology startup in Pinellas County.
        <br>
        • Project was accepted into the Gator Hatchery where we continued to develop our idea and business plan.
      </p>
    </b-jumbotron> -->

    <b-jumbotron  class="animate__animated item-styling jumbo " id="Scanned">
      <template #header>
          <b-row >
          <b-col cols="auto">Scanned</b-col>
          <b-col cols="auto" class="ms-auto"> 
            <b-button @click="toggleSelection('Scanned')">Close</b-button>
          </b-col>
        </b-row>
      </template>
      <template #lead>
        <b-button pill class="color-scheme" style="margin-right:10px" variant="outline-info">React Native</b-button>
        <b-button pill class="color-scheme" style="margin-right:10px" variant="outline-info">JavaScript</b-button>
        <b-button pill class="color-scheme" style="margin-right:10px" variant="outline-info">React Native</b-button>          
      </template>
      <div class="custom-scroller">    
        <p>
          I was a Co-Founder of this mobile app built to circumvent the inefficiencies of attendance tracking at meetings and 
          events. Developed with React Native for both IOS and Android, we won $10,000 in the Next Generation Tech startup 
          competition and were later accepted into the Gator Hatchery at the University of Florida. The app had users and sales in 
          numerous states and countries before stopping development.
          <br>
          • Head of UI and UX development.
          <br>
          • This project won first place and $10,000 in a technology startup in Pinellas County.
          <br>
          • Project was accepted into the Gator Hatchery where we continued to develop our idea and business plan.
        </p>
      </div>

    </b-jumbotron>
        <b-jumbotron  class="animate__animated item-styling jumbo " id="UF">
      <template #header>
          <b-row >
          <b-col cols="auto">Scanned</b-col>
          <b-col cols="auto" class="ms-auto"> 
            <b-button @click="toggleSelection('UF')">Close</b-button>
          </b-col>
        </b-row>
      </template>
      <template #lead>
        <b-button pill class="color-scheme" style="margin-right:10px" variant="outline-info">React Native</b-button>
        <b-button pill class="color-scheme" style="margin-right:10px" variant="outline-info">JavaScript</b-button>
        <b-button pill class="color-scheme" style="margin-right:10px" variant="outline-info">React Native</b-button>          
      </template>
      <div class="custom-scroller">    
        <p>
          I was a Co-Founder of this mobile app built to circumvent the inefficiencies of attendance tracking at meetings and 
          events. Developed with React Native for both IOS and Android, we won $10,000 in the Next Generation Tech startup 
          competition and were later accepted into the Gator Hatchery at the University of Florida. The app had users and sales in 
          numerous states and countries before stopping development.
          <br>
          • Head of UI and UX development.
          <br>
          • This project won first place and $10,000 in a technology startup in Pinellas County.
          <br>
          • Project was accepted into the Gator Hatchery where we continued to develop our idea and business plan.
        </p>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    toggleSelection(id){
      document.getElementById("particles-js").setAttribute("style", "z-index: 0")
      document.getElementById("particles-js").classList.remove("hidden")
      document.getElementById(id).classList.remove("animate__backInDown");
      document.getElementById(id).setAttribute("style", "z-index: -2")

    }
  }
}
</script>

<style>
.custom-scroller::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}
.custom-scroller::-webkit-scrollbar-track {
  background: transparent;

}
.custom-scroller::-webkit-scrollbar-thumb {
  background: rgb(175, 175, 175);
  visibility:hidden;
}
.custom-scroller:hover::-webkit-scrollbar-thumb {
  visibility:visible;
  border-radius: 12px;
}
.custom-scroller {
  overflow: overlay;
  max-width: 100%;
  height: 70%;
  /* Full Scrolling */
  /* height: 50%  */

}
.item-styling{
  background-color: rgba(52, 58, 64, 0.8) ;;
  color: white;
  margin-top: 10%;
  margin-left:10% ;
  margin-right:10% ;
  border-radius: 12px;
  position: absolute;
  padding: 40px;
}
.jumbo{
  height: 50%;
  min-height: 350px;
  overflow-y: hidden;
  overflow-x: hidden;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
h3 {
margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

p { color: white; font-family: 'Raleway',sans-serif; font-size: 18px; font-weight: 500; line-height: 32px; margin: 0 0 24px; }
/* ---- reset ---- */

body {
  margin: 0;
  font:normal 75% Arial, Helvetica, sans-serif;
}

canvas {
  display: block;
  vertical-align: bottom;
}

/* ---- particles.js container ----  #b61924; 2a2a2a*/
.hidden::before {
  content: "";
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  -webkit-backdrop-filter: blur(5px); 
  backdrop-filter: blur(5px);         
  pointer-events: none; 
  left: 0%;
  visibility: visible;
}

#particles-js {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 95vh;
  background-color: #151114;
  background-image: url("");
  background-repeat: no-repeat;
  /* background-size: 200px 200px ; */
  /* background-position: 50% 50%; */
}

#Skills{
  position: absolute;
  z-index: -2;
  height: 50%;
  width: 80%;
  background-color: rgba(52, 58, 64, 0.8) ;
  color: white;
  margin-top: 10%;
  margin-left:10% ;
  margin-right:10% ;
  border-radius: 25px;

}
#NASA{
  position: absolute;
  z-index: -2;
  height: 50%;
  width: 80%;
  background-color: rgba(52, 58, 64, 0.8) ; ;
  color: white;
  margin-top: 10%;
  margin-left:10% ;
  margin-right:10% ;
  border-radius: 25px;
}
#Raymond\ James{
  position: absolute;
  z-index: -2;
  height: 50%;
  width: 80%;
  background-color: rgba(52, 58, 64, 0.8) ; ;
  color: white;
  margin-top: 10%;
  margin-left:10% ;
  margin-right:10% ;
  border-radius: 25px;
}
#UF{
  position: absolute;
  z-index: -2;
  height: 50%;
  width: 80%;
  background-color: rgba(52, 58, 64, 0.8) ;;
  color: white;
  margin-top: 10%;
  margin-left:10% ;
  margin-right:10% ;
  border-radius: 25px;
}
#Scanned{
  z-index: -2;  
}

/* #topborder{
  width: 90%;
  height: 50px;
  margin-top: -20px;
  box-shadow: 0 20px 20px -20px #333;
} */

/* #Raymond\ James{
  background-color: #232741;
  color: white;
  padding: 50px;
  padding-left: 150px;
  padding-right: 150px;

} */
</style>
