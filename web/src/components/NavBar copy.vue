<template>
    <div>
         <b-navbar class="header" toggleable="lg" type="light" variant="faded" sticky>
             <img class="logoBrand" src="../assets/explanade-logo-1.png" alt="">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <!-- Using 'button-content' slot -->
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    border-bottom: 5px solid #68C7BD;
    padding: 0rem 1rem;
    position: sticky;
    height: 100px;
    padding-left:70px;
    box-shadow: 0px 3px 16px -1px rgba(0,0,0,0.19);
    padding-right:70px;
}
.logoBrand{
    width:250px; 
    margin-left:20px; 
    margin-right:20px;
}

</style>