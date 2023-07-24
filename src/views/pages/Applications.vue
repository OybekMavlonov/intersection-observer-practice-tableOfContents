<script setup>
    import {ref} from 'vue'
    import TableOfContents from '../../components/TableOfContents.vue'

    const contents = ref([
        {
            id: 'import',
            label: 'Import',
        },
        {
            id: 'basic',
            label: 'Basic',
        },
        // {
        //     id: 'group',
        //     label: 'Group',
        // },
        // {
        //     id: 'dynamic',
        //     label: 'Dynamic',
        // },
        // {
        //     id: 'invalid',
        //     label: 'Invalid',
        // },
        // {
        //     id: 'disabled',
        //     label: 'Disabled',
        // },
        {
            id: 'form',
            label: 'Form',
            description: 'Compatibility with popular Vue form libraries.',
            children: [
                {
                    id: 'veevalidate',
                    label: 'VeeValidate',
                }
            ]
        },
        {
            id: 'style',
            label: 'Style',
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
        }
    ])
</script>

<template>
    <div class="flex">
        <main class="doc-main">
            <div v-for="(item, index) in contents" class="content" :id="item.label.toLowerCase()">
                <h2>{{item.label}}</h2>
                <p>
                    {{item.label}}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, at aut corporis cumque
                    dignissimos
                    dolorem doloribus ducimus ea exercitationem facilis fuga fugiat harum hic incidunt inventore itaque
                    iusto
                    magni
                    minus modi molestiae natus nemo nesciunt nihil, pariatur praesentium quam quia quidem sint vel velit
                    vero
                    voluptas voluptates. Accusamus accusantium alias asperiores aspernatur aut consequuntur cum delectus
                    dignissimos
                    doloremque earum et ex excepturi expedita facilis ipsam ipsum iste itaque iusto laborum laudantium
                    molestiae
                    mollitia natus nemo neque nihil obcaecati, odit officia possimus quaerat qui sunt veniam vitae
                    voluptatum. A
                    aut
                    corporis hic maxime, nam odio odit officiis omnis repudiandae suscipit?`
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae blanditiis delectus eos
                    exercitationem itaque mollitia omnis repellendus sit tempore. Adipisci, culpa deserunt est eum
                    inventore perferendis ullam. A accusantium amet, at atque beatae commodi consequuntur corporis
                    debitis deleniti dolorum eaque eligendi, enim eum facere fuga fugiat id incidunt iste iure
                    laboriosam laudantium libero maxime nam natus nihil nisi non numquam obcaecati odit placeat possimus
                    quae rerum suscipit temporibus ullam, ut voluptatibus? Consequatur impedit iusto molestiae molestias
                    nisi quaerat ut veritatis vero. Atque corporis culpa ducimus et facilis itaque quisquam, voluptate!
                    Cumque deleniti enim est molestiae porro reprehenderit ullam voluptas.
                </p>
                <div v-if="item.children">
                    <div v-for="child in item.children" class="content" :id="child.label.toLowerCase()">
                        <h4>{{child.label}}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab delectus, dignissimos
                            distinctio doloremque ducimus eos error eum expedita, nihil, nisi optio placeat quod
                            reprehenderit suscipit unde voluptates. Aliquid, at atque corporis cumque dolore illum
                            laborum libero maxime molestiae non nulla numquam odit voluptatibus. Deleniti maiores porro
                            ut. Similique, ut?`
                            aut
                            corporis hic maxime, nam odio odit officiis omnis repudiandae suscipit?`
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae blanditiis delectus eos
                            exercitationem itaque mollitia omnis repellendus sit tempore. Adipisci, culpa deserunt est eum
                            inventore perferendis ullam. A accusantium amet, at atque beatae commodi consequuntur corporis
                            debitis deleniti dolorum eaque eligendi, enim eum facere fuga fugiat id incidunt iste iure
                            laboriosam laudantium libero maxime nam natus nihil nisi non numquam obcaecati odit placeat possimus
                            quae rerum suscipit temporibus ullam, ut voluptatibus? Consequatur impedit iusto molestiae molestias
                            nisi quaerat ut veritatis vero. Atque corporis culpa ducimus et facilis itaque quisquam, voluptate!
                            Cumque deleniti enim est molestiae porro reprehenderit ullam voluptas.</p>
                    </div>
                </div>
            </div>
        </main>
        <aside>
            <TableOfContents :content="contents"/>
        </aside>
    </div>
</template>