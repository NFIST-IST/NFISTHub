import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function SorbonnePage() {
    return (
        <>
            <Seo title="Sorbonne" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="sorbonne" heading="Sorbonne Université (Université Pierre et Marie Curie)" />
            </Page>
        </>
    );
}
