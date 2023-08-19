import React from "react";
import { Image, SimpleGrid, Box } from "@chakra-ui/react";
import useFetch from "../custom-hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { base_URL } from "../config";

export default function VideoCard() {
    const { data } = useFetch(`${base_URL}/home`);
    const navigateTo = useNavigate();

    return (
        <>
        <div className="video-card">
            <SimpleGrid columns={3} spacing='50px' mt='40px' mb='100px' templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
            {data && data.map((video) => (
                <Box justifyContent="center" alignContent='center'>
                   <Image
                    key={video._id}
                    src={video.imgURL}
                    borderRadius='lg'
                    objectFit='cover'
                    width="100%"
                    onClick={() => navigateTo(`/video-detail/${video._id}`)}
                    />         
                </Box>
            ))}
        </SimpleGrid>
        </div>
        </>
    )
}
