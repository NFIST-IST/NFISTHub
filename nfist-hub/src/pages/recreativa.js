import React from 'react';
import { NormalSection, ArticlesSection, Page, Seo } from 'dev-nfist-hub';

export default function RecreativaPage() {
    return (
        <>
            <Seo title="Recreativa" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="recreativa" heading="Recreativa" />
                <ArticlesSection
                    sectionId="articles"
                    heading="Últimas Públicações"
                    filterOption="Recreativa"
                    sources={['Blog', 'Medium']}
                />
            </Page>
        </>
    );
}
