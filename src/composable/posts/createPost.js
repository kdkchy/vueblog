import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { projectFirestore } from '@/firebase/config';

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

        const res = await projectFirestore.collection('posts')
            .add(post)

        router.push({
            name: 'Home'
        })

    }

    return { title, body, tag, tags, handleKeydown, handleSubmit }
}


export default createPost