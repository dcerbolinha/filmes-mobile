import React, {useState, useEffect} from "react";
import {Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import {Text} from 'react-native-paper';
import apiFilmes from "../../services/apiFilmes";
import { Row, Column as Col } from 'react-native-responsive-grid'

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
                            <Image
                                style={styles.imagem}
                                source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.poster_path }}
                            />
                        </TouchableOpacity>
                    </Col>
                ))}
            </Row>
        </ScrollView>
    )
}

export default Populares

const styles = StyleSheet.create({
    imagem: {
        height: 300,
        margin: 5
    }
})
