<template lang='pug'>
  #view-wrapper
    .center-wrapper.narrow
      .header
        .title After the Killings:
        .subtitle Stories of Hope for #[br] Left-Behind Victims
      .stories-wrapper
        router-link.story(v-for=`story in stories` :to=`{name:"story",params:{id:story.id}}`)
          .image(:style=`background(story)`)
            .spacer
          .content
            .title {{story.title}}
            .byline {{story.byline}}

</template>

<script>
export default {
  data(){
    return {

    };
  },
  mounted(){

  },
  computed: {
    stories(){
      return this.$store.state.stories;
    },
  },
  methods: {
    background(story){
      return {
        backgroundImage: `url(${story.cover})`,
      };
    },
  },
}
</script>

<style lang='sass' scoped>
  #view-wrapper
    .center-wrapper
      // padding: 12.5% 0
      .header
        padding-top: 12.5%
        padding-bottom: 3em
        .title
          text-transform: uppercase
          font-family: $font-sans-serif
          font-weight: bold
        .subtitle
          font-size: 2em
      .stories-wrapper
        display: flex
        justify-content: flex-start
        flex-wrap: wrap
        .story
          $gutter: 1em
          $w: calc(50% - #{$gutter/2})
          flex-basis: $w
          width: $w
          text-decoration: none
          &:nth-of-type(2n - 1)
            margin-right: $gutter
            margin-bottom: $gutter
          .image
            width: 100%
            background-position: center
            background-repeat: no-repeat
            background-size: cover
            .spacer
              width: 100%
              padding-bottom: 100% * $image-ratio
          .content
            padding: 1.25em 0.5em
            .title
              font-weight: bold
              font-family: $font-serif
              font-size: 1.25em
            .byline
              font-size: 0.9em
              margin-top: 0.25em
              font-family: $font-sans-serif
              opacity: 0.25
</style>
