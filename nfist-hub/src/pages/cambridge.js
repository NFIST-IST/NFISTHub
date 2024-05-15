import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function CambridgePage() {
    return (
        <>
            <Seo title="Cambridge" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="cambridge" heading="University of Cambridge" />
            </Page>
        </>
    );
}
