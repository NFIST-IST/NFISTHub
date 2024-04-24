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
                    heading="Latest Articles"
                    filterOption="Pulsar"
                    sources={['Blog', 'Medium']}
                />
            </Page>
        </>
    );
}
