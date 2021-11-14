import React, {useState, useEffect} from "react";
import { ScrollView, TouchableOpacity} from "react-native";
import apiFilmes from "../../services/apiFilmes";
import {Card, Title} from "react-native-paper";
import { Row, Column as Col } from 'react-native-responsive-grid';
import CardCover from "../../components/CardCover";

const Lancamentos = ({navigation}) => {

    const [filme, setFilme] = useState({});

    useEffect(()=>{
        apiFilmes.get(`/movie/latest?language=pt-BR`).then(result => {
            setFilme(result.data)
        })
    }, [])

    return(
        <ScrollView margin={10}>
            <Row>
                    <Col size={100} key={filme.id} >
                        <TouchableOpacity
                            onPress={() => navigation.push('filmes/detalhes', { id: filme.id })}>
                            <Card>
                                <CardCover foto={filme.poster_path} />
                                <Card.Content>
                                    <Title>{filme.title}</Title>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    </Col>
            </Row>
        </ScrollView>
    )
}

export default Lancamentos
