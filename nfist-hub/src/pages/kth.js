import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function KTHPage() {
    return (
        <>
            <Seo title="KTH" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="kth" heading="KTH Royal Institute of Technology" />
            </Page>
        </>
    );
}
