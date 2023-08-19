import { AspectRatio, Box, Container, Spacer } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { base_URL } from "../config";
//import CommentForm from "../components/CommentForm";
import ShowComments from "../components/ShowComments";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import NewComment from "../components/NewComment";

export default function VideoDetail() {
    
    const { id } = useParams();

    const[vidURL, setVidURL] = useState("");

        const fetchVideo = async () => {
            try {
                const response = await axios.get(`${base_URL}/video/${id}`);
                const imgURL = response.data.imgURL;
                setVidURL(imgURL.split("/")[4]);
            } catch(error) {
                console.error('error fetching data', error);
            }
        };
        useEffect(() => {
            fetchVideo();
        }, [id]);

    return (
        <>
        <div className="container">
            <Container centerContent mt="100px">
                <Box>
                <iframe
                width="800"
                height="400"
                src={"https://www.youtube.com/embed/" + vidURL}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
                </iframe>
                <Spacer />
                <ShowComments />
                
                <NewComment />
                <Spacer />
                <ProductCard />
                </Box>
            </Container>
            <Footer/>
        </div>
        
        </>
    );
}