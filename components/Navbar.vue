<template >
  <nav id="navbar">
    <ul class="categories">
      <li v-for="(c, key) in categories" :class="{ 'is-active': key === activeCategory[0]}">
        <a @click="pickCategory(0, key)" href="javascript:void(0)">
              {{c.title}} {{c.titleCht}}
        </a>
      </li>
    </ul>
    <ul class="sub-categories">
      <li v-for="(c, key) in subCategories" :class="{ 'is-active': key === activeCategory[1]}">
        <a @click="pickCategory(1, key)" href="javascript:void(0)">
              {{c.title}} {{c.titleCht}}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// dump, representation only
import _ from 'lodash';

export default {
  // @param{activeCategory} array of path
  // TODO Transform categoryTree directly, while keep both languages
  // can filter w/ path?

  props: ['categoryTree', 'activeCategory'],
  computed: {
    categories() {
      return this.categoryTree;
    },
    subCategories() {
      return _.get(this.categoryTree, this.activeCategory[0]).categories;
    },
  },
  methods: {
    pickCategory(lvl, key) {
      this.$emit('active-category', lvl, key);
    }
  },
  components: {
  },
};
</script>

<style>
.is-active a{
  color: black;
}
nav li a{
    font-family: 'Noto Serif','Noto Serif CJK TC', sans-serif;
    word-spacing: -0.1em;
    margin-right: 1em;
    /*justify-content: space-between;*/
    /*padding-left: 1em;*/
    padding-right: 1em;
    color: #bbbbbb;
    text-decoration: none;
}
#navbar ul{
  overflow-y: hidden;
  /*overflow-x: auto;*/
  overflow: auto;
   white-space: nowrap;
  /*TODO investiagte*/
      /*width: 900vw;*/
}
.categories {
  /*max-height: 2em;*/
}

.categories li{
  margin-right: 3em;
  /*overflow-x:scroll;*/
}
.sub-categories li{
  font-size: 0.9em;
  margin-right: 0.2em;
}
</style>
