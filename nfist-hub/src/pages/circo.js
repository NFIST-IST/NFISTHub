import React from 'react';
import { NormalSection, ArticlesSection, Page, Seo } from 'dev-nfist-hub';

export default function CircoPage() {
    return (
        <>
            <Seo title="Circo" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="circo" heading="Circo" />
                <ArticlesSection
                    sectionId="articles"
                    heading="Semana da Física"
                    filterOption="Semana da Física"
                    sources={['Blog', 'Medium']}
                />
            </Page>
        </>
    );
}
