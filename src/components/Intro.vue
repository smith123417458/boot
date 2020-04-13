<template>
  <section
    id="intro"
    class="d-flex justify-content-center align-items-center text-center my-5"
    
  >
   
   <!-- Button trigger modal -->
 <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  這是在intro.vue
</button>  -->

Modal
<!-- <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
</div> -->


  </section>


</template>

<style lang="scss" scoped>
@import "../assets/scss/customMixins.scss";
#intro {
  height: 80vh;
  @include BS-xl {
    height: 60vh;
  }
}
section{
  background-color: black;
  margin-top: 0px !important;
}
h4,p{
  color:chartreuse;
}
 @media (max-width: 520px) {
   h4{
     margin-top: 75px;
     color: chartreuse;
   }
 }
 h5{
  color: deeppink;
}
.typing {
      width: 15em;
      white-space: nowrap;
      border-right: 2px solid transparent;
      animation: typing 7.5s steps(15, end);
      //  blink-caret 0.75s step-end infinite;
      overflow: hidden;
      letter-spacing: 0;
    }
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 9em;
      }
    }




.light{
  position: relative;
  display: inline-block;
  padding:25px 30px;
  margin: 40px 0;
  color: #03e9f4;
  font-size: 24px;
  text-decoration: none;
  transition: 0.5s; 
  overflow: hidden;
}
.light:hover{
  background: #03e9f4;
  color: #050801;
  box-shadow: 0 0 200px #03e9f4;
             
}
.light span{
  position: absolute;
  display: block;
}
.light span:nth-child(1){
  top:0;
  left:-100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg,transparent,#03e9f4);
  animation: alternate1 1s linear infinite;
}

@keyframes alternate1
{
  0%{
    left:-100%
  }
  50%,100%{
    left:100%
  }
}

.light span:nth-child(2){
  top:-100%;
  right:0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg,transparent,#03e9f4);
  animation: alternate2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes alternate2
{
  0%{
    top:-100%
  }
  50%,100%{
    top:100%
  }
}

.light span:nth-child(3){
  bottom:0;
  right:-100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg,transparent,#03e9f4);
  animation: alternate3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes alternate3
{
  0%{
    right:-100%
  }
  50%,100%{
     right:100%
  }
}

.light span:nth-child(4){
  bottom:-100%;
  left:0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg,transparent,#03e9f4);
  animation: alternate4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes alternate4
{
  0%{
    bottom:-100%
  }
  50%,100%{
    bottom:100%
  }
}



</style>
