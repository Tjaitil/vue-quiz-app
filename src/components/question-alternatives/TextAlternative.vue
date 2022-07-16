<template>
    <div>
        {{ alternative.content }}
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TextAlternative } from '../../types/questions/TextQuestion'

export default defineComponent({
    name: "TextAlternative",
    props: {
        alternative: {
            type: Object as PropType<TextAlternative>,
            required: true,
        }
    },
    setup () {
        
        return {}
    }
})
</script>
<style scoped>

</style>