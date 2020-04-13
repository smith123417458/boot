<template>
  <nav
    class="navbar navbar-expand-xl p-0 fixed-top navDefault"
   
  >
 
     <div class="collapse navbar-collapse ml-xl-6 order-2 order-xl-1" >
      
    </div>
  
    <ul class="navbar-nav mr-xl-6 order-1 order-xl-2">
     
       <li class="nav-item">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
       原生的
    </button>  
       </li> 
          <li class="nav-item">
        </li>
    </ul>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" >
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>  




 
  </nav>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {  
    
   
    };
  },
  computed:{
   
  ...mapGetters('favoriteModules', ['favorites', 'favoritesLength']),

  }
   ,
  
  
  methods: {
   
   
     

   
 
   

    removeFavorite(favorite, delall) {
      this.$store.dispatch('favoriteModules/removeFavorite', { favoriteItem: favorite, delall });
    },
    ...mapActions('favoriteModules', ['getFavorite']),













  },
  created() {
   

    this.$store.dispatch('favoriteModules/getFavorite');


  },  
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/customMixins.scss";




// ================================================================================


 .favorite {
  float: right;
  margin-left: 0.25rem;
}

 .favorite-btn {
  float: right;
  position: relative;
  background-color: transparent;
  text-align: right;
  font-size: inherit;
  .badge {
    position: absolute;
    top: auto;
    bottom: 2px;
    right: -1px;
  }
}
.favorite-list {
  &:hover, &:active {
    background-color: red;
    text-decoration: underline;
  }
  .favorite-list-delbtn:hover, .favorite-list-delbtn:active {
    i {
      font-size: 1.25rem;
    }
  }
}

</style>
