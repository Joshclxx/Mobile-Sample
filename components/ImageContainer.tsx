import React from "react";
import { Image, ImageSourcePropType, ImageStyle, Text, View, ViewStyle } from "react-native";


interface ImageContainerProps {
    source: ImageSourcePropType;
    width?: number;
    height?: number;
    borderRadius?: number;
    style?: ViewStyle | ViewStyle[];
    imageStyle?: ImageStyle | ImageStyle[];
    title?: string,
    description?: string,
    price?: number,
}

const ImageContainer: React.FC<ImageContainerProps> = ({
    source,
    width = 100,
    height = 100,
    borderRadius = 10,
    style,
    imageStyle,
    title, 
    description,
    price,
}) => {
    return (
        <View style={[{ width, height, borderRadius, overflow: "hidden" }, style]}>
            <Image 
                source={source}
                style={[{ width: '100%', height: '100%', borderRadius }, imageStyle]}
                resizeMode="cover"
            />
            <Text>{ title }</Text>
            <Text>{ description }</Text>
            <Text>{ price }</Text>
        </View>
    );
};

export default ImageContainer;