import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function MobilidadePage() {
    return (
        <>
            <Seo title="Mobilidade" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="mobilidade" heading="Mobilidade" />
            </Page>
        </>
    );
}
