<template>
  <div>
    <div>
      <v-row>
        <v-col cols="12" lg="4" offset-lg="8">
          <v-breadcrumbs :items="crumbs" divider=">"   />
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    crumbs() {
     let pathArray = this.$route.path.split('/')
      pathArray.shift()
      const breadCrumbs = []
      // needed to handle the intermediary entries for nested vue routes
      let breadcrumb = ''
      let lastIndexFound = 0
      for (let i = 0; i < pathArray.length; ++i) {
        breadcrumb = `${breadcrumb}${'/'}${pathArray[i]}`
        if (this.$route.matched[i] &&
          Object.hasOwnProperty.call(this.$route.matched[i], 'meta') &&
          Object.hasOwnProperty.call(this.$route.matched[i].meta, 'breadcrumb')) {
          breadCrumbs.push({
            href: i !== 0 && pathArray[i - (i - lastIndexFound)]
              ? '/' + pathArray[i - (i - lastIndexFound)] + breadcrumb
              : breadcrumb,
            disabled: i + 1 === pathArray.length,
            text: this.$route.matched[i].meta.breadcrumb || pathArray[i]
          })
          lastIndexFound = i
          breadcrumb = ''
        }
      }
      return breadCrumbs
    },
  },
};
</script>
<style scoped>
</style>