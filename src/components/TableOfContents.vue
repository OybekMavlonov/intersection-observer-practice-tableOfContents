<template>
    <ul ref="nav" class="doc-section-nav">
        <li v-for="doc of content" :key="doc.label"
            :class="['navbar-item', { 'active-navbar-item': activeId === doc.id }]">
            <div class="navbar-item-content">
                <button class="px-link" @click="onButtonClick(doc)">{{ doc.label }}</button>
            </div>

            <template v-if="doc.children">
                <ul>
                    <li v-for="child of doc.children" :key="child.label"
                        :class="['navbar-item', { 'active-navbar-item': activeId === child.id }]">
                        <div class="navbar-item-content">
                            <button class="px-link" @click="onButtonClick(child)">
                                {{ child.label }}
                            </button>
                        </div>
                    </li>
                </ul>
            </template>
        </li>
    </ul>
</template>

<script>
    import DomHandler from '../utils/DomHandler.js'
    import ObjectUtils from '../utils/ObjectUtils.js'
    export default {
        props: ['content'],
        data() {
            return {
                activeId: null,
                isScrollBlocked: false,
                scrollEndTimer: null,
                topbarHeight: 0,
                observer: null,
                intersectingIdList: [],
                allSequenceIds: [],
                allContents: null,
                allTitles: null,
                allMenuItems: null,
            };
        },
        watch: {
            '$route.hash'() {
                this.scrollCurrentUrl();
            }
        },

        mounted() {
            this.allContents = document.querySelectorAll('.content')
            this.allTitles = document.querySelectorAll('h2, h4')
            this.allMenuItems = document.querySelectorAll('li.navbar-item')

            this.allContents.forEach((content) => {
                this.observer.observe(content)
                this.allSequenceIds.push(content.id)
            })
        },

        beforeUnmount() {
            this.observer.disconnect();
        },

        created() {
            this.observer = new IntersectionObserver(
                this.revealContent,
                {
                    root: null,
                    threshold: 0.1,
                }
            );
        },
        methods: {
            revealContent(entries, observer) {
                entries.forEach((entry) => {
                    console.log(entry)

                    if(entry.isIntersecting) {
                        this.intersectingIdList.push(entry.target.id);
                        console.log(this.intersectingIdList);
                        entry.target.classList.add('active-item')
                    } else {
                        entry.target.classList.remove('active-item')

                        this.intersectingIdList = this.intersectingIdList.filter((id) => {
                            if (id !== entry.target.id) return id;
                        });
                        console.log(this.intersectingIdList);
                    }

                    let isFirstElementKnown = true;
                    let index = 0;
                    while (isFirstElementKnown && index < this.allSequenceIds.length) {
                        if (this.intersectingIdList.includes(this.allSequenceIds[index])) {
                            this.setActiveContent(this.allSequenceIds[index]);
                            isFirstElementKnown = false;
                        }
                        index++;
                    }
                });

                // console.log(window.innerHeight);
                console.log((window.innerHeight + window.scrollY));
                // console.log(window.scrollY);
                console.log(document.body.scrollHeight);
                if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                    // you're at the bottom of the page
                    console.log("Bottom of page");
                    this.setActiveContent(this.allSequenceIds.at(-1));
                }
            },
            setActiveContent(id) {
                this.allMenuItems.forEach((content) => {
                    // console.log(content.innerHTML);
                    // console.log(content);
                    // console.log(content.innerText.split('\n')[0].toLowerCase());
                    // console.log(id);
                    if (id === content.innerText.split('\n')[0].toLowerCase()) {
                        content.classList.add("active-navbar-item");
                    } else {
                        content.classList.remove("active-navbar-item");
                    }
                });
            },

            scrollToLabelById(id, behavior = 'smooth') {
                const label = document.getElementById(id);
                label && label.scrollIntoView({block: 'start', behavior});
            },
            onButtonClick(doc) {
                this.$router.push(`${this.checkRouteName}/#${doc.id}`);
                setTimeout(() => {
                    this.activeId = doc.id;
                    this.scrollToLabelById(doc.id, 'smooth');
                    this.isScrollBlocked = true;
                }, 1);
            },

            scrollCurrentUrl() {
                const hash = window.location.hash.substring(1);
                const hasHash = ObjectUtils.isNotEmpty(hash);
                const id = hasHash ? hash : (this.content[0] || {}).id;

                this.activeId = id;
                hasHash &&
                setTimeout(() => {
                    this.scrollToLabelById(id);
                }, 1);
            }
        },
        computed: {
            checkRouteName() {
                const path = this.$router.currentRoute.value.path;

                if (path.lastIndexOf('/') === path.length - 1) {
                    return path.slice(0, -1);
                }

                return path;
            }
        }
    };
</script>

<style>
</style>
