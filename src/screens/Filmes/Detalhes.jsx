import React, {useEffect, useState} from "react";
import {Image, ScrollView, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {Surface, Paragraph, Title, List, Avatar} from 'react-native-paper';
import apiFilmes from "../../services/apiFilmes";
import {Row, Column as Col} from "react-native-responsive-grid";

const Detalhes = ({navigation, route}) => {

    const [filme, setFilme] = useState({});
    const [atores, setAtores] = useState([]);

    useEffect(()=>{
        const id = route.params.id;
        apiFilmes.get(`/movie/${id}?language=pt-BR`).then(result => {
            setFilme(result.data)
        })

        apiFilmes.get(`/movie/${id}/credits?language=pt-BR`).then(result => {
            setAtores(result.data.cast)
        })

    }, [])

    const imagemAtor = (foto) => {
        return foto ?
            <Avatar.Image size={50} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + foto }} /> :
            <Avatar.Icon size={50} icon="account" />
    }

    const formataData = (data) => {
        let date = new Date(data.replace(/-/g, '\/'));
        let dateFormated = `${("0" + date.getDate()).slice(-2)}/${("0" + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;
        return dateFormated
    }

    return (
        <ScrollView margin={10}>
            {filme.id &&
                <>
                    {filme.backdrop_path &&
                        <Row>
                            <Image
                                style={styles.imagem}
                                source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path }}
                            />
                        </Row>
                    }

                    <Row>
                        <Col size={100}>

                            <Surface style={styles.surface}>
                                <Title>{filme.title}</Title>
                                {filme.overview != "" &&
                                <Paragraph>{filme.overview}</Paragraph>
                                }
                                {filme.overview === "" &&
                                <Paragraph>Sinospse Indisponível</Paragraph>
                                }
                            </Surface>
                            {filme.original_title &&
                            <List.Item
                                title="Título Original:"
                                description={filme.original_title}
                                left={props => <List.Icon {...props} icon="format-text" />}
                            />
                            }
                            {filme.release_date &&
                            <List.Item
                                title="Lançamento:"
                                description={formataData(filme.release_date)}
                                left={props => <List.Icon {...props} icon="calendar-month-outline" />}
                            />
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col size={100}>
                            <List.Accordion
                                title="Gêneros"
                                left={props => <List.Icon {...props} icon="movie-filter" />}>
                                {filme.genres.map(genero => (
                                    <View key={genero.id}>
                                        <TouchableOpacity
                                            onPress={() => navigation.push('filmes/genero', { id: genero.id })}>
                                            <List.Item title={genero.name} />
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </List.Accordion>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={100}>
                            <List.Accordion
                                title="Atores"
                                left={props => <List.Icon {...props} icon="account-multiple" />}>
                                {atores.map(ator => (
                                    <View key={ator.id}>
                                        <TouchableOpacity
                                                          onPress={() => navigation.push('atores/detalhes', { id: ator.id })}>
                                            <List.Item
                                                title={ator.character}
                                                description={ator.name}
                                                left={() => imagemAtor(ator.profile_path)}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                ))}
                            </List.Accordion>
                        </Col>
                    </Row>
                </>
            }
        </ScrollView>
    )
}

export default Detalhes

const styles = StyleSheet.create({
    imagem: {
        height: 350,
        width: "100%",
        borderRadius: 5,
        borderWidth: 4,
        borderColor: "#20232a",
    },
    surface: {
        padding: 8,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    }
})
