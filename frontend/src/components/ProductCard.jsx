import { Card, CardBody, SimpleGrid, Stack, Heading, Text, Image, Center, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { base_URL } from "../config";


export default function ProductCard() {
    const { id } = useParams();

    const [products, setProducts] = useState([]);

        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${base_URL}/get-product/${id}`)
                setProducts(response.data);
            } catch (error) {
                console.error("Failed to fetch data", error.message);
            }
        };

        useEffect(() => {
            fetchProducts();
        }, [id]);

    return (
        <>
            <div className="product-card">
                <Heading textAlign='center' size='md' fontFamily='DM Sans' mt='50px' mb='20px'> Produk Lainnya untuk Anda</Heading>
                <SimpleGrid spacing={5} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    {products && products.map((product) => (
                        <Card maxW='200px'>
                        <CardBody >
                            <Center>
                            <Image
                            src={product.url}
                            borderRadius="lg"
                            width='80px'
                            height='80px'
                            align='center'
                            />
                            </Center>
                            <Stack mt='3' spacing='3'>
                            <Heading size='sm' fontFamily='DM Sans' textAlign="center">{ product.title }</Heading>
                            <Text fontFamily='DM Sans' textAlign="center">{ product.price }</Text>
                            </Stack>
                            
                        </CardBody>
                       
                    </Card>
                    ))}
                </SimpleGrid>
            </div>
        </>
    )
}