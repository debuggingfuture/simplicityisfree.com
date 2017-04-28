<template>
  <div class="card">
    <img :src="heroImageUrl" v-if="!heroMediaHtml" class="hero" alt="">
    <div class="hero-embed" v-if="heroMediaHtml" v-html="heroMediaHtml">
    </div>
    <div class="card__description" v-html="infoMounted">
    </div>
  </div>
</template>
<script >
  import marked from 'marked';
  import _ from 'lodash';

  // Config marked new url opening at new window per here https://github.com/chjj/marked/pull/451
  const myRenderer = new marked.Renderer();
  myRenderer.link = function (href, title, text) {
    /* eslint-disable */
      let external,
        newWindow,
        out;
      external = /^https?:\/\/.+$/.test(href);
      newWindow = external || title === 'newWindow';
      out = `<a href="${href}"`;
      if (newWindow) {
        out += ' target="_blank"';
      }
      if (title && title !== 'newWindow') {
        out += ` title="${title}"`;
      }
      return out += `>${text}</a>`;
  };
  marked.setOptions({renderer: myRenderer});
/* eslint-enable */

  export default {
    props: ['info', 'mdStore'],
    data() {
      return {
        infoMounted: '',
        heroImageUrl: '',
        heroMediaHtml: ''
      };
    },
    mounted() {
      this.interpolate();
    },
    updated() {
      console.log('this.info');
      console.log(this.info);
      this.interpolate();
    },
    methods: {
      interpolate() {
        if (this.info.type === 'markdown') {
          this.heroImageUrl = this.info.heroMedia;
          this.$set(this, 'infoMounted', marked(this.mdStore[this.info.key]));
          console.log('in');
          console.log(this.infoMounted);
        }
        console.log(this.info.heroMedia);
        if (_.startsWith(this.info.heroMedia, 'slides.com')) {
          this.heroMediaHtml = `<iframe src="//${this.info.heroMedia}" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`;
          // this.info.heroMedia;
          //
        } else if (_.startsWith(this.info.heroMedia, 'medium.com')) {
          this.heroMediaHtml = `<a href="//${this.info.heroMedia}" class="embedly-card">Embedly</a>`;
        } else if (_.startsWith(this.info.heroMedia, 'facebook.com')) {
          console.log('fb');
          this.heroMediaHtml = `<iframe src="//${this.info.heroMedia}" class="fb-embed" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>`;
        }
      }
    }
  };

</script>

<style>

.card{
  display: flex;
  flex-direction: column;
  /*word-spacing: -0.1em;*/
  /*margin-right: 1em;*/
  justify-content: space-between;
  align-items: center;
  line-height: 1.5em;
  /*max-width: 70%;*/
}
img.hero{
  max-width: 70%;
  max-height: 50vh;
}
.hero-embed{
  /*width: 70%;*/
  min-width: 600px;

}

.hero-embed iframe.fb-embed{
  width: 100%;
  height: 700px;
}

.card .card__description{
  width: 100%;
  text-align: left;
  padding-left: 1em;
  padding-right: 1em;
}
@media (min-width: 768px) {
  .card .card__description{
    min-width: 70%;
    width: 70%;
    text-align: left;
  }
  .card .card__description a{
    color: #6b6b6b;
    text-decoration: none;
    font-weight: bold;
  }
}
.card p{
  padding-bottom: 1em;
}
.card .card__description h1{
  text-align: left;
  padding-top: 1em;
  padding-bottom: 2em;
}
.card .card__description h5{
  margin-bottom: 1em;
}
.card {
  padding-top: 3em;
  padding-bottom: 3em;
}
.content > div{
  width: 100%;
}
a.embedly-card{
  /*to hide loading ones*/
  display:none;
}
</style>
