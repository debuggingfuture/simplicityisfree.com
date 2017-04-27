<template>
  <section class="container">
    <div>
      <blockquote class="embedly-card"><h4><a href="https://medium.muz.li/3-trends-in-landing-page-design-5cf900f2c90f">3 trends in landing page design - Muzli -Design Inspiration</a></h4><p>via Muzli design inspiration. "3 trends in landing page design" is published by Muzli in Muzli -Design Inspiration</p></blockquote>
      <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
    </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue';

export default {
  components: {
    Logo
  }
};
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
