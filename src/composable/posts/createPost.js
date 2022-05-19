import { ref } from 'vue'
import { useRouter } from 'vue-router'

const createPost = () => {
    const router = useRouter()
    const title = ref('');
    const body = ref('');
    const tag = ref('');
    const tags = ref([]);

    const handleKeydown = () => {
        if(! tags.value.includes(tag.value)){
            tag.value = tag.value.replace(/\s/g, '');
            tags.value.push(tag.value);
        }

        tag.value = ''
    }

    const handleSubmit = async () => {
        const post = {
            title: title.value,
            body: body.value,
            tags: tags.value
        }

        await fetch('http://localhost:3000/posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })

        router.push({
        name: 'Home'
        })

    }

    return { title, body, tag, tags, handleKeydown, handleSubmit }
}


export default createPost