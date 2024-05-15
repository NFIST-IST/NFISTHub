import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function MadraPage() {
    return (
        <>
            <Seo title="ITT Madra" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="madra" heading="Indian Institute of Technology Madras" />
            </Page>
        </>
    );
}
