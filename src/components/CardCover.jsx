import React from "react";
import {Image, StyleSheet} from "react-native";
import {Card} from "react-native-paper";

const CardCover = (props) => {
    return props.foto ?
        <Card.Cover style={styles.imagemIndisponivel} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + props.foto }} /> :
        <Card.Cover style={styles.imagemIndisponivel} source={require('../../assets/images/imagemPoster.png')} />
}

export default CardCover

const styles = StyleSheet.create({
    imagem: {
        height: 300,
        margin: 5
    },
    imagemIndisponivel: {
        margin: 5,
        height: 300,
        width: "100%"
    }
})
