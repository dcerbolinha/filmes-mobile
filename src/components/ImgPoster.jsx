import React from "react";
import {Image, StyleSheet} from "react-native";

const ImgPoster = (props) => {
    return props.foto ?
        <Image style={styles.imagem} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + props.foto }} /> :
        <Image style={styles.imagemIndisponivel} source={require('../../assets/images/imagemPoster.png')} />
}

export default ImgPoster

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
