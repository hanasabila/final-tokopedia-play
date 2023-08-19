import { Box, Button, Flex, FormControl, FormLabel, Input, Spacer, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import useFetch from "../custom-hooks/useFetch";
import axios from "axios";
import { base_URL } from "../config";

const CommentForm = () => {
    const [username, setUsername] = useState('');
    const [newComment, setNewComment] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault()

        const newComment = {username: username, comment: newComment};

        try {
            const response = await axios.post(`${base_URL}/add-comment/`)
        }

        const response = await useFetch(`http://localhost:5000/tokplay/add-comment/${videoID}`, {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }

        if (response.ok) {
            setError(null)
            setUsername("")
            setNewComment("")
            console.log('new comment added:', json);
        }
    }

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

export default CommentForm;