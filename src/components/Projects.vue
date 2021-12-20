<template>
  <div>
    <!-- Desktop Rendering -->
    <div class="text desktop" id="TrackingTarkov">
      <h1>Tracking Tarkov</h1>
      <h4>Quest Tracker for Escape From Tarkov</h4>
      <b-row>
        <b-col cols="8">
          <p class="desc">
            This project was created to aid in the ability to track quests in the game Escape From
            Tarkov. We utilize React for our front end framework and use firebase for the database
            and authentication. Users have the ability to create an account and it will save their
            progress across any device. The quest data used for the website is scraped from the
            official Wiki as to keep everything up to date without any manual intervention on our
            parts. If something changes the update will occur the next time the scraper is run and
            every user will receive the changed without affecting their data. This tool is
            constantly being updated and can be found here:
            <a href="https://trackingtarkov.com/" target="_blank">https://trackingtarkov.com/</a>
          </p>
        </b-col>
        <b-col cols="4">
          <div class="flexy tech">
            <div>React</div>
            <div>JavaScript</div>
            <div>Firebase</div>
            <div>HTML</div>
            <div>CSS</div>
          </div>
        </b-col>
      </b-row>
    </div>

    <Dateline v-bind:year="2021" class="desktop" />

    <!-- Mobile Rendering -->

    <div class="text mobile" id="TrackingTarkov-mobile">
      <h1>Tracking Tarkov</h1>
      <h4>Quest Tracker for Escape From Tarkov</h4>
      <p class="desc">
        This project was sponsored by Raytheon Intelligence & Space. The goal was to replace the
        existing end of life GUI that relied on Adobe Flash, which was deprecated in December 2020
        by developing a new front-end using a well-supported framework. The goal was to retain the
        functionality of the legacy GUI and improve on the design. The most important issue in the
        project was providing the functionality requested by the client in an intuitive and
        easy-to-use display. The team achieved this by developing the design in coordination with
        the liaison engineers and by incorporating extensive user experience testing throughout the
        development of the project. The largest risks involved data security and privacy. The
        application must be secure, so the team implemented best practices for security and work
        with the liaison engineers to ensure the application meet the security needs.
      </p>
      <div class="flexy-mobile tech">
        <div>Node</div>
        <div>PostgreSQL</div>
        <div>CSS</div>
        <div>HTML</div>
        <div>Vue</div>
        <div>JavaScript</div>
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
