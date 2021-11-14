import React, {useState, useEffect} from "react";
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {List, Paragraph, Surface, Title, Divider} from 'react-native-paper';
import apiFilmes from '../../services/apiFilmes';
import { Row, Column as Col } from 'react-native-responsive-grid';


const DetalhesAtores = ({navigation, route}) => {
    const [ator, setAtor] = useState({});
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        const id = route.params.id

        apiFilmes.get(`/person/${id}?language=pt-BR`).then(result => {
            setAtor(result.data)
        })

        apiFilmes.get(`/person/${id}/movie_credits?language=pt-BR`).then(result => {
            setFilmes(result.data.cast)
        })
    }, [])

    const formataData = (data) => {
        let date = new Date(data.replace(/-/g, '\/'));
        let dateFormated = `${("0" + date.getDate()).slice(-2)}/${("0" + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;
        return dateFormated
    }

    return (
        <ScrollView margin={10}>
            {ator.id &&
            <>
                {ator.profile_path  &&
                <Row>
                    <Image
                        style={styles.imagem}
                        source={{ uri: 'https://image.tmdb.org/t/p/w500/' + ator.profile_path }}
                    />
                </Row>
                }

                <Row>
                    <Col size={100}>
                        <Surface style={styles.surface}>
                            <Title>{ator.name}</Title>
                            {ator.biography != "" &&
                            <Paragraph>{ator.biography}</Paragraph>
                            }
                            {ator.biography === "" &&
                            <Paragraph>Biografia Indisponível</Paragraph>
                            }
                        </Surface>
                        {ator.birthday &&
                        <List.Item
                            title="Nascimento:"
                            description={formataData(ator.birthday)}
                            left={props => <List.Icon {...props} icon="calendar-month-outline" />}
                        />
                        }
                    </Col>
                </Row>
                <Divider />
                <Title>Filmes</Title>
                <Row>
                    {filmes.map(filme => (
                        <Col size={50} key={filme.id} >
                            <TouchableOpacity
                                onPress={() => navigation.push('filmes/detalhes', { id: filme.id })}>
                                <Image
                                    style={styles.imagemFilme}
                                    source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.poster_path }}
                                />
                            </TouchableOpacity>
                        </Col>
                    ))}

                </Row>

            </>
            }
        </ScrollView>

    )
}

export default DetalhesAtores

const styles = StyleSheet.create({
    imagem: {
        height: 400,
        width: "100%",
        borderRadius: 5,
        borderWidth: 4,
        borderColor: "#20232a",
    },
    imagemFilme:{
        height: 300,
        margin: 5
    },
    surface: {
        padding: 8,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    }
})