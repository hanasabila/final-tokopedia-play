import useFetch from "../custom-hooks/useFetch";

export default function Comments() {
    const { data } = useFetch('http://localhost:5000/tokplay/get-comment/:videoID');

    return (
        <>
        <div className="video-card">
            <SimpleGrid columns={3} spacing='50px' maxChildWidth="350px" mt='40px' mb='100px'>
            {data && data.map((video) => (
                <Box display="flex" justifyContent="center">
                   <Image
                    key={video._id}
                    src={video.imgURL}
                    borderRadius='lg'
                    objectFit='cover'
                    width="100%"
                    />         
                </Box>
            ))}
        </SimpleGrid>
        </div>
        </>
    )
}