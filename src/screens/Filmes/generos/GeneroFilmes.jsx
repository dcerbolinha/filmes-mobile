import React, {useState, useEffect} from "react";
import {ScrollView, TouchableOpacity } from "react-native";
import apiFilmes from "../../../services/apiFilmes";
import { Row, Column as Col } from 'react-native-responsive-grid';
import ImgPoster from "../../../components/ImgPoster";
import {Divider, Title, Button} from "react-native-paper";

const GeneroFilmes = ({navigation, route}) => {

    const [filmes, setFilmes] = useState([]);
    const [pagina, setPagina] = useState(1)

    const name = route.params.name;

    useEffect(()=>{
        const id = route.params.id;
        apiFilmes.get(`/discover/movie?sort_by=popularity.desc&include_adult=false&page=${pagina}&with_genres=${id}&language=pt-BR`).then(result => {
            if(filmes.length > 0){
                setFilmes([...filmes, ...result.data.results])
            }else{
                setFilmes(result.data.results)
            }

        })
    }, [pagina])


    return(
        <ScrollView margin={10}>
            <Row>
                <Title>{name}</Title>
                <Divider/>
            </Row>
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
            <Row>
                <Col size={100}>
                    <Button icon="plus" mode="contained" onPress={() => setPagina(pagina + 1)}>
                        Carregar mais
                    </Button>
                </Col>
            </Row>
        </ScrollView>
    )
}

export default GeneroFilmes
