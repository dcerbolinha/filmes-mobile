import React from "react";
import {Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import { Surface, Text, IconButton, Colors } from 'react-native-paper';
import { Row, Column as Col } from 'react-native-responsive-grid';

const Home = ({navigation}) => {

    return (
        <ScrollView margin={10}>
            <Row>
                <Col size={100}>
                    <Image style={styles.imagem} source={require('../../assets/images/capaApp.png')} />
                </Col>
            </Row>
            <Row>
                <Col size={100}>
                    <TouchableOpacity
                        onPress={() => navigation.push('filmes/pesquisar')}>
                        <Surface style={styles.surface}>
                            <IconButton
                                icon="magnify"
                                color={Colors.red500}
                                size={50}
                            />
                            <Text>Pesquisar</Text>
                        </Surface>
                    </TouchableOpacity>
                </Col>
            </Row>
            <Row>
                <Col size={100}>
                    <TouchableOpacity
                        onPress={() => navigation.push('filmes/populares')}>
                        <Surface style={styles.surface}>
                            <IconButton
                                icon="star"
                                color={Colors.red500}
                                size={50}
                            />
                            <Text>Filmes Populares</Text>
                        </Surface>
                    </TouchableOpacity>
                </Col>
            </Row>
            <Row>
                <Col size={100}>
                    <TouchableOpacity
                        onPress={() => navigation.push('filmes/lancamentos')}>
                        <Surface style={styles.surface}>
                            <IconButton
                                icon="rocket-launch"
                                color={Colors.red500}
                                size={50}
                            />
                            <Text>Último Lançamento</Text>
                        </Surface>
                    </TouchableOpacity>
                </Col>
            </Row>
        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({
    surface: {
        padding: 8,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    imagem: {
        height: 150,
        width: "100%"
    }
});