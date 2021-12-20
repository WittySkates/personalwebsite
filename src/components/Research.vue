<template>
  <div>
    <!-- Desktop Rendering -->
    <div class="text desktop" id="RapidModelPredictor">
      <h1>Rapid Model Predictor</h1>
      <h4>Department of Electrical & Computer Engineering, University of Florida</h4>
      <b-row>
        <b-col cols="8">
          <p class="desc">
            To greatly enhance the clinical effectiveness of electrical neuromodulation therapies
            for various medical conditions (e.g., pain, movement disorders, depression, and
            sensorimotor prosthetics), efficient and patient-specific computer models are needed for
            the prediction of the neural response. The objective of this work is to develop a method
            based on deep-learning neural networks to replace computationally expensive methods for
            the prediction of neural fiber activation by electrical stimulation. A neural
            network-based, rapid predictor will decrease the computational demands and allow for
            implementation of real-time patient-specific models. Approach. We developed an
            artificial neural network (ANN) to predict the binary activation response of myelinated
            nerve fibers from deep brain stimulation. Training, testing, and optimization was
            parallelized across 200 nodes on the UF supercomputer, HiPerGator.
          </p>
        </b-col>
        <b-col cols="4">
          <div class="flexy tech">
            <div>Python</div>
            <div>Tensor Flow</div>
            <div>Neuron</div>
            <div>Bash</div>
            <div>HiperGator</div>
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="text desktop" id="Pastebles">
      <h1>Pastebles</h1>
      <h4>Department of Electrical & Computer Engineering, University of Florida</h4>
      <b-row>
        <b-col cols="8">
          <p class="desc">
            Created modular wearable technology that utilizes ML, a microcontroller, and an IMU to
            predict current action (ie. bicep curls, side lunges, sitting, etc.). Used TensorFlow to
            create and train a model which is then hosted on a ESP32 microcontroller. Developed
            software that allows the ESP32 and IMU to communicate and make inferences about the data
          </p>
        </b-col>
        <b-col cols="4">
          <div class="flexy tech">
            <div>C</div>
            <div>C++</div>
            <div>Tensor Flow</div>
            <div>Python</div>
            <div>Javascript</div>
          </div>
        </b-col>
      </b-row>
    </div>

    <Dateline v-bind:year="2021" class="desktop" />

    <!-- Mobile Rendering -->
    <div class="text mobile" id="RapidModelPredictor-mobile">
      <h1>Rapid Model Predictor</h1>
      <h4>Department of Electrical & Computer Engineering, University of Florida</h4>
      <p class="desc">
        To greatly enhance the clinical effectiveness of electrical neuromodulation therapies for
        various medical conditions (e.g., pain, movement disorders, depression, and sensorimotor
        prosthetics), efficient and patient-specific computer models are needed for the prediction
        of the neural response. The objective of this work is to develop a method based on
        deep-learning neural networks to replace computationally expensive methods for the
        prediction of neural fiber activation by electrical stimulation. A neural network-based,
        rapid predictor will decrease the computational demands and allow for implementation of
        real-time patient-specific models. Approach. We developed an artificial neural network (ANN)
        to predict the binary activation response of myelinated nerve fibers from deep brain
        stimulation. Training, testing, and optimization was parallelized across 200 nodes on the UF
        supercomputer, HiPerGator.
      </p>
      <div class="flexy tech">
        <div>Python</div>
        <div>Tensor Flow</div>
        <div>Neuron</div>
        <div>Bash</div>
        <div>HiperGator</div>
      </div>
    </div>

    <div class="text mobile" id="Pastebles-mobile">
      <h1>Pastebles</h1>
      <h4>Department of Electrical & Computer Engineering, University of Florida</h4>
      <p class="desc">
        Created modular wearable technology that utilizes ML, a microcontroller, and an IMU to
        predict current action (ie. bicep curls, side lunges, sitting, etc.). Used TensorFlow to
        create and train a model which is then hosted on a ESP32 microcontroller. Developed software
        that allows the ESP32 and IMU to communicate and make inferences about the data
      </p>
      <div class="flexy tech">
        <div>C</div>
        <div>C++</div>
        <div>Tensor Flow</div>
        <div>Python</div>
        <div>Javascript</div>
      </div>
    </div>
    <Dateline v-bind:year="2021" class="mobile" />
  </div>
</template>

<script>
import Dateline from "./Dateline.vue";
export default {
  name: "Experience",
  components: { Dateline }
};
</script>

<style></style>
