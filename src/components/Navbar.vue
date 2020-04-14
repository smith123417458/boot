<template>

<div>

  <nav
    class="navbar navbar-expand-xl p-0 fixed-top navDefault"
  >
    <a class="navbar-brand" href="#">
      <img
        src="../assets/img/r02.png"
        width="30"
        height="30"
        class="d-inline-block align-top ml-4"
      />
     
    </a>
    <div class="collapse navbar-collapse ml-xl-6 order-2 order-xl-1">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link p-3 px-4" href="#" @click.prevent="goNewArrival">
            <!-- <span class="hvr-underline-from-left">首頁</span> -->
            <img src="../assets/img/homepage.png" />
          </a>
        </li>
        <!-- 瀏覽器下車款選擇 -->
        <li class="nav-item d-none d-xl-block">
          <a
            id="brand"
            class="nav-link p-3 px-4"
          >
            <span class="align-middle">車款選擇</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 會員登入 -->
    <ul class="navbar-nav mr-xl-6 order-1 order-xl-2">
      <li class="nav-item">
        <router-link class="d-none d-xl-block py-3 px-4" to="/signin">
        
          <img src="../assets/img/log-in.png" />
        </router-link>
      </li>
      <!-- 購物車按鈕 -->
      <li class="nav-item">
        <router-link class="position-relative d-block py-3 px-4" to="/cart">
          <i class="fal fa-shopping-cart"></i>
          <p
            class="position-absolute text-center text-white bg-danger rounded-circle"
            style="top:10%; right:25%; font-size: 12px; min-width: 17px"
            v-if="this.$store.state.carts.carts.length"
          >{{ this.$store.state.carts.carts.length }}</p>
        </router-link>
      </li>

      <li class="nav-item">
        <div class="btn-group favorite d-inline-block">
          <button type="button" class="btn favorite-btn" data-toggle="dropdown">
            <img src="../assets/img/heart.png" />
            <span class="badge badge-pill badge-success">{{ favoritesLength }}</span>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="pt-2 px-3">
              <h5 class="text-center">我的最愛</h5>
              <table class="table mb-2" style="min-width:200px">
                <tbody>
                  <tr class="favorite-list" v-for="favorite in favorites" :key="favorite.id">
                    <td class="py-2" width="30">
                      <a
                        href="#"
                        class="text-danger favorite-list-delbtn"
                        @click.prevent="removeFavorite(favorite, false)"
                      >
                        <i class="fas fa-times"></i>
                      </a>
                    </td>
                    <td class="py-2">
                      <router-link
                        :to="`/productslist/${favorite.id}`"
                        class="d-block"
                      >{{ favorite.title }}</router-link>
                    </td>
                  </tr>
                 
                </tbody>
              </table>

             
            </div>
          </div>
        </div>
      </li>
    </ul>

  
  </nav>





  </div>







</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
 
  computed: {
    getcar() {
      return this.$store.state.carts.carts.length;
    },
    ...mapGetters("favoriteModules", ["favorites", "favoritesLength"])
  },

  
 
  created() {
    window.addEventListener("scroll", this.windowScroll, false);
    this.$store.dispatch("getCarts");
    this.$store.dispatch("favoriteModules/getFavorite");
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/customMixins.scss";





</style>
