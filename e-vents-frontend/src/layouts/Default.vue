<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        <g-link to="/">E-Vents</g-link>
      </v-toolbar-title>
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
      <v-container>
        <v-row>
          <v-col sm="6" offset-sm="3">
            <slot/>
          </v-col>
        </v-row>
      </v-container>
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
