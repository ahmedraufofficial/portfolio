import React from 'react'
import Box from '@mui/material/Box';
import {AiOutlineLink, AiFillGithub} from 'react-icons/ai'
import {BsPersonFill} from 'react-icons/bs'
import { Fade } from 'react-reveal';

const box = {
    width: 300,
    height: 300,
    background: 'linear-gradient(30deg, rgba(200,80,192,0.5), rgba(255,204,112,0.8))',
  }
const Card = ({content, caption, git, url, position}) => {
  return (
    <Fade bottom>
    <Box style={box}>
        <h4 style={{marginTop: '0.2em'}}>
            {caption}
        </h4>
        <p style={{textAlign: 'left', padding: '1em', marginTop: '-0.8em', height: '6em'}}>
            {content}
        </p>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            {
                git ? <a href={git}><AiFillGithub size={25} />GitHub</a> : null
            }
            {
                url ? <a href={url}><AiOutlineLink size={25} />Url</a>  : null
            }
            <span><BsPersonFill size={25} />{position}</span>
        </div>
    </Box>
    </Fade>
  )
}

export default Card