import { TextField, Typography, Button } from '@material-ui/core'
import React, { useState,useRef } from 'react'
import { useDispatch } from 'react-redux'
import useStyles from './styles'

import { commentPost } from '../../actions/posts';

const CommentSection = ({post}) => {

    const classes = useStyles();

    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');
    const dispatch=useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const commentsRef = useRef();
    // console.log(user);
    const handleComment = async()=> {

     const newComments= await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));
     setComment('');
     setComments(newComments);
     commentsRef.current.scrollIntoView({ behavior: 'smooth' });
    };
console.log(post.comments);
    return (



        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant='h6'>Comments</Typography>
                            {comments?.map((c, i) => (
                              <Typography key={i} gutterBottom variant="subtitle1">
                                <strong>{c?.split(': ')[0]}</strong>
                                  {c?.split(':')[1]}
            </Typography>
          ))}

                </div>

            <div style={{ width: '70%' }}>

                <Typography gutterBottom variant="h6">Write a comment</Typography>
                <TextField
                    fullWidth
                     minRows={4} 
                     variant='outlined' 
                     label="comment" 
                     value={comment} 
                     onChange={(e) => setComment(e.target.value)} >

                </TextField>
                <br />
                <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="primary" variant="contained" onClick={handleComment}>Submit</Button>
            </div>
            </div>
        </div>


    )
}

export default CommentSection