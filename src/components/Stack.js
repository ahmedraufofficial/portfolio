import React from 'react'
import { Box } from '@mui/material'
import { FaPython, FaReact, FaCss3Alt, FaNode, FaVuejs, FaPhp, FaNodeJs, FaHtml5, } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiSqlite, SiGraphql, SiFlask, SiDjango, SiApollographql, SiSymfony, SiExpress, SiNextdotjs, SiNuxtdotjs, SiJavascript, SiTypescript, SiRedis } from 'react-icons/si' 

const box = {
    padding: '1em',
    border: '1px dashed grey',
  };

const row = {
    display: 'flex',
    justifyContent: 'space-between',
  }

const divider = {
    height: '20px',
    width: '0.5px',
    marginLeft: '20px',
    marginRight: '20px',
    backgroundColor: 'white',
    alignSelf: 'center',
  }

const Stack = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
        
    <Box sx={{ p: 2, border: '1px dashed grey' }}>
        <div>Backend</div> 
        <div style={{margin: '1em'}}></div>
        <div style={row}>
            <Box sx={box}>
                <FaPython size={30} />
            </Box>
            <div style={divider}></div>
            <Box sx={box}>
                <SiFlask size={30} />
            </Box>
            <Box sx={box}>
                <SiDjango size={30} />
            </Box>
        </div>
        <div style={{margin: '1em'}}></div>
        <div style={row}>
            <Box sx={box}>
                <FaNode size={30} />
            </Box>
            <div style={divider}></div>
            <Box sx={box}>
                <SiExpress size={30} />
            </Box>
            <Box sx={box}>
                <FaNodeJs size={30} />
            </Box>
        </div>

        <div style={{margin: '1em'}}></div>
        <div style={row}>
            <Box sx={box}>
                <SiApollographql size={30} />
            </Box>
            <div style={divider}></div>
            <Box sx={box}>
                <SiGraphql size={30} />
            </Box>
        </div>

        <div style={{margin: '1em'}}></div>
        <div style={row}>
            <Box sx={box}>
                <FaPhp size={30} />
            </Box>
            <div style={divider}></div>
            <Box sx={box}>
                <SiSymfony size={30} />
            </Box>
        </div>
    </Box>

    <Box sx={{ p: 2, border: '1px dashed grey' }}>
        <div>Frontend</div>  
        <div style={{margin: '1em'}}></div>
        <div style={row}>
            <Box sx={box}>
                <FaReact size={30} />
            </Box>
            <div style={divider}></div>
            <Box sx={box}>
                <SiNextdotjs size={30} />
            </Box>
        </div>
        <div style={{margin: '1em'}}></div>
        <div style={row}>
            <Box sx={box}>
                <FaVuejs size={30} />
            </Box>
            <div style={divider}></div>
            <Box sx={box}>
                <SiNuxtdotjs size={30} />
            </Box>
        </div>
        <div style={{margin: '1em'}}></div>
        <div style={row}>
            <Box sx={box}>
                <SiTypescript size={30} />
            </Box>
        </div>
        <div style={{margin: '1em'}}></div>
        <div style={row}>
            <Box sx={box}>
                <FaHtml5 size={30} />
            </Box>
            <div style={divider}></div>
            <Box sx={box}>
                <FaCss3Alt size={30} />
            </Box>
            <Box sx={box}>
                <SiJavascript size={30} />
            </Box>
        </div>
    </Box>
    
    <Box sx={{ p: 2, border: '1px dashed grey' }}>
        <div>Database</div>  
        <div style={{margin: '1em'}}></div>
        <Box sx={box}>
            <SiMongodb size={30} />
        </Box>
        <div style={{margin: '1em'}}></div>
        <Box sx={box}>
            <SiPostgresql size={30} />
        </Box>
        <div style={{margin: '1em'}}></div>
        <Box sx={box}>
            <SiSqlite size={30} />
        </Box>
        <div style={{margin: '1em'}}></div>
        <Box sx={box}>
            <SiRedis size={30} />
        </Box>
    </Box>
    
    </div>
  )
}

export default Stack