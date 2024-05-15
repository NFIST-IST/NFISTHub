import React from 'react';
import { NormalSection, ArticlesSection, Page, Seo } from 'dev-nfist-hub';

export default function JEFPage() {
    return (
        <>
            <Seo title="JEF" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="jef" heading="JEF" />
                <ArticlesSection
                    sectionId="articles"
                    heading="Últimas Edições"
                    filterOption="JEF"
                    sources={['Blog', 'Medium']}
                />
            </Page>
        </>
    );
}
