import React from "react";
import {Image, StyleSheet} from "react-native";

const ImgCapa = (props) => {
    return props.foto ?
        <Image style={styles.imagem} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + props.foto }} /> :
        <Image style={styles.imagemIndisponivel} source={require('../../assets/images/imagemCapa.png')} />
}

export default ImgCapa

const styles = StyleSheet.create({
    imagem: {
        height: 350,
        width: "100%",
        borderRadius: 5,
        borderWidth: 4,
        borderColor: "#20232a",
    },
    imagemIndisponivel: {
        margin: 5,
        height: 350,
        width: "97%"
    }
})
