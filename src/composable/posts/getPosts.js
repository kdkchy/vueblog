import { ref } from 'vue';


const getPost = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try{
            let data = await fetch('http://localhost:3000/posts')
            if(! data.ok) {
                throw Error('Tidak ada data')
            }
            posts.value = await data.json()
        } catch (err) {
            error.value = err.message
        }
    }

    return { posts, error, load }
}

export default getPost