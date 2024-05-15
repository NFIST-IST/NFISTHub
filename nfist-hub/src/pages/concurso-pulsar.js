import React from 'react';
import { NormalSection, ArticlesSection, Page, Seo } from 'dev-nfist-hub';

export default function ConcursoPulsarPage() {
    return (
        <>
            <Seo title="Concurso Pulsar" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="concurso-pulsar" heading="Concurso Pulsar" />
                <ArticlesSection
                    sectionId="articles"
                    heading="Últimas Edições"
                    filterOption="Concurso Pulsar"
                    sources={['Blog', 'Medium']}
                />
            </Page>
        </>
    );
}
