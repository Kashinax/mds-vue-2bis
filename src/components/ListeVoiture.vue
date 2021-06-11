<template>
  
  <div class="liste-voiture">
    <div class="nombre-de-modele">
      {{voitures.length}}
      <input type="text"  v-model="filtre">
    </div>
    
    <div class="row">
      <div v-for="voiture in filtreVoiture" class="list col-4" :class="{ bleu : voiture.marque == 'Renault' }" :key="voiture.id">
        <h1>
          {{ voiture.nom }}
        </h1>
        <p>
          {{ voiture.marque }}
        </p>
        <input type="text" v-model="voiture.marque">
        <div class="lien-detail">
          <router-link :to="{name: 'Voiture', params: { id: voiture.id }}">Voir détail</router-link>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListeVoiture',
  props: {
    msg: String
  },
  data() {
    return {
      voitures: this.$store.state.voiture,
      filtre: ""
    }
  },
  mounted () {
  },
  computed: {
    filtreVoiture() {
      var voitures_array = this.voitures,
          rechercheString = this.filtre;
      
      if(!rechercheString){
        return voitures_array;
      }

      rechercheString = rechercheString.trim().toLowerCase();

      voitures_array = voitures_array.filter(function(item){
          if(item.marque.toLowerCase().indexOf(rechercheString) !== -1){
              return item;
          }
      })
      return voitures_array;
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
  padding: 5px 10px;
  display: inline-block;
  margin: 10px 0;
  .lien-detail & {
    border: 1px solid #42b983;
  }
}
.list {
  background-color: beige;
}
.list.bleu {
  background-color: #3E92CC;
}
</style>
