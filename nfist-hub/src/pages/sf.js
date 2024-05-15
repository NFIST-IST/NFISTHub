import React from 'react';
import { NormalSection, ArticlesSection, Page, Seo } from 'dev-nfist-hub';

export default function SFPage() {
    return (
        <>
            <Seo title="Semana da Física" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="sf" heading="Semana da Física" />
                <ArticlesSection
                    sectionId="articles"
                    heading="Últimas Edições"
                    filterOption="Semana da Física"
                    sources={['Blog', 'Medium']}
                />
            </Page>
        </>
    );
}
