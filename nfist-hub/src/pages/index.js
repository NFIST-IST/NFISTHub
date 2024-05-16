import React from 'react';
import {
    AboutSection,
    ArticlesSection,
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
} from 'dev-nfist-hub';

export default function IndexPage() {
    return (
        <>
            <Seo title="NFIST" />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                <ArticlesSection sectionId="articles" heading="Últimos Artigos" sources={['Blog']} />
                <AboutSection sectionId="about" heading="Núcleo de Física do Instituto Superior Técnico" />
                <InterestsSection sectionId="details" heading="Details" />
                <ProjectsSection sectionId="features" heading="Built-in Features" />
                <ContactSection sectionId="github" heading="Contactos" />
            </Page>
        </>
    );
}
