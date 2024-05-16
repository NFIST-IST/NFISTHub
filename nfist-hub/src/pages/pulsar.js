import React from 'react';
import { NormalSection, ArticlesSection, Page, Seo } from 'dev-nfist-hub';

export default function PulsarPage() {
    return (
        <>
            <Seo title="Pulsar" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="pulsar" heading="Pulsar" />
                <ArticlesSection
                    sectionId="articles"
                    heading="Concurso Pulsar"
                    filterOption="Concurso Pulsar"
                    sources={['Blog', 'Medium']}
                />
                <ArticlesSection
                    sectionId="articles"
                    heading="Últimas Edições"
                    filterOption="Pulsar"
                    sources={['Blog', 'Medium']}
                />
            </Page>
        </>
    );
}
