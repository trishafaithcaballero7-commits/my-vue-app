<template>
<header class="navbar">
    <div class="header-title">
        <img :src="logo" alt="CPU Logo" class="logo">

    <div class="title-text">
        <div class="Title">Central Philippine University</div>
        <div class="text">SCIENTIA ET FIDES</div>
    </div>
</div>

    <nav class="buttons">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/admissions">Admissions</router-link>
        <router-link to="/academics">Academics</router-link>
        <router-link to="/campus-life">Campus Life</router-link>

        <button class="search-btn">🔍</button>
        <button class="portal-btn">👤 Portal Login</button>
    </nav>

  </header>
</template>


<script setup>
import logo from "../assets/logo.png";
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: white;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  z-index: 9999;
}

.logo {
  width: 65px;
  height: 65px;
  object-fit: contain;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 15px;
}

.title-text {
  display: flex;
  flex-direction: column;
}

.Title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1c003d;
}

.text {
  font-size: 0.85rem;
  letter-spacing: 2px;
  color: #907300;
}

.buttons {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.buttons a {
  text-decoration: none;
  color: #333;
  padding: 10px 14px;
  font-weight: 500;
}

.buttons a.router-link-active {
  color: #270056;
  font-weight: 700;
  border-bottom: 3px solid #270056;
}

.search-btn{
  background-color: transparent;
  font-size: 1.8rem;
  border: none;
  cursor: pointer;
}

.portal-btn {
  border: none;
  cursor: pointer;
}

.portal-btn {
  background: #670cd7;
  color: white;
  padding: 10px 16px;
  border-radius: 3px;
}
</style>