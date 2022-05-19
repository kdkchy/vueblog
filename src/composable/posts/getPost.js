import { ref } from 'vue';
import { projectFirestore } from '@/firebase/config';
import { useRouter } from 'vue-router'

const getPost = (id) => {
    const router = useRouter()
    const post = ref([])
    const error = ref(null)
    const isLoading = ref(true)

    const load = async () => {
        try{
            isLoading.value = true
            const res = await projectFirestore.collection('posts')
                .doc(id)
                .get()
            if(! res.exists) {
                throw Error('Tidak ada data')
            }
            post.value = {
                id: res.id,
                ...res.data()
            }

            isLoading.value = false
        } catch (err) {
            error.value = err.message
        }
    }

    const handleDelete = async () => {
        isLoading.value = true
        await projectFirestore.collection('posts')
        .doc(id)
        .delete()

        router.push({
            name: 'Home'
        })
        isLoading.value = false
    
    }

    return { post, error, load, handleDelete, isLoading }
}

export default getPost