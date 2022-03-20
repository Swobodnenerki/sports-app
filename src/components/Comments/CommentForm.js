import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { CommentButtonContainer, CommentFormContainer } from "./CommentsElements";
const CommentForm = ({handleSubmit, submitLabel}) =>{
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const isTextareaDisabled = text.length === 0 || email.length === 0;
    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(text, email);
        setText("");
        setEmail("");
      };

    return(
        <CommentFormContainer>
            <TextField
                id="outlined-multiline-static"
                label="Comment"
                multiline
                rows={4}
                sx={{margin: '10px', width: '100%'}}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ width: '100%', fontFamily: 'Montserrat', margin: '10px'}} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <CommentButtonContainer>
                <Button className="comment-form-button" variant="contained" disabled={isTextareaDisabled} sx={{ backgroundColor: 'black', borderRadius: '20px', marginBottom: '20px', fontFamily: 'Montserrat' }} onClick={onSubmit} endIcon={<SendIcon/>}>
                    {submitLabel}
                </Button>
            </CommentButtonContainer>                
        </CommentFormContainer>
    )
};
export default CommentForm;