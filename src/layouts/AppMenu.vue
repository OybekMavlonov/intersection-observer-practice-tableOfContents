<script setup>
    import {computed} from 'vue';
    import {useRoute} from 'vue-router'
    import AppMenuItem from './AppMenuItem.vue';

    const route = useRoute()

    const menu = computed(() => {
        return {
            items: [
                { label: 'information', icon: 'fa-solid fa-circle-info', to: '/information' },
                { label: 'applications', icon: 'fa-solid fa-book', to: '/applications' },
                {
                    label: 'settings', parent: 'settings', icon: 'fa-solid fa-gear', items: [
                        {
                            label: 'setting 1',
                            icon: 'fa-solid fa-computer',
                            to: '/settings/setting1'
                        },
                        {
                            label: 'setting 2',
                            icon: 'fa-solid fa-building-columns',
                            to: '/settings/setting2'
                        },
                        {
                            label: 'setting 3',
                            icon: 'fa-solid fa-microchip',
                            to: '/settings/setting3'
                        },
                    ]
                },
            ]
        }
    });
</script>

<template>
    <ul class="layout-menu">
        <app-menu-item :item="menu"></app-menu-item>
    </ul>
</template>
