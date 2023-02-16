//1. Import Area
import React from "react";
import Layout from "./Components/Layout/Layout";
import Section from "./Components/Layout/Section";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import './Style.css';

//2. Defination Area
//This time use function defination area
export default function App() {
    //Every function return something
    return (
        <Layout>
            <Section>
                <Page1></Page1>
                <Page2></Page2>
            </Section>
        </Layout>
    )
}
//3. Export Area
