import { ref } from 'vue';
import { projectFirestore } from '@/firebase/config';

const getPost = () => {
    const posts = ref([])
    const error = ref(null)
    const isLoading = ref(true)

    const load = async () => {
        try{
            isLoading.value = true
            const res = await projectFirestore.collection('posts').get()
            if(res.docs.length == 0) {
                isLoading.value = false
                throw Error('Tidak ada data')
            }
            posts.value = res.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            isLoading.value = false
        } catch (err) {
            error.value = err.message
        }
    }

    return { posts, error, load, isLoading }
}

export default getPost