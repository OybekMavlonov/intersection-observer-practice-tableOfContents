<script setup>
    import { computed, watch, ref } from 'vue';
    import AppSidebar from './AppSidebar.vue';
</script>

<template>
    <div class="layout-wrapper">
        <div class="layout-sidebar">
            <app-sidebar></app-sidebar>
        </div>
        <div class="layout-main-container">
            <div class="layout-main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style>
    .layout-main-container {
        margin-left: 280px;
    }
</style>

