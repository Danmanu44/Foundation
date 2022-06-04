<template>
  <div class="">
   <!-- App.vue -->

<v-app>
  

  
   <div  class="ma-0" >
       <v-app-bar
      
      permanent
      dark
      fixed
     
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
<div>
                <v-toolbar-title>PAPSO</v-toolbar-title>

</div>
   <!--donation dialog begin  -->
<v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="warning"
          dark
          v-bind="attrs"
          v-on="on"
          small
          width="100px"
        >
         Donate Now
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Donate Now</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                         
 <v-chip
      class="ma-3"
      color="warning"
      outlined
      small
      
    >

      <span style="padding:5px"> Fund</span>
      
      <v-icon left>
        mdi-arrow-right
      </v-icon>
    </v-chip>
       <span width="20px">
            <v-text-field
            solo
            label="Amount"
            color="warning"
            prepend-inner-icon="mdi-currency-ngn"
            type="currency"
            
            height="20px"
            :style="{ top: '10px' }"
            
          ></v-text-field>
          </span>
           <v-btn
              small
              color="success"
              dark

            >
              Donate
            </v-btn>

                        </v-row>
          </v-container>
          <small>*pay any penny to save orphans</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
         
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
      
    </v-app-bar>
   </div>
   

    

  <!-- Sizes your content based upon application components -->
  <div style="margin-top: 60px;">
  <v-main app
        :style="{ top: '150px', zIndex: 4 }"

  >

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
        <v-card
    elevation="24"
    
    class="mx-auto"
    :style="{bottom:'10px'}"
  >
    <v-system-bar lights-out></v-system-bar>
    <v-carousel
      :continuous="false"
      :cycle="cycle"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="300"
    >
     <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
    </v-carousel>
    <v-list two-line>
      <v-list-item>
        <v-list-item-avatar
          height="100px"
          width="100px"
          >
          
          <img  src=" ../../images/Isa Ali Pantami.jpeg">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Prof. Sheikh Isa Ali Pantami</v-list-item-title>
          <v-list-item-subtitle>Author</v-list-item-subtitle>
        </v-list-item-content>
        
      </v-list-item>
    </v-list>
  </v-card>


  <v-card
    elevation="24"
    
    class="mx-auto"
  >
    <v-system-bar lights-out></v-system-bar>
    <v-carousel
      :continuous="false"
      :cycle="cycle"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="300"
    >
     <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
    </v-carousel>
    <v-list two-line>
      <v-list-item>
        <v-list-item-avatar
          height="100px"
          width="100px"
          >
          
          <img  src=" ../../images/Isa Ali Pantami.jpeg">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Prof. Sheikh Isa Ali Pantami</v-list-item-title>
          <v-list-item-subtitle>Author</v-list-item-subtitle>
        </v-list-item-content>
       
      </v-list-item>
    </v-list>
  </v-card>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  </div>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
    
  </div>
</template>
<script>
import foot1 from '../../images/Isa Ali Pantami.jpeg';
import orphanqote from '../../images/orphan.jpg';

import orphanimage from '../../images/orphanchild.jpg';
import logo1 from '../../images/Isa Ali Pantami.jpeg';

//  orphanqote,
            // orphanimage,
            // logo1,
  export default {
     data () {
      return {
                 logo:foot1,

        colors: [
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ],
        cycle: true,
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        items: [
          {
            src: '../../images/orphan.jpg',
          },
          {
            src: '../../images/orphanchild.jpg',
          },
          {
            src: '../../images/Isa Ali Pantami.jpeg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
         dialog: false,
      }
    },

  }
</script>