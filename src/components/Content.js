import React from 'react'
import { Fade } from 'react-reveal';
import { Button } from '@mui/material';
import Stack from './Stack';
import { GiPlainArrow } from "react-icons/gi";
import Card from './Card';
import { AiOutlineMail,AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

const Content = () => {
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    return (
        <>
        <div style={{display: 'flex', position: 'relative', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', height: '100vh'}}>
            <Fade top>
            <h1 style={{ fontSize: '15em', fontWeight: 500, letterSpacing: '-0.05em', height: '46vh', marginTop: '0.3em'}}>hello,</h1> 
            </Fade>
            <h2 style={{marginTop: '-1em', display: 'inline'}}>
                <span>I am </span>
                <span class="typewrite" data-period="2000" data-type='[" Ahmed Rauf", " a Full Stack Developer", " a DevOps Engineer", " a Backend expert"]'>
                    <span class="wrap"></span>
                </span>
            </h2>
            <div class="arrow">
              <GiPlainArrow/>              
            </div>
        </div>
        <div style={{display: 'flex', position: 'relative', flexDirection: 'column', justifyContent: 'center', textAlign: 'center',  minHeight: '100vh'}}>
        <Fade bottom>
            <h2>
                Get to know me!
            </h2>
            <h3>
                A Full Stack Engineer with a background of over 3+ years in the Ecommerce, Real Estate, and Information Security industry. Focused on
                developing and operating scalable, well-documented code and software
                solutions to enhance business productivity. Highly experienced in
                programming Full Stack applications, and microservices using Node Js,
                Python, Kafka, React, integrating FinTech, 3rd party API's and much more!
            </h3>
        </Fade>
        </div>
        <div style={{display: 'flex', position: 'relative', flexDirection: 'column', justifyContent: 'center', textAlign: 'center',  height: '100vh'}}>
            <Fade bottom>
            <h2>
                My Stacks
            </h2>
            <Stack />
            </Fade>
        </div>
        <div style={{display: 'flex', position: 'relative', flexDirection: 'column', justifyContent: 'center', textAlign: 'center',  minHeight: '100vh'}}>
            <Fade bottom>
            <h2>
                My / Team Projects
            </h2>
            </Fade>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Card caption="Binge.ae" content="An ecommerce marketplace of everything - made on Nuxt.Js, Symfony, PHP, Flask, Python, MongoDB, Redis and MariaDB" position="Team" url="https://binge.ae" git="https://dev.azure.com/binge-client/" />
                <Card caption="Uhpae" content="A real estate organization in UAE - made on Flask, Python, React, JavaScript, HTML, CSS, SASS and SQLite" position="Solo" url="https://uhpae.com" git="https://github.com/ahmedraufofficial/VPS_website" />
                <Card caption="Lumsum.io" content="A construction based Ecommerce website - made on Next.Js, TypeScript, GraphQL, NodeJs and PostgreSQL" position="Team" url="https://staging-ecom.lumsum.io/" git="https://github.com/lumsum-io" />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: "3em"}}>
                <Card caption="CRM" content="A CRM made to upload properties, create leads and follow up with potential customers - made on Flask, Python, JavaScript, HTML, CSS, FlaskSQLAlchemy and SQLite" position="Solo" url="https://crm.uhpae.com" git="https://github.com/ahmedraufofficial/CRM" />
                <Card caption="Carology" content="An auction app to sell and bid on vehicles - made on React Native, Express, Node.Js, MongoDB" position="Solo" git="https://github.com/ahmedraufofficial/auctionReactNativeApp" />
                <Card caption="Chat App" content="A chat application with TCP Sockets communication - made on React, Express, Socket IO, Node.Js" position="Solo" git="https://github.com/ahmedraufofficial/TypeScriptSocketChatApp" /> 
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: "3em"}}>
                <Card caption="Covid Test" content="An analysis and prediction on potential covid cases - made on Jupyter Notebook, Pandas, Sklearn, Python" position="Solo" git="https://github.com/ahmedraufofficial/covid_analysis" />
                <Card caption="GitHub API" content="A UI made to search and fetch details of any user or repo on github - made on React, Redux, Redis, Express, Node.Js, Swagger" position="Solo" git="https://github.com/ahmedraufofficial/react-githubapi" />
                <Card caption="Node Crud" content="A CRUD website specifically using template engines and beautiful UI - made on EJS, Express, Node.Js, MongoDB" position="Solo" git="https://github.com/ahmedraufofficial/NodeJsCrudApp" /> 
            </div>

            <h4>
                Find more at
            </h4>
            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '-2em', marginBottom: '4em'}}>
            <a href="https://github.com/ahmedraufofficial"><Button variant='outlined'>
                @ahmedraufofficial                
            </Button></a>
            </div>
        </div>
        <div style={{width: '100%', height: '7em', background: 'linear-gradient(30deg, rgba(200,80,192,0.5), rgba(255,204,112,0.8))'}}>
            <div style={{display: 'flex', justifyContent: 'space-around',paddingTop: '1.2em'}}>
                <p><AiOutlineMail size={30}/><a href="mailto:ahmedraufkh@outlook.com">ahmedraufkh@outlook.com</a></p>
                <p><AiOutlineLinkedin size={30}/><a href="https://www.linkedin.com/in/ahmed-rauf-khan-a42aa419b/">Ahmed Rauf Khan | Full Stack Developer</a></p>
                <p><AiOutlineWhatsApp size={30}/>+971 56 2294596</p>
            </div>
        </div>
        </>
    )
}

export default Content