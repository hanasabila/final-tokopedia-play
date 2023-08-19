import { Card, CardBody, Image, SimpleGrid, Box, Container, Text, Heading, Divider } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { base_URL } from "../config";
import axios from "axios";

export default function ShowComments() {
    const { id } = useParams();

    const [comments, setComments] = useState([]);

        const fetchComments = async () => {
            try {
                const response = await axios.get(`${base_URL}/get-comment/${id}`)
                setComments(response.data);
            } catch (error) {
                console.error("Failed to fetch data", error.message);
            }
            };

            useEffect(()=> {
                fetchComments();
            }, [id]);

    return (
        <>
        <div className="show-comments">
            <Box mt="30px" mb='30px'>
                <Heading size='md' mt='30px' mb='10px' fontFamily='DM Sans'>Komentar</Heading>
                <Divider />
                {comments && comments.map((comment) => (
                    <Box mt='10px'>
                        <Text fontWeight='bold' fontFamily='DM Sans'>
                            {comment.username}
                        </Text>
                        <Text fontFamily='DM Sans'>
                            {comment.comment}
                        </Text>
                    </Box>
                ))}
                <Heading size='md' mt='30px' mb='10px' fontFamily='DM Sans'>Tambah Komentar</Heading>
                <Divider />
            </Box>
        </div>
        </>
    );
}
