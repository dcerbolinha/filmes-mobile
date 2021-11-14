import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'content-type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDc0ZjVlOGIwYzg0MDc1NzcxYmZhNDI1NjgyMTIwYSIsInN1YiI6IjYxNmRmNTJkMDM3MjY0MDA2YTg4Y2IyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jKJnZjpcbxTLp5Rw91c8B45eegZ1FhpbfJv0YasAvCM'
    }
})

export default apiFilmes