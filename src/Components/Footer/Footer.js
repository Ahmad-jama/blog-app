import React from "react";
import Container from "../GlobalStyles/Container";
import { FooterContainer } from "./FooterStyle";
import Button from "../GlobalStyles/Button";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="section-container" style={{ background: "#5f5aed" }}>
        <Container>
          <FooterContainer>
            <div>
              <h1>Ahmad Jama</h1>
              <ul>
                <li>support men on m.jama221@gmail.com</li>
                <li>number: +966572238778</li>
                <li>
                  <Button>
                    <Link to={"hay"}>Contact me</Link>
                  </Button>
                </li>
              </ul>
            </div>
            <div>
              <h2>dancing</h2>
              <ul>
                <li>compny</li>
                <li>good ideas</li>
                <li>compny</li>
                <li>good ideas</li>
                <li>what good</li>
                <li>see me</li>
                <li>contact us</li>
              </ul>
            </div>
            <div>
              <h2>dancing</h2>
              <ul>
                <li>compny</li>
                <li>good ideas</li>
                <li>compny</li>
                <li>good ideas</li>
                <li>see me</li>
                <li>contact us</li>
              </ul>
            </div>
            <div>
              <h2>dancing</h2>
              <ul>
                <li>good ideas</li>
                <li>what good</li>
                <li>see me</li>
                <li>contact me</li>
              </ul>
            </div>
          </FooterContainer>
        </Container>
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.3rem",
          backgroundColor: "#363636",
          color: "white",
          padding: ".3rem",
        }}
      >
        Created and Developed by Ahmad Jama
      </p>
    </>
  );
};

export default Footer;
