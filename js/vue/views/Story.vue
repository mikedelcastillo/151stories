<template lang='pug'>
  #view-wrapper(:style=`styles`)
    .header
      .center-wrapper.narrow
        .title {{story.title}}
        router-link.close(:to=`{name:"index"}`)
          include ../../../public/img/close.svg
    .center-wrapper.content
      transition(name="fade" mode="out-in")
        .image(:key=`index` v-if=`page.type=="image"` :style=`{backgroundImage:"url("+page.img+")"}`)
        .text-only(:key=`index` v-if=`page.type=="text"`)
          .text {{page.text}}
        //- .center-wrapper {{page}}
    .footer
      .center-wrapper.narrow
        .button.prev(@click=`prev`)
          .icon
            include ../../../public/img/left.svg
          .text Back
        .page-number {{index + 1}}/{{story.content.length}}
        .button.next(@click=`next`)
          .text Next
          .icon
            include ../../../public/img/right.svg
</template>

<script>
export default {
  data(){
    return {
      index: 0,
    };
  },
  mounted(){
    window.addEventListener("keydown", this.keyHandler);
  },
  beforeDestroy(){
    window.removeEventListener("keydown", this.keyHandler);
  },
  computed: {
    stories(){
      return this.$store.state.stories;
    },
    story(){
      return this.stories.find(s => s.id == this.$route.params.id);
    },
    page(){
      return this.story.content[this.index];
    },
    styles(){
      return {
        '--background-color': this.page.backgroundColor,
        '--text-color': this.page.textColor,
      };
    },
  },
  methods: {
    background(story){
      return {
        backgroundImage: `url(${story.cover})`,
      };
    },

    prev(){
      this.index = Math.max(0, this.index - 1);
    },
    next(){
      this.index = Math.min(this.story.content.length - 1, this.index + 1);
    },

    keyHandler({keyCode}){
      if(keyCode == 27) this.$router.push({name:"index"});
      if(keyCode == 32 || keyCode == 39) this.next();
      if(keyCode == 37) this.prev();
    },
  },
}
</script>

<style lang='sass' scoped>
  $ends-height: 50px

  #view-wrapper
    $trans-dur: 1s
    $trans: color $trans-dur, background-color $trans-dur, fill $trans-dur
    width: 100vw
    height: 100vh
    background-color: var(--background-color)
    color: var(--text-color)
    transition: $trans
    font-family: $font-sans-serif
    text-transform: uppercase
    font-size: 0.8em
    line-height: 1em
    letter-spacing: 0.1em
    svg path
      fill: var(--text-color)
      // stroke: var(--text-color)
      transition: $trans
    .header, .footer
      height: $ends-height
      width: 100%
      .center-wrapper
        display: flex
        justify-content: space-between
        align-items: center
    .header
      .title
        text-align: center
        flex-grow: 1
        flex-shrink: 1
      .close
        // width: $ends-height
        height: $ends-height
        display: flex
        justify-content: center
        align-items: center
        cursor: pointer
    .footer
      .button
        display: flex
        justify-content: center
        align-items: center
        height: $ends-height
        $spacing: 0.5em
        &, *
          cursor: pointer
        &.prev .icon
          margin-right: $spacing
        &.next .icon
          margin-left: $spacing
    .content
      overflow: auto
      height: calc(100vh - #{$ends-height * 2})
      .image
        width: 100%
        height: 100%
        background-position: center
        background-repeat: no-repeat
        background-size: contain
      .text-only
        margin: auto
        width: 90%
        height: 100%
        display: flex
        justify-content: center
        align-items: center
        text-transform: none
        font-family: $font-serif
        font-size: 1.1rem
        letter-spacing: 0
        line-height: 1.25em
</style>
