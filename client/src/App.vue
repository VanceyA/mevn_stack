<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list-item
        title="Vance Andersen"
        subtitle="MEVN Full Stack App"
      ></v-list-item>
      <v-divider></v-divider>
      <v-list density="compact">

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          :to="item.link"
          link
          color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from "vue";

  const drawer = ref(null);
</script>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-home", link: "/" },
        { title: "Add Post", icon: "mdi-note-plus", link: "/add-post" },
        { title: "About", icon: "mdi-help-box", link: "/about" },
      ], 
    }),
  }
</script>