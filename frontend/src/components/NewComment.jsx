import { Box, Button, Flex, FormControl, FormLabel, Input, Spacer, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { base_URL } from "../config";
import { useParams } from "react-router-dom";

export default function CommentForm() {

    const { id } = useParams;

    const [username, setUsername] = useState('');
    const [newComment, setNewComment] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(`${base_URL}/add-comment/${id}`,
            {
                username: username,
                comment: newComment
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            );

            if (response.status === 2000) {
                setError(null);
                setUsername("");
                setNewComment("");
                console.log('New comment added:', response.data);
            }
        } catch (error) {
            setError('failed to add comment');
            console.log('error adding comment', error);
        }
    };
    
    return (
        <>
        <Box>
            <Flex>
            <FormControl className="add-comment" onSubmit={handleSubmit} display='block'>
                <FormLabel>Username</FormLabel>
                <Input
                variant='flushed'
                type='text'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                width='50%'
                mb='20px'
                />

                <FormLabel>Komentar</FormLabel>
                <Input
                variant='flushed'
                type='text'
                onChange={(e) => setNewComment(e.target.value)}
                value={newComment}
                />
                <Spacer/>
                <Button alignSelf='flex-end' mt='20px' size='md' type='submit'> Tambah Komentar </Button>
                {error && <div className="error">{ error }</div>}
            </FormControl>
        </Flex>
        </Box>
        </>
    )
}