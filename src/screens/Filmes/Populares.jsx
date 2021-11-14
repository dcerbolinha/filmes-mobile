import React, {useState, useEffect} from "react";
import {ScrollView, TouchableOpacity } from "react-native";
import apiFilmes from "../../services/apiFilmes";
import { Row, Column as Col } from 'react-native-responsive-grid';
import ImgPoster from "../../components/ImgPoster";

const Populares = ({navigation}) => {

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        apiFilmes.get(`/movie/popular?language=pt-BR`).then(result => {
            setFilmes(result.data.results)
        })
    }, [])

    return(
        <ScrollView margin={10}>
            <Row>
                {filmes.map(filme => (
                    <Col size={50} key={filme.id} >
                        <TouchableOpacity
                            onPress={() => navigation.push('filmes/detalhes', { id: filme.id })}>
                            <ImgPoster foto={filme.poster_path} />
                        </TouchableOpacity>
                    </Col>
                ))}
            </Row>
        </ScrollView>
    )
}

export default Populares
