import React, {useEffect, useState} from "react";
import {ScrollView, TouchableOpacity} from "react-native";
import {Searchbar} from 'react-native-paper';
import apiFilmes from "../../services/apiFilmes";
import {Column as Col, Row} from "react-native-responsive-grid";
import ImgPoster from "../../components/ImgPoster";

const Pesquisar = ({navigation}) => {

    const [busca, setBusca] = useState('');
    const [filmes, setFilmes] = useState([]);

    const onChangeSearch = (text) => {
        setBusca(text)
    }

    useEffect(()=> {
        if(busca){
            apiFilmes.get(`/search/movie?language=pt-BR&query=${busca.replace(/\s/g, '%20')}`).then(result => {
                setFilmes(result.data.results)
            })
        }

    }, [busca])

    return(
        <ScrollView margin={10}>
            <Row>
                <Col size={100}>
                    <Searchbar
                        placeholder="Pesquisar Filmes"
                        onChangeText={onChangeSearch}
                        value={busca}
                    />
                </Col>
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
        </ScrollView>
    )
}

export default Pesquisar
