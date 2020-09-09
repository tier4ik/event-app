<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>E-Vents</v-toolbar-title>
      <v-text-field
        placeholder="Search"
        style="max-width: 400px;"
        prepend-inner-icon="mdi-magnify"
        class="ml-8"
        outlined
        rounded
        dense
        hide-details />
      <v-spacer />
      <v-btn>Create an Event</v-btn>
    </v-app-bar>
    <v-main>
      <slot/>
    </v-main>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
