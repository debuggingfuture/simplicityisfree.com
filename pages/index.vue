<template>
  <div class="container">
    <navbar @active-category="updateCategory" :category-tree="categoryTree" :active-category="activeCategory" />
    <section >
      <div class="content">
        <div v-for="key in currentCategory.infos" :key="key" class="">
          <card :info="getInfoByKey(key)" :md-store="mdStore" />
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import Logo from '~components/Logo.vue';
import Navbar from '~components/Navbar.vue';
import Card from '~components/Card.vue';
import _ from 'lodash';
import ia from '../ia/ia.js';

if (process.BROWSER_BUILD) {
  require('../vendor/segmentio.js');
}

const keyByCategory = (categories, activeCategoryTitle) =>
  _(categories)
  // TODO ensure title lowercase?
  .keyBy('title')
  .mapValues(category =>
    Object.assign(category,
      {
        title: _.capitalize(category.title),
        titleCht: category.titleCht
      }
    )
  )
  .value();

export default {
  components: {
    Logo,
    Card,
    Navbar
  },
  computed: {
    // push to build if possible
    categoryTree() {
      return _.mapValues(keyByCategory(ia.categories), category =>
        Object.assign(
          category,
          {
            categories: keyByCategory(category.categories)
          }
        )
      );
    },
    currentCategory() {
      console.log('update currentCategory');
      // TODO fix this dirty hack, either proper recursive or zip & contact
      return _.get(this.categoryTree, `${this.activeCategory[0]}.categories.${this.activeCategory[1]}`, { infos: [] });
    }
  },
  mounted() {
    console.log('mdStore');
    console.log(this.mdStore);
  },
  data() {
    return {
      landingInfo: '',
      // categoryTree: ia.categories,
      activeCategory: ['vincent', 'motto'],
      mdStore: _(ia.infos)
      .keyBy('key')
      .mapValues((info) => {
        const key = `./${info.key}`;
       /* eslint-disable */
       try{
         //TODO match against markdown
          return require.context('../assets/markdown',true, /\.md$/)(key);
         }catch(e){
           console.log(e);
         }
        return ''
        // return require('~assets/markdown/vincent_experience_1sky.md')
      })
      .value()
    };
  },
  methods: {
    updateCategory(lvl, key){
      console.log('update');
      // dirty
      this.$set(this.activeCategory, lvl, key);
      if(lvl===0){
        //escape the dot
        //TODO hack, idea is always reset children?
        this.$set(this.activeCategory, 1, _.first(_.keys(_.get(this.categoryTree, `${this.activeCategory[0]}.categories`))))
      }
    },
    getInfoByKey(info) {
      return _.find(ia.infos, { key: info });
    }
  }
};
</script>

<style>
.container{
  min-height: 100vh;
  /*display: flex;
  flex-direction: column;*/
  align-items: flex-start;
  width: 100%;
}
.container nav{
  /*width: 100%;*/
  align-items: flex-start;
  flex: 0 0 100%;
}

#navbar ul {
  margin-bottom: 0.2em;
}

.container nav ul li { display: inline-block; }
.content
{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 90vh;
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
