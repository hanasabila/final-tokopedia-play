import { Box, Text, Heading, Container, Center } from "@chakra-ui/react";
import VideoCard from "../components/VideoCard";
import Footer from "../components/Footer";

const Home = () => {

    return (
        <>
        <div className="header">
            <Container mt='40px' centerContent maxW='1200px'>
            <Center>
            <Box mt="40px">
            <Heading textAlign="center" fontWeight="medium" fontFamily="DM Sans" mb="10px"> Tokopedia Play </Heading>
            <Text textAlign="center" fontSize="xl"> Nonton Live Streaming & Live Shopping Produk Unggulan Tokopedia</Text>
            <Text textAlign="center" fontSize="xl"> Dapatkan promo khusus, ada diskon, gratis ongkir dan lainnya di Tokopedia Play!</Text>
            
            <div className="content">
                <VideoCard />
                <Footer />
            </div>
            </Box>
            </Center>
            </Container>
        </div>
        </>
     );
}
 
export default Home;