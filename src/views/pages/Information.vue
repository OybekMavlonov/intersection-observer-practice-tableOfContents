<script setup>
    import {ref} from 'vue'
    import TableOfContents from '../../components/TableOfContents.vue'

    const contents = ref([
        {
            id: 'import',
            label: 'Import',
            // component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            // component: BasicDoc
        },
        {
            id: 'link',
            label: 'Link',
            // component: LinkDoc
        },
        {
            id: 'icons',
            label: 'Icons',
            // component: IconsDoc
        },
        {
            id: 'loading',
            label: 'Loading',
            // component: LoadingDoc
        },
        {
            id: 'severity',
            label: 'Severity',
            // component: SeverityDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            // component: DisabledDoc
        },
        {
            id: 'raised',
            label: 'Raised',
            // component: RaisedDoc
        },
        {
            id: 'rounded',
            label: 'Rounded',
            // component: RoundedDoc
        },
        {
            id: 'text',
            label: 'Text',
            // component: TextDoc
        },
        {
            id: 'raisedtext',
            label: 'Raised Text',
            // component: RaisedTextDoc
        },
        {
            id: 'outlined',
            label: 'Outlined',
            // component: OutlinedDoc
        },
        {
            id: 'icononly',
            label: 'Icon Only',
            // component: IconOnlyDoc
        },
        {
            id: 'badges',
            label: 'Badges',
            // component: BadgesDoc
        },
        {
            id: 'buttonset',
            label: 'Button Set',
            // component: ButtonSetDoc
        },
        {
            id: 'sizes',
            label: 'Sizes',
            // component: SizesDoc
        },
        {
            id: 'template',
            label: 'Template',
            // component: TemplateDoc
        },
        {
            id: 'style',
            label: 'Style',
            // component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            // component: AccessibilityDoc
        }
    ])
</script>

<template>
    <div class="flex">
        <main class="doc-main">
            <div v-for="item in contents">
                <h2>{{item.label}}</h2>
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
            </div>
        </main>
        <aside>
            <TableOfContents :content="contents"/>
        </aside>
    </div>
</template>