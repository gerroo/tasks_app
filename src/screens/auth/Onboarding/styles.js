import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/colors";

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
    },
    image: {
        height: height,
        flexDirection: "column-reverse",
        justifyContent: "flex-start",
    },
    modal: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 24,
        paddingVertical: 32,
        paddingBottom: 48,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        width: '90%',
    },
    subtitle: {
        color: colors.gray,
        marginTop: 16,
        fontSize: 16,
        textAlign: "center",
        width: '85%',
    },
    button_group: {
        width: "90%",
        alignItems: "center",
        marginTop: 24,
    },
})

export default styles;