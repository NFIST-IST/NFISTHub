import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function AaltoPage() {
    return (
        <>
            <Seo title="Aalto" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="aalto" heading="Aalto University" />
            </Page>
        </>
    );
}
