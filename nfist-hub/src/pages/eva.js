import React from 'react';
import { NormalSection, ArticlesSection, Page, Seo } from 'dev-nfist-hub';

export default function EVAPage() {
    return (
        <>
            <Seo title="EVA" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="eva" heading="EVA" />
                <ArticlesSection
                    sectionId="articles"
                    heading="Últimas Edições"
                    filterOption="EVA"
                    sources={['Blog', 'Medium']}
                />
            </Page>
        </>
    );
}
