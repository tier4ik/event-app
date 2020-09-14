<template>
  <Layout>

    <v-tabs v-model="tab" centered>
      <v-tab>All Events</v-tab>
      <v-tab>Music Events</v-tab>
      <v-tab>Coding Events</v-tab>
    </v-tabs>
    <v-row>
      <v-card
        v-for="edge in events"
        :key="edge.node.id"
        class="mx-auto mt-5"
        max-width="300"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          :src="edge.node.image"
        />

        <v-card-title>{{ edge.node.title }}</v-card-title>

        <v-card-subtitle class="pb-0">{{ edge.node.date | dateFormatter }}</v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange"
            text
            @click="getMoreInfo(edge.node.id)"
          >
            More Info
          </v-btn>
        </v-card-actions>
      </v-card> 
    </v-row>
    
  </Layout>
</template>

<page-query>
  query {
    events: allEvent {
      edges {
        node {
          id
          categories
          title
          description
          price
          duration
          date
          thumbnail
          image
        }
      }
    }
  }
</page-query>

<script>
import moment from "moment"
export default {
  data() {
    return {
      tab: 0,
      events: [],
    }
  },
  mounted() {
    this.events = this.$page.events.edges;
  },
  watch: {
    tab(val) {
      if (val == 0) {
        this.showAllEvents()
      } else {
        this.showEventsByType(val)
      }
    }
  },
  filters: {
    dateFormatter(date) {
      return moment(date).format('MMMM Do YYYY, h:mm')
    }
  },
  methods: {
    showAllEvents() {
      this.events = this.$page.events.edges
    },
    showEventsByType(val) {
      this.events = this.$page.events.edges.filter(edge => edge.node.categories == val)
    },
    getMoreInfo(id) {
      this.$router.push(`/events/${id}`)
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
